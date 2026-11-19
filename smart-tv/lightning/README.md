# OptiView Player samples for Lightning

## Requirements
* [Node.js](https://nodejs.org/) 22.12 or later
* This sample uses Lightning SDK 5 and Lightning CLI 2, and depends on `theoplayer` `^11`, so `npm install` gets the latest OptiView Player 11.x release.
* An OptiView Player license for domains other than _localhost_. Get one on the [THEOportal](https://portal.theoplayer.com).

## License

This projects falls under the license as defined in https://github.com/THEOplayer/license-and-disclaimer.

## Introduction

This project will demonstrate how to use OptiView Player in a [Lightning](https://lightningjs.io/) app.

Lightning is an open-source JavaScript development platform for creating (TV) apps. It uses WebGL or Canvas2d for rendering.
Learn more about Lightning by reading the [documentation](https://lightningjs.io/docs)
and [SDK reference](https://rdkcentral.github.io/Lightning-SDK).

## Getting Started

Each app installs OptiView Player from [the `theoplayer` package on npm](https://www.npmjs.com/package/theoplayer). `npm install` copies the library files to the `static/THEOplayer` folder of the app.
Then follow the guidelines for building and running the app.

* [minimal-ui](./minimal-ui/README.md)

## About the player implementation

This sample is a separate npm project, so the root `npm start` of this repository does not build or serve it.

* Lightning renders the app UI with WebGL, so the player has no UI of its own. The app uses `THEOplayer.chromeless.js` and draws its controls in Lightning.
* `npm install` copies the player files from `node_modules/theoplayer` to `static/THEOplayer/`. [`minimal-ui/src/utils/THEOplayer.js`](minimal-ui/src/utils/THEOplayer.js) loads the player script from `/static/THEOplayer` at runtime, adds a `<div id="theoplayer-wrapper">` to the page for the video, and sets `libraryLocation` to the same folder.
* In a browser on `localhost`, no license is needed. To run the app from another host or on a device, add `license: '<your license>'` to the player configuration in `minimal-ui/src/utils/THEOplayer.js`. Get a license on [THEOportal](https://portal.theoplayer.com).

## Documentation
* [Lightning documentation](https://lightningjs.io/docs)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
