# Getting Started with THEOPlayer on WebOS

## Prerequisites

1. Make sure the WebOS SDK, available for download at <http://webostv.developer.lge.com/sdk/installation>, is correctly installed on your system.
   - You will find the following 2 installation options:
      - At a minimum you need the CLI tool packaged in the *minimal installation bundle*. You will be able to install other components later on if required by using the Component Manager in your installation folder ```{installation folder}\webOS_TV_SDK\ComponentManager)```
      - The *full installation bundle* will install the CLI, WebOS IDE (Eclipse based), VirtualBox emulators, plugins, ...
        - The WebOS IDE is a handy way to set up physical devices, but everything can also be cleanly configured using the CLI and a terminal window in the IDE of your choice (Visual Studio Code, WebStorm, ...)
        - You can create WebOS projects and import compliant WebOS projects into the WebOS IDE by using *import webos project* in the *webos* menu of the IDE
2. Make sure to add the bin folder located at```{installation folder}\webOS_TV_SDK\CLI\bin``` to the ```PATH``` variable of your OS to make it available everywhere from the command line.
3. Validate that the CLI is correctly set up by invoking ```ares``` at the command line of a new terminal. If the command is recognized, you are correctly set up.

__Important Note__  If you require interactive debugging (even if you only use the CLI), you will need to install the WebOS IDE. Although you might not directly use the IDE, the CLI debugging command will open up a Chromium Inspection browser that is only available when the WebOS IDE is installed on the system.

# Download the starter files

- Download the starter code from https://github.com/THEOplayer/webos-app
- The folder contains all the necessary files to quickly deploy a THEOplayer solution to a WebOS device
- The packager will use the ```app``` folder to build an IPK package
    - the ```app``` folder contains a crude solution with entry point ```index.html```; the only thing left is to put your THEOPlayer library files in the ```libs``` folder
- The folder ```example-with-UI``` contains a more elaborate example
    -   to use it, optionally modify the code and run the following commands
        ```
        cd example-with-ui
        npm i
        npm run build  
        ```
    -   next copy the ```js``` folder, the ```css``` folder and the ```index.html``` file to the app folder (overwriting the existing files)
  
## Setting up the physical device

### Prerequisites

1. Make sure you have created an LG Developer Account at <http://webostv.developer.lge.com/develop/app-test>. You will need this to login to the Developer Tools app on the physical device.
2. Download the Developer Tools app to the tv (use the LG Content Store), login with your LG account and follow the instructions to set the device in developer mode (a restart is required)

### Make a connection

- In case you downloaded the WebOS IDE, you can use the WebOS IDE to link your development environment to the physical device (Target Configuration > New Connection)
- Manually set up (use the guideline provided by LG)
   1. Open terminal and enter ```ares-setup-device```
      1. Choose ```add```
      2. Enter device name: tv (feel free to use another name)
      3. Enter the IP address of the LG tv (open the Developer Tools app on the device to find out)
      4. Use port ```9922``` for physical devices (for an emulator the port is 6622)
      5. SSH user: this should be set to ```prisoner``` (__important note__: do not use the proposed ```root```, this will not work)
      6. Enter an optional description
      7. Authentication: choose option ```password```
      8. Leave the actual password blank
      9. Save
   2. Next: you need to acquire a key from the physical device to be able to securely interact
      1. Enter ```ares-novacom -d tv --getkey``` (make sure to use the device name you choose in case you changed it)
      2. You will be prompted for a key; the key will be visible in the Developer Tools app on the physical device
      
## Emulator

__Important Note__: the use of an emulator is not recommended as emulators do not implement all features (e.g. DRM).

If you decide to use an emulator: start the emulator of your choice (you might need to install it using the Component Manager - see the Prerequisites section of this document)      

# Running the app
__Note__: please visit the LG WebOS developer site at http://webostv.developer.lge.com/ to get more info on commands, tools and guidelines.

First make sure to cd into the root folder (this is the parent of app folder). Next run the following commands.

### Packaging

```
ares-package  ./app --outdir ./
```

### Installation

Default name for the created package is *webos.theo_1.0.0_all.ipk*, *tv* is the device name that was given when setting up the device in the previous step.
This step will fail if there is no connection to the device, e.g. the device is offline, not on the same network, ... .
```
ares-install webos.theo_1.0.0_all.ipk  -d tv
```

### Launch

App id is by default *web.theo* (you can change this in ```appinfo.json```)
```
ares-launch web.theo  -d tv
```

### Debug

```
ares-inspect web.theo -d tv --open
```
