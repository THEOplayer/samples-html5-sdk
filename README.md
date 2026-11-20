# OptiView Player samples for web

Samples for the OptiView Player Web SDK: static reference apps, bundler and framework starter projects, and smart TV apps. Every sample installs OptiView Player 11 from npm ([`theoplayer`](https://www.npmjs.com/package/theoplayer), or [`@theoplayer/extended`](https://www.npmjs.com/package/@theoplayer/extended) for MultiView) with the version range `^11`, so `npm install` always gets the latest 11.x release.

More live demos are on the [OptiView Player examples page](https://optiview.dolby.com/docs/theoplayer/examples/).

## Samples

| Folder | Content | How to run |
|---|---|---|
| [`reference-apps`](./reference-apps) | Static pages for ads, MultiView, subtitles, UI customization, the Visibility API, a PWA and a loading-time utility | Root `npm start` |
| [`reference-apps/uplynk-app`](./reference-apps/uplynk-app), [`wowza`](./reference-apps/wowza), [`wowza-backup-streams`](./reference-apps/wowza-backup-streams) | Uplynk and Wowza Streaming Cloud integrations | In the sample folder |
| [`bundlers`](./bundlers) | [Vite](./bundlers/vite), [webpack](./bundlers/webpack), [Rollup](./bundlers/rollup) and [Parcel](./bundlers/parcel), in JavaScript and TypeScript | In the sample folder |
| [`frameworks`](./frameworks) | [React](./frameworks/react), [Next.js](./frameworks/nextjs), [Angular](./frameworks/angular), [Vue](./frameworks/vue) and [Nuxt](./frameworks/nuxt) | In the sample folder |
| [`smart-tv`](./smart-tv) | [webOS](./smart-tv/webos), [Tizen](./smart-tv/tizen) and [Lightning](./smart-tv/lightning) | In the sample folder, then on a TV |

## Running the samples

You need [Node.js](https://nodejs.org/) 22.12 or later.

### Reference apps

The reference apps are plain HTML pages. They load the player from the `node_modules` folder in the repository root.

```sh
npm install
npm start
```

Open [http://localhost:8080](http://localhost:8080). The index page lists every sample, with a link to the reference apps and the commands for the other samples.

### All other samples

The root `npm start` does not build or run the other samples. Each one is a separate npm project with its own dependencies, build tool and dev server, so you can copy the folder out of this repository and use it as a starting point. For example:

```sh
cd frameworks/react
npm install
npm run dev
```

The README in each sample folder lists its commands, the URL to open, and where to set the license.

### Removing installed dependencies

To remove every `node_modules` folder and `package-lock.json` file in the repository, run this in the repository root:

```sh
npm run clean
```

### Install scripts

npm 11.19 and later block the install scripts of dependencies unless the project's `allowScripts` field approves them. Most of these scripts are not needed, because the build tools ship prebuilt binaries as separate packages, so each `package.json` sets them to `false`. The Lightning sample allows the `@lightningjs/sdk` script, which copies the polyfills that its build needs.

## How the samples load the player

The player loads extra files at runtime, such as the transmuxer worker (`THEOplayer.transmux.js` and `.wasm`), `iframe.html` and `theoplayer.sw.js`. It loads them from the `libraryLocation` in the player configuration. Every sample therefore serves the files of the `theoplayer` package next to the app, and sets `libraryLocation` to that folder:

* The reference apps use `../../node_modules/theoplayer/`.
* The bundler, framework and integration samples copy the files to `vendor/theoplayer/` during the build.
* The smart TV samples copy the files to `libs/` (webOS, Tizen) or `static/THEOplayer/` (Lightning) when you run `npm install`.

If the player cannot load these files, HLS playback fails.

## License

Without a license, OptiView Player only plays on `localhost`. To play on other domains, get a license for your Web SDK on [THEOportal](https://portal.theoplayer.com) and set it in the player configuration. Each sample's README says where.

These samples fall under the license defined in https://github.com/THEOplayer/license-and-disclaimer.

## Documentation

* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
* [Web API reference](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/)

For questions, contact support-portal@theoplayer.com.
