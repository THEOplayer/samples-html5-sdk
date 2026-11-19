# Reference apps

Small apps that each show one feature of OptiView Player. More live demos, such as custom buttons, preview thumbnails, Up Next, caching and Yospace, are on the [OptiView Player examples page](https://optiview.dolby.com/docs/theoplayer/examples/).

## Running the static reference apps

Most reference apps are plain HTML pages. They load the player from the `node_modules` folder in the repository root, so you run them from the root:

```sh
npm install
npm start
```

Then open http://localhost:8080 and choose a sample, or open `http://localhost:8080/reference-apps/<folder>/index.html`. Without a license, OptiView Player only plays on `localhost`.

The pages load `THEOplayer.js` and `ui.css` from `../../node_modules/theoplayer/` and set `libraryLocation` to the same folder. If you copy a page out of this repository, change these three paths to where you host the player files.

## Samples

| Folder | Content | How to run |
|---|---|---|
| [ads-basic](ads-basic) | Pre-roll, mid-roll and post-roll ads with CSAI and Google IMA | Root `npm start` |
| [ads-basic-vmap](ads-basic-vmap) | Ad breaks from a VMAP file | Root `npm start` |
| [ads-customize-overlay](ads-customize-overlay) | Change the ad overlay | Root `npm start` |
| [ads-customize-ui](ads-customize-ui) | Style the UI during ads | Root `npm start` |
| [ui-visual-cues-midroll-ads](ui-visual-cues-midroll-ads) | Ad markers on the timeline | Root `npm start` |
| [content-protection](content-protection) | DRM configuration snippets | Copy into your app |
| [multiview](multiview) | Several streams side by side with `@theoplayer/extended` | Root `npm start` |
| [text-track-rendering-styling](text-track-rendering-styling) | Subtitle styling | Root `npm start` |
| [ui-align-timeline-in-middle](ui-align-timeline-in-middle) | Timeline in the middle of the control bar | Root `npm start` |
| [ui-change-big-play-button](ui-change-big-play-button) | Restyle the big play button | Root `npm start` |
| [ui-keyboard-hotkeys](ui-keyboard-hotkeys) | Keyboard shortcuts | Root `npm start` |
| [ui-language-localization](ui-language-localization) | Translate the UI | Root `npm start` |
| [ui-quality-selector-and-labels](ui-quality-selector-and-labels) | Custom quality menu | Root `npm start` |
| [ui-remove-an-element](ui-remove-an-element) | Hide UI elements | Root `npm start` |
| [visibility-api](visibility-api) | Pause or mute when the player is not visible | Root `npm start` |
| [progressive-web-app](progressive-web-app) | Installable app with a service worker | Root `npm start` |
| [utility](utility) | Measure the loading time of the player | Root `npm start` |
| [uplynk-app](uplynk-app) | Uplynk integration | `npm install`, `npm run build` and `npm start` in its folder |
| [wowza](wowza) | Wowza Streaming Cloud integration | `npm install`, `npm run build` and `npm start` in its folder |
| [wowza-backup-streams](wowza-backup-streams) | Wowza with backup streams | `npm install`, `npm run build` and `npm start` in its folder |

Each folder has a README with the details.
