# Building a custom quality selector menu
The present sample showcases how to build a custom submenu in the default UI.


## Running this sample
1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In the repository root, install the dependencies and start the local server:
   ```sh
   npm install
   npm start
   ```
   `npm install` gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package.
3. Open http://localhost:8080/reference-apps/ui-quality-selector-and-labels/index.html.

The page loads the player from `../../node_modules/theoplayer/`:
* UI CSS: `../../node_modules/theoplayer/ui.css`
* Player library: `../../node_modules/theoplayer/THEOplayer.js`
* `libraryLocation`: `../../node_modules/theoplayer/`

### License
The license in this sample only allows playback on _localhost_.
To play on other domains, get your own license on the [THEOportal](https://portal.theoplayer.com) and set it in the player configuration.

See [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/) for the full setup guide, and the [examples page](https://optiview.dolby.com/docs/theoplayer/examples/) for more live demos.

## Customizing UI elements
In OptiView Player, you can decide to use the chromeless SDK, to build a completely custom UI, or the chromeful SDK, which you can tweak and adapt to your implementation.

The present sample showcases how to add a custom quality selector submenu which, based on mp4 files, simulates the usual menu built automatically from HLS or DASH renditions.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About customizing the default UI
In OptiView Player, the default UI already includes the features and controls that are most common across implementations and use cases. You may decide to add, delete or tweak its elements to adapt the player to your implementation.

Check the other samples for other UI customizations, and the links below for related resources.

### Notes about the current sample
* <u>Quality selection on iOS</u> - What described here can be used, especially in combination with a continuous play feature, to simulate the "normal" quality selection user menu on iOS, where it's not present.
* <u>With HLS or DASH</u> - The same method can be applied to single-variant playlists in HLS/DASH.
* <u>Normal ABR is advised</u> - Many of the benefits of ABR are not present here. Our advice is to play "normal" multivariant streams wherever possible.

### Additional notes about customizing menus
* <u>Adding elements</u> - The method here illustrated can be used to add other submenus or menu items in the default UI, and, slightly tweaked, can be used for the same purpose on your own UI. 
* <u>Alternatives for label customization</u> - There are other ways to customize quality labels (and other texts in general): if that is what you are after, see the language localization sample and navigate through the documentation linked below.

</details>

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEOportal](https://portal.theoplayer.com)

### UI and customization
* [How-to guides - Introduction](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ui/introduction/)
* [API reference - UI Configuration](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/interfaces/UIConfiguration.html)

### Custom menus and labels
* [How to customize quality selection and labels on the default UI (MP4)](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/how-to-customize-quality-selection/)
* [Demo - Custom quality labels](https://www.theoplayer.com/theoplayer-demo-custom-quality-labels)

