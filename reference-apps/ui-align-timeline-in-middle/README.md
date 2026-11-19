# Customizing time indicators
The present sample showcases an OptiView Player implementation where custom time indicators have been created and aligned to the middle of the control bar.


## Running this sample
1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In the repository root, install the dependencies and start the local server:
   ```sh
   npm install
   npm start
   ```
   `npm install` gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package.
3. Open http://localhost:8080/reference-apps/ui-align-timeline-in-middle/index.html.

The page loads the player from `../../node_modules/theoplayer/`:
* UI CSS: `../../node_modules/theoplayer/ui.css`
* Player library: `../../node_modules/theoplayer/THEOplayer.js`
* `libraryLocation`: `../../node_modules/theoplayer/`

### License
The license in this sample only allows playback on _localhost_.
To play on other domains, get your own license on the [THEOportal](https://portal.theoplayer.com) and set it in the player configuration.

See [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/) for the full setup guide, and the [examples page](https://optiview.dolby.com/docs/theoplayer/examples/) for more live demos.

## Aligning custom UI elements
In OptiView Player, you can decide to use the chromeless SDK, to build a completely custom UI, or the chromeful SDK, which you can tweak and adapt to your implementation.
The present sample showcases one way to add and position custom UI elements in the default OptiView Player UI.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About customizing the default UI
In OptiView Player, the default UI already includes the features and controls that are most common across implementations and use cases.

Check the other samples for other UI customizations, and the links below for related resources.

### Additional notes about adding and aligning custom UI elements
* <u>Not only time indicators</u> - When it comes to adding elements to the OptiView Player UI, you can add and align different types of elements, including time indicators, buttons, progress bar, texts and layers, etc.
* <u>Alternatives</u> - Depending on the element(s) that you are adding (and aligning) and on your use case, different ways to do so may be used.

To know more about this, check out the linked documentation.
</details>

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEOportal](https://portal.theoplayer.com)

### UI and customization
* [How-to guides - Introduction](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ui/introduction/)
* [API reference - UI Configuration](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/interfaces/UIConfiguration.html)

### Customizing the timeline
* [How to align the timeline in the middle](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ui/how-to-align-timeline-in-the-middle/)
* [How to get frame-accurate currentTime display in the UI Control bar](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/how-to-get-frame-accurate-currentime-display/)
