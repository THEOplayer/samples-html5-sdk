# OptiView Player with React Router

A React Router 7 app in framework mode, with server rendering, that shows OptiView Player with [OptiView Web UI for React](https://www.npmjs.com/package/@theoplayer/react-ui).

This sample is a separate npm project, so the root `npm start` of this repository does not build or serve it. You can copy this folder out of the repository and use it as a starting point.

## Running this sample

1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In this folder, install the dependencies:
   ```sh
   npm install
   ```
   This gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package and OptiView Web UI 2.x from [`@theoplayer/react-ui`](https://www.npmjs.com/package/@theoplayer/react-ui).
3. Start the dev server:
   ```sh
   npm run dev
   ```
   Open http://localhost:5173.

To make a production build in `build/` and start its server on http://localhost:3000:
```sh
npm run build
npm start
```
`npm run build` also type-checks the app with `tsc`.

## About the player implementation

* [`app/routes/home.tsx`](app/routes/home.tsx) renders `<DefaultUI>` with a player `configuration` and a `source`. React Router renders the route on the server, and `@theoplayer/react-ui` needs the browser, so the route imports it in a `useEffect` and renders the player once it has loaded. `<DefaultUI>` creates the player when it mounts and destroys it when it unmounts. Set your license in the `LICENSE` constant in this file.
* The player loads extra files, such as the transmuxer worker, from `libraryLocation`. Before `npm run dev` and `npm run build`, [`scripts/copy-theoplayer.mjs`](scripts/copy-theoplayer.mjs) copies the files from `node_modules/theoplayer` to `public/vendor/theoplayer/`. The route sets `libraryLocation` to `/vendor/theoplayer/`. The copied files are not committed. If you serve the app from a subpath, change `libraryLocation` to match.

TypeScript is pinned to 6.x, because the React Router 7 tooling does not support TypeScript 7 yet.

## License

Without a license, OptiView Player only plays on `localhost`. To play on other domains, get a license for the Web SDK on [THEOportal](https://portal.theoplayer.com) and set it in the `LICENSE` constant described above.

This sample falls under the license defined in https://github.com/THEOplayer/license-and-disclaimer.

## Documentation

* [OptiView Web UI](https://github.com/THEOplayer/web-ui)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
