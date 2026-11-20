# OptiView Player webOS app with UI

This folder contains a webOS app with a TV user interface built with the chromeless OptiView Player Web SDK. Remote-control keys move the focus between the player controls, the seek bar and the audio and subtitle menus.

## Building the UI
1. In the `smart-tv/webos` folder, install the dependencies:
   ```sh
   npm install
   ```
   This installs the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package and copies `THEOplayer.chromeless.js`, `ui.css` and the worker files to `example-with-ui/libs/`.
2. Build the TypeScript sources in `src/` to `js/Main.js`:
   ```sh
   npm run build
   ```
3. Copy the app into the `app` folder that is packaged to an IPK:
   ```sh
   cp -R example-with-ui/js/ app/js/
   cp -R example-with-ui/css/ app/css/
   cp example-with-ui/index.html app/
   ```
4. Package, install and launch the app as described in the [webOS README](../README.md).

You can also open `example-with-ui/index.html` from a local web server in a desktop browser. Use the arrow keys and Enter to emulate the remote control.

## Documentation
* [Getting started on webOS](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/webos/getting-started/)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [Live examples](https://optiview.dolby.com/docs/theoplayer/examples/)
