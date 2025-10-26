## eDMX (sACN / Art-Net)

- Overview: Control the matrix over DMX on IP networks. Supports sACN (E1.31) and Art-Net.
- Configuration in web UI: Settings → eDMX
  - Protocol: sACN or Art-Net
  - Mode: RGB or White
  - Multicast: on/off
  - Start Universe and Start Address
  - Timeout (ms)

### Wiring / Network
- Device connects to Wi‑Fi/Ethernet and listens for DMX packets.
- For sACN multicast, ensure IGMP snooping is enabled on your network if needed.

### Channel mapping (RGB mode)
- Pixel order is matrix-dependent; internally mapped to RGB.
- Start Address is the first channel; subsequent channels cover the panel pixels.

### Tips
- Use a single universe for small matrices; for larger, span sequential universes.
- Verify no IP conflicts and the device is on the same subnet as the controller.

