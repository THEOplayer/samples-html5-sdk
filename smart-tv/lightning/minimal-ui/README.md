# Minimal-UI

## com.theoplayer.lightning.minimal-ui

This application demonstrates the integration of OptiView Player in a Lightning app with a basic UI.
A fixed DASH stream source is configured and user interaction is limited to playing and pausing the stream.

### Getting started

The [Lightning-CLI](https://rdkcentral.github.io/Lightning-CLI/#/) is installed as a dev dependency, so the `npm run` scripts below don't require a global installation.

#### Running the App

1. Install the NPM dependencies by running `npm install`. This also copies the OptiView Player library files from the `theoplayer` npm package to `./static/THEOplayer`.

2. Build the App by running `npm run build`

3. Fire up a local webserver and open the App in a browser by running `npm run serve`. It uses http://localhost:8080, or the next free port if 8080 is in use.

#### Developing the App

During development you can use the **watcher** functionality of the _Lightning-CLI_.

- use `npm run watch` to automatically _rebuild_ your App whenever you make a change in the `src` or  `static` folder
- use `npm run dev` to start the watcher and run a local webserver / open the App in a browser _at the same time_

#### Documentation

Use `npx lng docs` to open up the Lightning-SDK documentation.

## Documentation
* [Lightning documentation](https://lightningjs.io/docs)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [Live examples](https://optiview.dolby.com/docs/theoplayer/examples/)
