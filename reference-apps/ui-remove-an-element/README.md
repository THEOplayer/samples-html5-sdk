# Removing UI elements
The present sample showcases how to remove UI elements in CSS and in JavaScript.


## Running this sample
1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In the repository root, install the dependencies and start the local server:
   ```sh
   npm install
   npm start
   ```
   `npm install` gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package.
3. Open http://localhost:8080/reference-apps/ui-remove-an-element/index.html.

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

The present sample showcases how add a custom quality selector submenu which, based on mp4 files, simulates the usual menu built automatically from HLS or DASH renditions.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About customizing the default UI
In OptiView Player, the default UI already includes the features and controls that are most common across implementations and use cases. You may decide to add, delete or tweak its elements to adapt the player to your implementation.

Check the other samples for other UI customizations, and the links below for related resources.

### Additional notes about removing elements
* <u>Hiding elements</u> - There are cases when removing elements will not do, but hiding them may be a solution. In such cases, make sure they are also not detectable/interactive when hovering them with the cursor. 
* <u>Related elements</u> - Removing an element may influence other elements positions or aspect. The way in which an element is removed or made invisible may also influence the result.

</details>

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEOportal](https://portal.theoplayer.com)

### UI and customization
* [How-to guides - Introduction](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ui/introduction/)
* [API reference - UI Configuration](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/interfaces/UIConfiguration.html)

### Custom menus and labels
* [How to remove a UI element](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ui/is-it-possible-to-remove-an-element/)

