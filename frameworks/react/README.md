# OptiView Player with React

A React 19 app, built with Vite 8, that wraps OptiView Player in a React component.

This sample is a separate npm project, so the root `npm start` of this repository does not build or serve it. You can copy this folder out of the repository and use it as a starting point.

## Running this sample

1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In this folder, install the dependencies:
   ```sh
   npm install
   ```
   This gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package.
3. Start the dev server:
   ```sh
   npm run dev
   ```
   Open http://localhost:5173.

To make a production build in `dist/` and serve it on http://localhost:4173:
```sh
npm run build
npm run preview
```

## About the player implementation

* [`src/player/THEOplayerView.tsx`](src/player/THEOplayerView.tsx) is the player component. It creates the `Player` in a `useEffect` on a container `<div>`, passes it to the `onPlayerCreated` callback, and calls `player.destroy()` when the component unmounts. Extend it with the player APIs you need.
* [`src/App.tsx`](src/App.tsx) renders the component and sets the source in its `onPlayerCreated` callback. Set your license in the `license` constant in this file.
* The player loads extra files, such as the transmuxer worker, from `libraryLocation`. [`vite.config.ts`](vite.config.ts) copies the files from `node_modules/theoplayer` to `vendor/theoplayer/` with `vite-plugin-static-copy`, and the component sets `libraryLocation` to `${import.meta.env.BASE_URL}vendor/theoplayer/`, so it also works when the app is not served from `/`.

## License

Without a license, OptiView Player only plays on `localhost`. To play on other domains, get a license for the Web SDK on [THEOportal](https://portal.theoplayer.com) and set it as described above.

This sample falls under the license defined in https://github.com/THEOplayer/license-and-disclaimer.

## Documentation

* [Getting started with React](https://optiview.dolby.com/docs/theoplayer/getting-started/frameworks/react/getting-started/)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
