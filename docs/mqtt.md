## MQTT & Home Assistant

OpenMatrix exposes essentials over MQTT and supports HA MQTT Discovery for quick setup.

> Prerequisites: You’ll need access to an MQTT broker (Home Assistant Mosquitto add-on or an external broker) and familiarity with adding integrations in Home Assistant. Review the [development guide](development.md#customize-extend) if you plan to publish bespoke topics or effects.

### Guided Walkthrough

This video shows the full Home Assistant pairing flow, including broker setup, discovery, and dashboard examples.

<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
    src="https://www.youtube.com/embed/8hxftNT4GwU" 
    title="MQTT + Home Assistant with Livegrid" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
  </iframe>
</div>

### First-Time Setup Checklist

1. Open the Livegrid web app and visit **Settings → MQTT**.
2. Enter your broker IP/hostname and port (default 'homeassistant.local' and '1883' for unencrypted brokers).
3. Add credentials if your broker requires them, then click **Save**.
4. Toggle **Home Assistant Discovery** to publish auto-discovery payloads.
5. Restart Home Assistant or reload MQTT integrations if entities do not appear within a minute.

### Broker Tips (Mosquitto Add-on)

- Install the **Mosquitto broker** add-on from Home Assistant’s add-on store.
- Add a user under **Settings → People → Users** and grant MQTT access.
- Update `mosquitto.conf` or the add-on configuration to include the new credentials.
- If you enable TLS, set the Livegrid port to `8883` and upload your CA certificate in the web UI.

### Entities

- Light: on/off + brightness
- Text: write-only entity to set display text
- Sensors: temperature, humidity, CO₂, ambient light (optional), RSSI

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

Plain `ON`/`OFF` strings are also accepted.

### Customize Your Entities

- Use [Home Assistant light profiles](https://www.home-assistant.io/integrations/light/#light-profiles) to define default brightness when turning on the panel.
- Override entity names via **Settings → Devices & Services → MQTT → Configure → Entities**.
- Create template sensors to expose aquarium state or custom effect names if you publish them via MQTT.

### Dashboard Ideas

- Add a **Light card** to dim or toggle the Livegrid quickly.
- Use a **Button card** to send preset text messages by publishing to `livegrid/text`.
- Combine sensor readings (temperature, humidity, CO₂) in a **Gauge** or **Statistics Graph** card to visualize trends.
- Create an **Automation** that switches the panel to a custom effect when CO₂ crosses a threshold.

### Troubleshooting

- Ensure broker host/port and optional credentials are set in **Settings → MQTT**.
- Verify the device publishes `online` to the availability topic; if not, check network or credentials.
- If discovery doesn’t appear, turn Livegrid off and back on.
- For TLS errors, confirm the CA certificate is valid and the broker hostname matches the certificate’s CN/SAN.
- Use the MQTT Explorer add-on to watch topics in real time and confirm payloads reach Home Assistant.

### Common Use Cases

- Trigger ambient or focus-friendly scenes from Home Assistant automations that watch calendar or sensor data.
- Display rotating calendar, weather, or commute text by publishing to the `livegrid/text` topic on a schedule.
- Mirror sensor values (e.g., CO₂ alerts) on the panel using color-coded effects via a simple MQTT rule engine.
- Combine with [eDMX](edmx.md) for hybrid installs where Home Assistant sets the base state and a lighting desk handles show moments.

