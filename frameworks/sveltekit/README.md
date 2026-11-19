# OptiView Player with SvelteKit

A SvelteKit 3 app with Svelte 5 that shows OptiView Player with [OptiView Web UI](https://www.npmjs.com/package/@theoplayer/web-ui).

This sample is a separate npm project, so the root `npm start` of this repository does not build or serve it. You can copy this folder out of the repository and use it as a starting point.

## Running this sample

1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In this folder, install the dependencies:
   ```sh
   npm install
   ```
   This gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package and OptiView Web UI 2.x from [`@theoplayer/web-ui`](https://www.npmjs.com/package/@theoplayer/web-ui).
3. Start the dev server:
   ```sh
   npm run dev
   ```
   Open http://localhost:5173.

To make a production build and serve it on http://localhost:4173:
```sh
npm run build
npm run preview
```
`npm run build` also type-checks the app with `svelte-check`.

## About the player implementation

* [`src/routes/+page.svelte`](src/routes/+page.svelte) creates a `DefaultUI` in `onMount`, sets the source and adds it to the page. SvelteKit prerenders the page at build time, and `@theoplayer/web-ui` needs the browser, so the component imports it dynamically inside `onMount`. The cleanup function removes the UI element, which destroys the player. Set your license in the `LICENSE` constant in this file.
* The player loads extra files, such as the transmuxer worker, from `libraryLocation`. Before `npm run dev` and `npm run build`, [`scripts/copy-theoplayer.mjs`](scripts/copy-theoplayer.mjs) copies the files from `node_modules/theoplayer` to `static/vendor/theoplayer/`. The component sets `libraryLocation` to `/vendor/theoplayer/`. The copied files are not committed. If you serve the app from a subpath, change `libraryLocation` to match.
* The app uses `@sveltejs/adapter-static` and [`src/routes/+layout.ts`](src/routes/+layout.ts) prerenders it, so `npm run build` writes a static site to `build/`. To deploy it with server rendering, pick another [adapter](https://svelte.dev/docs/kit/adapters).

TypeScript is pinned to 6.x, because the SvelteKit 3 tooling does not support TypeScript 7 yet.

## License

Without a license, OptiView Player only plays on `localhost`. To play on other domains, get a license for the Web SDK on [THEOportal](https://portal.theoplayer.com) and set it in the `LICENSE` constant described above.

This sample falls under the license defined in https://github.com/THEOplayer/license-and-disclaimer.

## Documentation

* [OptiView Web UI](https://github.com/THEOplayer/web-ui)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
