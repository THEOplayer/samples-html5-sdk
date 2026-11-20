# OptiView Player Tizen Reference App with UI

OptiView Player Tizen Reference app with UI is an example user interface for Tizen.

For a barebone example, check out the `minimum-example` directory in the root directory of the project.

## UI bundle set-up

* Ensure [Node.js](https://nodejs.org/en/) 20+ and npm are available on your local device.
* Install the dependencies from the `tizen` folder: `npm install`

## Making the UI bundle

From the `tizen` folder, you can make a build by running the following command:
```
npm run build
```

You can also watch changes:
```npm run watch```

This will create a build of the TypeScript files under `src/` and bundle it at `js/Main.js`.

## OptiView Player library

`npm install` in the `tizen` folder copies the OptiView Player library from the `theoplayer` npm package to `libs/`. This app uses the chromeless build (`THEOplayer.chromeless.js`).

## General Tizen set-up

See README at the root level of the project.

## Documentation
* [Getting started on Tizen](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/tizen/getting-started/)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [Live examples](https://optiview.dolby.com/docs/theoplayer/examples/)
