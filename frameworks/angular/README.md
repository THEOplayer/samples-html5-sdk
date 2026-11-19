# OptiView Player with Angular

An Angular 22 app with a standalone component that wraps OptiView Player.

This sample is a separate npm project, so the root `npm start` of this repository does not build or serve it. You can copy this folder out of the repository and use it as a starting point.

## Running this sample

1. Install [Node.js](https://nodejs.org/) 22.22.3 or later (24.15 or later on Node.js 24).
2. In this folder, install the dependencies:
   ```sh
   npm install
   ```
   This gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package.
3. Start the dev server:
   ```sh
   npm start
   ```
   Open http://localhost:4200.

To make a production build in `dist/theoplayer-angular-sample/browser/`:
```sh
npm run build
```
Serve that folder with any static web server.

## About the player implementation

* [`src/app/theoplayer/theoplayer.component.ts`](src/app/theoplayer/theoplayer.component.ts) is the player component. It creates the `Player` in `afterNextRender`, so it only runs in the browser, after the container element exists. It takes the source as a signal input and calls `player.destroy()` in `ngOnDestroy`. Set your license in the `LICENSE` constant in this file.
* [`src/app/app.ts`](src/app/app.ts) renders the component with a source.
* [`src/index.html`](src/index.html) loads `vendor/theoplayer/ui.css`.
* The player loads extra files, such as the transmuxer worker, from `libraryLocation`. The `assets` entry in [`angular.json`](angular.json) copies the files from `node_modules/theoplayer` to `vendor/theoplayer`, and the component sets `libraryLocation` to `vendor/theoplayer/`.

## License

Without a license, OptiView Player only plays on `localhost`. To play on other domains, get a license for the Web SDK on [THEOportal](https://portal.theoplayer.com) and set it as described above.

This sample falls under the license defined in https://github.com/THEOplayer/license-and-disclaimer.

## Documentation

* [Getting started with Angular](https://optiview.dolby.com/docs/theoplayer/getting-started/frameworks/angular/getting-started/)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
