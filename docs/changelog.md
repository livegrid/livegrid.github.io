# What's New

Stay up to date with the latest Livegrid firmware releases. Ready to upgrade? Follow the [Update Guide](update.md) or grab the latest binaries from [GitHub Releases](https://github.com/livegrid/OpenMatrix/releases/latest).

---

## v2.4 — Major Aquarium, Display & Platform Update

*Biggest release since **v2.0** (October 2025) — available for both **78×78 (Upcycled)** and **64×64 (Original)** panels.*

### New & Redesigned Aquarium Creatures
- **New Squid creature:** Features jet-propulsion bursts, trailing mantle physics, animated tentacles, longer outer hunting arms, and subtle propulsion particles.
- **Redesigned Sea Turtle:** Overhauled silhouette with patterned shells (green, tortoiseshell, reef jade, and olive morphs), sweeping flipper strokes, and natural turning motion.

### Display Quality & Aquarium Polish
- **Full 14-bit grayscale & flicker-free rendering (78×78 Upcycled):** Upgraded the MBI5153 driver to full 14-bit depth so dark water no longer crushes to black, fixed panel flicker, and rebuilt frame packing for smoother performance.
- **Instant display on boot:** Your aquarium now starts drawing immediately on power-on instead of waiting for Wi-Fi and sensor warm-up.
- **Richer aquarium atmosphere:**
  - Restored the full 10–35 °C water temperature color palette with smoother wave motion.
  - Eggs now twinkle gently into the water instead of looking like stuck pixels, and creatures enter smoothly from all four edges of the tank.
  - Small boid schools now fade toward white when CO₂ levels rise, matching the health feedback on larger creatures.
  - Fixed triangle rasterization glitches on fish fins, heads, tails, and starfish.
  - *(64×64 Original panels)* Added a procedural seafloor with rocks, moss, coral, seagrass, and blooming anemones.
- **Natural lifecycle:** Fixed fish aging precision and end-of-life behavior so creatures grow, reproduce, and cycle naturally over time.

### Upgraded Wi-Fi Setup & Over-the-Air Updater
- **Redesigned Wi-Fi Setup Portal:** Upgraded to a modern captive portal with **12 language options**, a cleaner mobile layout, and optional **Static IP** configuration.
- **Upgraded Firmware Updater:** Rebuilt OTA update interface with automatic image/flash size checks and improved reliability — eliminating mid-update watchdog resets.

### Smart Home (MQTT / Home Assistant) & Lighting (eDMX)
- **Home Assistant improvements:** All entities now group cleanly under a single device name, temperature sensors work directly with Home Assistant thermostats, and MQTT reliably reconnects after long uptimes or router restarts.
- **Faster eDMX & UDP streaming:** Added a low-latency raw UDP streaming mode (with optional RLE compression) alongside sACN / Art-Net, cut memory overhead, and improved DMX startup stability.

### Reliability & Bug Fixes
- **No phantom food on boot:** Touch input now calibrates a real baseline before arming the feeding pad.
- **Safer upgrades & stability:** Fixed MQTT boot crash loops on pre-configured devices, added I²C bus protection, synced rotation refreshes with display frames so sensor reads can't glitch the panel, and hardened saved aquarium state loading.

---

## v2.0 — Previous Public Release *(October 2025)*

- Initial public release for both **78×78 Upcycled** and **64×64 Original** Livegrid units.
- Core aquatic ecosystem responding to temperature, humidity, and CO₂ with 30-minute autosave.
- Local Web App, touch button menu, Home Assistant MQTT integration (with sensor offset controls), and sACN / Art-Net eDMX support.
