# Progressive web app with OptiView Player

This sample shows OptiView Player in an installable progressive web app (PWA). It has a web app manifest, app icons and a service worker that caches the app and the player files. It is based on [hello-pwa](https://github.com/jamesjohnson280/hello-pwa).

This sample is a demo. Do not use it in production as is.

## Running this sample

1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In the repository root, install the dependencies and start the local server:
   ```sh
   npm install
   npm start
   ```
3. Open http://localhost:8080/reference-apps/progressive-web-app/index.html.

Browsers only allow service workers on `https://` pages and on `localhost`. To install the app, use the install button in the address bar of Chrome or Edge.

## About the player implementation

* The page loads `THEOplayer.js` and `ui.css` from `../../node_modules/theoplayer/`, and [`js/main.js`](js/main.js) sets `libraryLocation` to the same folder.
* [`sw.js`](sw.js) caches the app files and the player files on install, and serves them from the cache when they are available. The video stream itself is not cached, so playback still needs a network connection.
* If you change the player files or the app, change `cacheName` in `sw.js` so the browser installs the new service worker.
* The service worker only controls pages in its own folder, but it can cache files from other folders on the same origin, such as `node_modules`.

## License

The license in [`js/main.js`](js/main.js) only allows playback on `localhost`. To play on other domains, get a license on [THEOportal](https://portal.theoplayer.com).

## Resources

* [Progressive web apps on web.dev](https://web.dev/explore/progressive-web-apps)
* [Getting started with OptiView Player on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
