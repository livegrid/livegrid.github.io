# Web App

Once connected to the same WiFi as your Livegrid, you can access the web app by opening a browser and navigating to `http://livegrid.local`. However this sometimes doesn't work, so if you are not able to access it, try using the IP address of your Livegrid instead.

The IP address can be found by going to 'WiFi Info' using the touch buttons.

Once connected, it is highly recommended to install a shortcut on your phone. This can be done by clicking on the menu button (top left or top right corner) and then clicking on the `+ Add to Home Screen` button on your mobile device.

## Effects

There is a limited library of effects that you can choose from. This will be expanded in future updates, along with the ability to tweak parameters of each effect.

## Images

Pick one of the pre-loaded images or upload your own. The livegrid will automatically resize the image to fit the screen. This applies to gifs also.

Uploaded images are automatically stretched to 1:1 aspect ratio, so you should manually crop them to your desired size before uploading.

## Text

This is useful for displaying notes etc. You can change the font size. Adjust font color will be added in future updates.

## Settings

There's a lot going on here, so let's break it down.

### Connectivity

- **Wi-Fi**: View or change the network credentials. If you swap networks, the device reconnects automatically after a short reboot.
- **MQTT**: Enter broker details and toggle Home Assistant discovery. See the [MQTT guide](mqtt.md) for topic breakdowns.
- **eDMX**: Pick between sACN, Art-Net, or UDP and adjust universes/ports. Cross-reference the [eDMX section](edmx.md) for protocol-specific tuning.

### Display

- **Brightness**: Choose manual brightness levels or leave it in auto mode tied to the ambient light sensor.
- **Effects**: Switch between the aquarium, still images, text, or custom effects deployed from the development workflow.
- **Schedules**: Define quiet hours to dim or turn off the panel automatically.

### System

- **Firmware Updates**: Upload firmware bundles or filesystem images generated via PlatformIO.
- **Factory Reset**: Wipes all settings while keeping the aquarium save state unless you opt-in to clearing storage.

If an option is unfamiliar, tap the inline help icons—each opens a brief tooltip or links to the relevant section of this documentation.

