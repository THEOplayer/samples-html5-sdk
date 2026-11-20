# Getting started with OptiView Player on webOS

## Requirements
* [Node.js](https://nodejs.org/) 22.12 or later
* This sample uses TypeScript and Rollup 4, and depends on `theoplayer` `^11`, so `npm install` gets the latest OptiView Player 11.x release.
* An OptiView Player license for domains other than _localhost_. Get one on the [THEOportal](https://portal.theoplayer.com).

## Prerequisites

1. Make sure the WebOS SDK, available for download at <https://webostv.developer.lge.com/develop/tools/cli-installation>, is correctly installed on your system.
   - You will find the following 2 installation options:
     - At a minimum you need the CLI tool packaged in the _minimal installation bundle_. You will be able to install other components later on if required by using the Component Manager in your installation folder `{installation folder}\webOS_TV_SDK\ComponentManager)`
     - The _full installation bundle_ will install the CLI, WebOS IDE (Eclipse based), VirtualBox emulators, plugins, ...
       - The WebOS IDE is a handy way to set up physical devices, but everything can also be cleanly configured using the CLI and a terminal window in the IDE of your choice (Visual Studio Code, WebStorm, ...)
       - You can create WebOS projects and import compliant WebOS projects into the WebOS IDE by using _import webos project_ in the _webos_ menu of the IDE
2. Make sure to add the bin folder located at`{installation folder}\webOS_TV_SDK\CLI\bin` to the `PATH` variable of your OS to make it available everywhere from the command line.
3. Validate that the CLI is correctly set up by invoking `ares` at the command line of a new terminal. If the command is recognized, you are correctly set up.

**Important Note** If you require interactive debugging (even if you only use the CLI), you will need to install the WebOS IDE. Although you might not directly use the IDE, the CLI debugging command will open up a Chromium Inspection browser that is only available when the WebOS IDE is installed on the system.

## Build your app

- First we'll need a collection of HTML/CSS/JS files for the app. Next we will package it to an ipk file that will be deployed on the webOS device
- The packager will use the `app` folder to build the IPK package, so that's where the JS, CSS and HTML files will need to end up
- Run `npm install` in this folder. This installs [the `theoplayer` package](https://www.npmjs.com/package/theoplayer) and copies the OptiView Player library files to the `libs` folders of `app` and `example-with-ui`.
- If you're not interested in testing the example-with-ui variant, the `app` folder contains a crude solution with entry point `index.html` and is ready to be packaged.
- The folder `example-with-ui` contains a more elaborate example. The following extra steps are required
  - optionally modify the code in `example-with-ui/src` and build it to `example-with-ui/js/Main.js`
    ```
    npm run build
    ```
  - next copy the `js` folder, the `css` folder and the `index.html` file to the app folder (overwriting the existing files)
    ```
    cp -R example-with-ui/js/ app/js/
    cp -R example-with-ui/css/ app/css/
    cp example-with-ui/index.html app/
    ```

## Setting up the physical device

### Prerequisites

1. Make sure you have created an LG Developer Account at <https://webostv.developer.lge.com/develop/getting-started/developer-mode-app>. You will need this to login to the Developer Tools app on the physical device.
2. Download the Developer Tools app to the tv (use the LG Content Store), login with your LG account and follow the instructions to set the device in developer mode (a restart is required)

### Make a connection

- In case you downloaded the WebOS IDE, you can use the WebOS IDE to link your development environment to the physical device (Target Configuration > New Connection)
- Manually set up (use the guideline provided by LG)
  1.  Open terminal and enter `ares-setup-device`
      1. Choose `add`
      2. Enter device name: tv (feel free to use another name)
      3. Enter the IP address of the LG tv (open the Developer Tools app on the device to find out)
      4. Use port `9922` for physical devices (for an emulator the port is 6622)
      5. SSH user: this should be set to `prisoner` (**important note**: do not use the proposed `root`, this will not work)
      6. Enter an optional description
      7. Authentication: choose option `password`
      8. Leave the actual password blank
      9. Save
  2.  Next: you need to acquire a key from the physical device to be able to securely interact
      1. Enter `ares-novacom -d tv --getkey` (make sure to use the device name you choose in case you changed it)
      2. You will be prompted for a key; the key will be visible in the Developer Tools app on the physical device

## Emulator

**Important Note**: the use of an emulator is not recommended as emulators do not implement all features (e.g. DRM).

If you decide to use an emulator: start the emulator of your choice (you might need to install it using the Component Manager - see the Prerequisites section of this document)

# Running the app

**Note**: please visit the LG WebOS developer site at https://webostv.developer.lge.com/ to get more info on commands, tools and guidelines.

First make sure to cd into the root folder (this is the parent of app folder). Next run the following commands.

### Packaging

```
ares-package  ./app --outdir ./
```

### Installation

Default name for the created package is _webos.theo_1.0.0_all.ipk_, _tv_ is the device name that was given when setting up the device in the previous step.
This step will fail if there is no connection to the device, e.g. the device is offline, not on the same network, ... .

```
ares-install webos.theo_1.0.0_all.ipk  -d tv
```

### Launch

App id is by default _web.theo_ (you can change this in `appinfo.json`)

```
ares-launch web.theo  -d tv
```

### Debug

```
ares-inspect web.theo -d tv --open
```

## About the player implementation

This sample is a separate npm project, so the root `npm start` of this repository does not build or serve it.

* The apps use `THEOplayer.chromeless.js`, the player without the default UI, because TV apps use their own UI for remote control navigation.
* `npm install` runs `copy:theoplayer`, which copies the player files (`.js`, `.css`, `.html` and `.wasm`, without the ESM and type files) from `node_modules/theoplayer` to `app/libs/` and `example-with-ui/libs/`. Run `npm run copy:theoplayer` again after you update the player.
* The pages load `libs/THEOplayer.chromeless.js` and set `libraryLocation` to `libs/`. The transmuxer worker for HLS is loaded from this folder, so `libs/` must be part of the IPK package.
* `npm run typecheck` checks the TypeScript code of `example-with-ui`, and `npm run watch` rebuilds it when a file changes.

### License

Apps on a TV are not served from `localhost`, so the license that allows `localhost` does not work there. Add `license: '<your license>'` to the player configuration in `app/index.html`, or in `example-with-ui/index.html` for the UI example. Get a license for the Web SDK on [THEOportal](https://portal.theoplayer.com).

## Documentation
* [Getting started on webOS](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/webos/getting-started/)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
