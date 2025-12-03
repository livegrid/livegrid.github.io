## eDMX (sACN / Art-Net)

Livegrid speaks multiple DMX-over-IP dialects so you can drop it into nearly any lighting workflow, from production-grade consoles to art installations.

> Prerequisites: You should be comfortable with IP networking and DMX universe mapping. If you are new to DMX, start by reviewing the [development guide](development.md#customize-extend) for firmware-level customization examples.

### Quick Start Video

Watch the forthcoming walk-through to see the entire setup flow—from wiring to universe mapping—inside the Livegrid web UI.

<!-- TODO: Replace VIDEO_ID with the published tutorial ID -->
<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="Livegrid eDMX setup" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
  </iframe>
</div>

### Protocol Overview

- Control the matrix over DMX/IP networks with sACN (E1.31) or Art-Net.
- Configure in the device web app: **Settings → eDMX**
  - Protocol: sACN or Art-Net
  - Mode: RGB or White
  - Multicast: on/off
  - Start Universe and Start Address
  - Timeout (ms)

### Pure UDP Streaming

When latency and refresh rate matter more than cross-compatibility, switch the protocol selector to **UDP (Raw)**. This transport skips DMX framing and pushes pixel data directly to the renderer loop by sending lightweight chunks of rows.

**Why choose UDP?**

- No DMX universe limits: stream arbitrarily wide panels by chunking rows.
- Lower overhead: DMX headers disappear, leaving pure RGB payloads plus an 18-byte metadata header.
- Deterministic timing: packets are applied on arrival without reassembly delays.

**Default configuration**

- Local port: `4510` (configurable under **Settings → eDMX → UDP Port**)
- Chunk height: 2 rows per packet (adjustable; keep payloads <1500 bytes to stay under standard MTU)
- Pixel format: row-major RGB, 8 bits per channel
- Version byte: currently `0x01` to indicate the first revision of the protocol

**Packet layout**

Each datagram begins with an 18-byte header followed by `rows × width × 3` bytes of RGB data:

```
Offset  Size  Description
0       1     'O' (0x4f) identifier
1       1     'M' (0x4d) identifier
2       1     Protocol version
3       1     Flags (0x00 = raw RGB)
4       2     Frame ID (uint16 LE, increments every frame)
6       2     Chunk index (uint16 LE)
8       2     Total chunks in this frame (uint16 LE)
10      2     X offset (uint16 LE, usually 0)
12      2     Y offset (uint16 LE, row start)
14      2     Width in pixels (uint16 LE)
16      2     Rows in this chunk (uint16 LE)
18      …     RGB payload (rows × width × 3 bytes)
```

Chunks are reassembled on the device using the frame ID and chunk index. Missing chunks are dropped silently to keep the pipeline flowing.

**Example sender (Node.js)**

```js
const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

const WIDTH = 64;
const HEIGHT = 64;
const ROWS_PER_CHUNK = 2;
const TARGET_HOST = 'livegrid.local';
const TARGET_PORT = 4510;
const HEADER_SIZE = 18;

let frameId = 0;

function sendFrame(rgbBuffer) {
  const bytesPerRow = WIDTH * 3;
  const totalChunks = Math.ceil(HEIGHT / ROWS_PER_CHUNK);
  const currentFrameId = frameId++ & 0xffff;

  for (let chunk = 0; chunk < totalChunks; chunk++) {
    const rowStart = chunk * ROWS_PER_CHUNK;
    const rows = Math.min(ROWS_PER_CHUNK, HEIGHT - rowStart);
    const payloadLength = rows * bytesPerRow;

    const packet = Buffer.allocUnsafe(HEADER_SIZE + payloadLength);
    packet.writeUInt16LE(currentFrameId, 4);
    packet.writeUInt16LE(chunk, 6);
    packet.writeUInt16LE(totalChunks, 8);
    packet.writeUInt16LE(rowStart, 12);
    packet.writeUInt16LE(WIDTH, 14);
    packet.writeUInt16LE(rows, 16);
    rgbBuffer.copy(packet, HEADER_SIZE, rowStart * bytesPerRow, rowStart * bytesPerRow + payloadLength);

    packet[0] = 0x4f; // 'O'
    packet[1] = 0x4d; // 'M'
    packet[2] = 0x01; // protocol version
    packet[3] = 0x00; // flags (raw RGB)

    socket.send(packet, TARGET_PORT, TARGET_HOST);
  }
}
```

Keep your RGB buffer in row-major order (`WIDTH * HEIGHT * 3` bytes). Call `sendFrame` at your target frame rate (e.g., 30–60 fps).

**Setup steps**

1. Open **Settings → eDMX** and select **Protocol: UDP (Raw)**.
2. Set the UDP port to match your sender (default `4510` in firmware examples).
3. Choose the pixel ordering (RGB or BGR) that matches your content pipeline.
4. Adjust **Rows per chunk** if offered; stay below Ethernet MTU (≈1460 bytes of payload).
5. Save settings—the device reboots the eDMX service with the new configuration.

Use a packet sniffer such as Wireshark to confirm packets are reaching the device if nothing appears on the panel.

### Reference Projects

A companion repository will ship with example node scripts, QLC+ show files, and TouchDesigner patches tailored for Livegrid.

- Repository: <!-- TODO: Replace with the public examples repository URL -->
- Contents: Streaming samples for sACN/Art-Net, example UDP sender (including the chunked protocol shown above), and reusable fixture definitions.
- Quick start:
  1. Clone the repo and install dependencies with `npm install` (for the node examples) or open the provided QLC+ workspace.
  2. Edit `config.json` to match your panel pixel count and universe layout.
  3. Start the sender script or load the show file, then point it at your Livegrid IP.

Check the README for troubleshooting tips and community contributions once the repository is live.

### Common Use Cases

- **Stage lighting**: Patch Livegrid as a fixture in MA3, ETC, or QLC+ and stream via sACN.
- **Projection mapping companions**: Use Art-Net from TouchDesigner to synchronize graphics on physical panels.
- **Media art installations**: Stream high-frame-rate pixel data over raw UDP from a custom renderer for near-zero latency compositions.

