## MQTT & Home Assistant

OpenMatrix exposes essentials over MQTT and supports HA MQTT Discovery for quick setup.

### Entities
- Light: on/off + brightness
- Text: write-only entity to set display text
- Sensors: temperature, humidity, CO2, ambient light (optional), RSSI

### Discovery Topics
- Light: `homeassistant/light/<device_id>/light/config`
- Text: `homeassistant/text/<device_id>/display_text/config`
- Sensors: `homeassistant/sensor/livegrid_<sensor>/config`

### Command/State Topics
- Light command: `livegrid/<device_id>/light/set`
- Light state: `livegrid/<device_id>/light/state`
- Availability: `livegrid/<device_id>/status` (`online`/`offline`)
- Text: configurable (default `livegrid/text`), used for both command and echo state
- Environment state: configurable (default `livegrid/sensors`)

### Light Payloads
JSON schema (preferred):
```json
{"state":"ON","brightness":128}
```
Or plain `ON`/`OFF`.

### Notes
- Brightness scale: 0–255.
- “Power off” turns off the display only; device and sensors remain online.
- Discovery and last-known states are retained.

### Troubleshooting
- Ensure broker host/port and optional credentials are set in Settings → MQTT.
- Verify device publishes `online` to availability.
- If discovery doesn’t appear, restart HA MQTT or toggle MQTT settings to republish.

