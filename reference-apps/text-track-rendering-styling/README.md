# Styling captions
The present sample showcases an implementation of OptiView Player where the subtitles are styled by the implementer, and where the user can also decide to modify the styling.


## Running this sample
1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In the repository root, install the dependencies and start the local server:
   ```sh
   npm install
   npm start
   ```
   `npm install` gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package.
3. Open http://localhost:8080/reference-apps/text-track-rendering-styling/index.html.

The page loads the player from `../../node_modules/theoplayer/`:
* UI CSS: `../../node_modules/theoplayer/ui.css`
* Player library: `../../node_modules/theoplayer/THEOplayer.js`
* `libraryLocation`: `../../node_modules/theoplayer/`

### License
The license in this sample only allows playback on _localhost_.
To play on other domains, get your own license on the [THEOportal](https://portal.theoplayer.com) and set it in the player configuration.

See [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/) for the full setup guide, and the [examples page](https://optiview.dolby.com/docs/theoplayer/examples/) for more live demos.

## Styling captions
In OptiView Player, you can use text tracks for many purposes, including subtitles and closed captions. These appear on the UI, and may be styled.
The present sample showcases how to add default styling to your subtitles and how the user may also be able to select their preferred styling.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About textTracks 
In OptiView Player, the textTracks can be used for a variety of purposes: showing captions, passing metadata, activating timeline thumbnails and marking chapters. 

Check the other samples for other textTracks functionalities, and the links below for related resources.

### Additional notes about styling
* <u>Style each track</u> - The example styling in this page applies to all visible subtitles/captions tracks. Using the textTracks API to detect which track is being played, you can apply different styling to different tracks.
* <u>Conflicting styling</u> - If the subtitle file contains styling of its own, this will have priority and be applied regardless of the styling included in the implementation.
* <u>User options</u> - The user can adjust the styling of their tracks from the control bar: `Settings > Subtitle options`. If you want to avoid this, you can remove the complete menu item from Settings.
* <u>Chromeless</u> - `textTracks` styling is also available in chromeless versions of the player.

</details>

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEOportal](https://portal.theoplayer.com)

### TextTracks
* [TextTracks how-to guides - Introduction](https://optiview.dolby.com/docs/theoplayer/how-to-guides/texttrack/introduction/)
* [How to insert subtitles](https://optiview.dolby.com/docs/theoplayer/how-to-guides/texttrack/how-to-insert-subtitles/)
* [TextTracks API](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/interfaces/TextTrack.html)
* [Demo - Closed Captions and Subtitles](https://www.theoplayer.com/theoplayer-demo-cea-closed-captions-subtitles)

### Track styling
* [TextTrackStyle API](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/interfaces/TextTrackStyle.html)
