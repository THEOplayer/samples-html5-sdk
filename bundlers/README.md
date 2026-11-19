# OptiView Player bundler samples

These samples show how to install the OptiView Player Web SDK from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package and bundle it with popular bundlers. Use them as starting templates for your own app.

| Bundler | JavaScript | TypeScript |
|---|---|---|
| [Vite](https://vite.dev/) | [vite/javascript](vite/javascript/) | [vite/typescript](vite/typescript/) |
| [webpack](https://webpack.js.org/) | [webpack/javascript](webpack/javascript/) | [webpack/typescript](webpack/typescript/) |
| [Rollup](https://rollupjs.org/) | [rollup/javascript](rollup/javascript/) | [rollup/typescript](rollup/typescript/) |
| [Parcel](https://parceljs.org/) | [parcel/javascript](parcel/javascript/) | [parcel/typescript](parcel/typescript/) |

Each sample's README lists the commands to build and run it.

## What every sample does
1. Depends on `theoplayer` `^11`, so `npm install` gets the latest OptiView Player 11.x release.
2. Imports `Player` from `theoplayer` and creates it with `libraryLocation: 'vendor/theoplayer/'`.
3. Copies the player files (`THEOplayer.transmux.js`, `theoplayer.sw.js`, `iframe.html`, `ui.css` and others) from `node_modules/theoplayer` to `dist/vendor/theoplayer/`. The player loads its workers from `libraryLocation` at runtime, so these files must be served next to your bundle.

## License
All samples read the license from [`util/constants.js`](util/constants.js). An empty license only allows playback on _localhost_. To play on other domains, get a license on the [THEOportal](https://portal.theoplayer.com): log in, open your Web SDK, and copy its license string into `LICENSE`.

## Documentation
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [Live examples](https://optiview.dolby.com/docs/theoplayer/examples/)
* Framework samples (React, Next.js, Angular, Vue, Nuxt) are in [`frameworks/`](../frameworks/).
