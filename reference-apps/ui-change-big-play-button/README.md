# Changing the big play button
The present sample showcases a few customizations applied to the big play button in OptiView Player.


## Running this sample
1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In the repository root, install the dependencies and start the local server:
   ```sh
   npm install
   npm start
   ```
   `npm install` gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package.
3. Open http://localhost:8080/reference-apps/ui-change-big-play-button/index.html.

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
The present sample showcases one way to add and position custom UI elements in the default OptiView Player UI.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About customizing the default UI
In OptiView Player, the default UI already includes the features and controls that are most common across implementations and use cases. You may decide to add, delete or tweak its elements to adapt the player to your implementation.

Check the other samples for other UI customizations, and the links below for related resources.

### Additional notes about customizing the big play button
* <u>Further changes</u> - In this example we changed the button with an image and made it responsive to hovering. Other changes may also be applied, including color, size and position. You may otherwise also decide to remove the default button and use a completely custom one.
* <u>UI skinning</u> - Specifically regarding colors, you might want to consistently use a definite color set for your big play button and the rest of your UI elements. The demo linked below helps you make these changes easily. 

</details>

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEOportal](https://portal.theoplayer.com)

### UI and customization
* [How-to guides - Introduction](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ui/introduction/)
* [API reference - UI Configuration](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/interfaces/UIConfiguration.html)

### Customizing the big play button
* [How to change the Big Play Button?](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ui/how-to-change-big-play-button/)
* [Demo - UI Skinning](https://www.theoplayer.com/theoplayer-demo-ui-skinning)
