# THEOplayer Tizen Reference

The THEOplayer Tizen Reference provides a simple reference set-up to simplify integration.

This project provides two Tizen projects:
* `minimum-example`: a barebone example of THEOplayer for Tizen.
* `example-with-ui`: a slightly more advanced showcase of THEOplayer with a Tizen UI.

More specific details on set-up can be found in the respective subdirectories. Below we describe general set-up that applies for both projects:

## Set-up

* Install Tizen Studio
  * Make sure to install the Tizen Tools under Tools -> Extension Manager (both under Main SDK and Extension SDK tabs)
  * Set up your [certificate under Certificate Manager](https://docs.tizen.org/application/vstools/tools/certificate-manager#creating-a-certificate-profile)
* Both subprojects expect the THEOplayer library to be put under `libs/`. Include the worker files when using HLS as well.

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