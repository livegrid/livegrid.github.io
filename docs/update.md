# Updating Your Livegrid

See [What's New](changelog.md) for the full list of new features, visual upgrades, and fixes in the latest firmware.

There are two methods to update your Livegrid device. Watch the video guide below for a detailed walkthrough:

<div class="video-wrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/mKSInm_8sm8?si=ycuvYpVrvMIER0k8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Method 1: Using the Web App (Recommended)

1. Download the correct firmware file (`.bin`) from the [GitHub Releases page](https://github.com/livegrid/OpenMatrix/releases/latest):
   - **`livegrid-78x78-upcycled-*.bin`** for 78×78 Upcycled panels
   - **`livegrid-64x64-original-*.bin`** for 64×64 Original panels
   - Can be downloaded on a phone or laptop

2. Update through the Web App:
   - Open the web app at `http://livegrid.local` (or find the IP address in the touch menu under **WiFi Info**)
   - If showing 'Disconnected', restart and reconnect to WiFi
   - Go to **Settings → Firmware Update → Go to Updater**
   - Ensure the target is set to **Firmware**
   - Select or drag-and-drop the `.bin` file — the updater verifies the image size and checksum automatically and reboots once finished

**Note:** If you see a blank or glitchy screen after update, you may have uploaded the wrong firmware version. Simply repeat the process with the other firmware version.

## Method 2: Using Web Installer

For cases where the Web App method isn't working (or for a fresh install), you can use the [Livegrid Web Installer](https://livegrid.github.io/Livegrid-Web-Installer/) (currently shipping **v2.4.0**).

1. Connect your Livegrid device to your computer via USB
2. Access the Web Installer interface
3. Upload the correct firmware

**Important:** This method will perform a factory reset on your device, removing all custom settings.

If you encounter any issues during the update process, try restarting your device and attempting the update again. 