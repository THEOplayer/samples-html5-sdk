# OptiView Player Tizen Reference

The OptiView Player Tizen Reference provides a simple reference set-up to simplify integration.

This project provides two Tizen projects:
* `minimum-example`: a barebone example of OptiView Player for Tizen.
* `example-with-ui`: a slightly more advanced showcase of OptiView Player with a Tizen UI.

More specific details on set-up can be found in the respective subdirectories. Below we describe general set-up that applies for both projects:

## Requirements
* [Node.js](https://nodejs.org/) 22.12 or later
* This sample uses TypeScript and Rollup 4, and depends on `theoplayer` `^11`, so `npm install` gets the latest OptiView Player 11.x release.
* An OptiView Player license for domains other than _localhost_. Get one on the [THEOportal](https://portal.theoplayer.com).

## Set-up

* Install Tizen Studio
  * Make sure to install the Tizen Tools under Tools -> Extension Manager (both under Main SDK and Extension SDK tabs)
  * Set up your [certificate under Certificate Manager](https://docs.tizen.org/application/vstools/tools/certificate-manager#creating-a-certificate-profile)
* Run `npm install` in this folder. This installs [the `theoplayer` package](https://www.npmjs.com/package/theoplayer) and copies the OptiView Player library files to `libs/` in both subprojects.
* To build the TypeScript sources of `example-with-ui`, run `npm run build` in this folder.

## Importing the project in Tizen Studio

* Go to Tizen Studio
* Navigate to File -> Import Projects from File System
* Import source: either the `minimum-example` directory or `example-with-ui`). Press confirm.

## Launching with a physical Tizen device (recommended)

### Setting up a physical Tizen device

* On your Tizen device:
  * go to the home menu (home button) and navigate to apps. Launch it.
  * Use the 123-key to type 12345. A menu will prompt.
    * Enable Developer mode.
    * Type in the local IP-address of the laptop you want to deploy a build from. They must be on the same network.
  * Reboot Tizen device by long-pressing (about 2 seconds) the power button on the remote.
* In your laptop:
  * Go to Tizen Studio. Open Tools -> Device Manager.
  * Open Remote Device Manager (the icon with a pc and a smart tv)
    * Add Tizen device via its IP-address, connect and confirm
      * The Tizen IP-address can be found under Settings -> General -> Network -> Network Status -> IP Settings
    * Enable connection with remote device

### Launching on a physical Tizen device

* In Tizen Studio, click right on the project (under Project Explorer). Pick either Run as or Debug as.


## Launching with an Tizen emulator

### Setting up an emulator

We recommend using a physical Tizen device. If this is not possible, using an emulator could be a fallback.

* If you haven't done so, make sure to install the Tizen TV Emulator:
  * In Tizen Studio: Tools -> Package Manager -> Extension SDK -> TV Extensions 5.5
* Create the emulator by pressing the "Create" button and following the steps.

## Launching

* In Tizen Studio, click right on the project (under Project Explorer). Pick either:
  * Run As -> Tizen Web Simulation Application 
  * Debug As -> Tizen Application

### Known limitations of emulators:
* AVPlay will not be available.
* DRM is not available due to lack of a Content Decryption Module (CDM)
* manifest.json permissions is ignored for emulators. Make sure to test on a physical device for certainty.

## About the player implementation

This sample is a separate npm project, so the root `npm start` of this repository does not build or serve it.

* The apps use `THEOplayer.chromeless.js`, the player without the default UI, because TV apps use their own UI for remote control navigation.
* `npm install` runs `copy:theoplayer`, which copies the player files (`.js`, `.css`, `.html` and `.wasm`, without the ESM and type files) from `node_modules/theoplayer` to the `libs/` folder of each app. Run `npm run copy:theoplayer` again after you update the player.
* The pages load `libs/THEOplayer.chromeless.js` and set `libraryLocation` to `libs/`. The transmuxer worker for HLS is loaded from this folder, so keep `libs/` in the Tizen Studio project.
* `npm run build` builds the UI bundle of `example-with-ui`, `npm run watch` rebuilds it when a file changes, and `npm run typecheck` checks its TypeScript code.

### License

Apps on a TV are not served from `localhost`, so the license that allows `localhost` does not work there. Add `license: '<your license>'` to the player configuration in `minimum-example/index.html`, or in `example-with-ui/index.html` for the UI example. Get a license for the Web SDK on [THEOportal](https://portal.theoplayer.com).

## Documentation
* [Getting started on Tizen](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/tizen/getting-started/)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
