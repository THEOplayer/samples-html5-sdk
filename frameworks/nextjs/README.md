# OptiView Player with Next.js

A Next.js 16 app with the App Router and React 19 that renders OptiView Player on a page.

This sample is a separate npm project, so the root `npm start` of this repository does not build or serve it. You can copy this folder out of the repository and use it as a starting point.

## Running this sample

1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In this folder, install the dependencies:
   ```sh
   npm install
   ```
   This gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package.
3. Copy `.env.example` to `.env.local` and set your license in `NEXT_PUBLIC_THEOPLAYER_LICENSE`. You can leave it empty on `localhost`.
4. Start the dev server:
   ```sh
   npm run dev
   ```
   Open http://localhost:3000.

To make a production build and serve it on http://localhost:3000:
```sh
npm run build
npm start
```

## About the player implementation

* The player needs browser APIs, so it cannot render on the server. [`app/page.tsx`](app/page.tsx) loads the player component with `next/dynamic` and `ssr: false`.
* [`components/THEOplayerWrapper.tsx`](components/THEOplayerWrapper.tsx) creates the `Player` in a callback ref on its container `<div>`. The ref returns a cleanup function, a React 19 feature, that calls `player.destroy()` when the `<div>` is removed. `useEffect` hooks pass the `source`, `preload` and `autoplay` props to the player. It reads the license from `process.env.NEXT_PUBLIC_THEOPLAYER_LICENSE`. Next.js puts `NEXT_PUBLIC_` variables in the browser bundle at build time, so rebuild after you change the license.
* [`app/layout.tsx`](app/layout.tsx) imports `theoplayer/ui.css`.
* The player loads extra files, such as the transmuxer worker, from `libraryLocation`. Before `npm run dev` and `npm run build`, [`scripts/copy-theoplayer.mjs`](scripts/copy-theoplayer.mjs) copies the files from `node_modules/theoplayer` to `public/vendor/theoplayer/`. The component sets `libraryLocation` to `/vendor/theoplayer/`. The copied files are not committed.

## License

Without a license, OptiView Player only plays on `localhost`. To play on other domains, get a license for the Web SDK on [THEOportal](https://portal.theoplayer.com) and set it as described above.

This sample falls under the license defined in https://github.com/THEOplayer/license-and-disclaimer.

## Documentation

* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
