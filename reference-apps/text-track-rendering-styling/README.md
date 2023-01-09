# Styling captions
The present sample showcases an implementation of THEOplayer where the subtitles are styled by the implementer, and where the user can also decide to modify the styling.

To keep the page simple, we moved to this readme notes and useful resources.

## About the player implementation
The present samples are meant to be used with the NPM-installed player. Get your NPM web player on https://www.npmjs.com/package/theoplayer.

Alternatively, you can also decide to generate a custom player on the THEO portal.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Making sure the player is implemented correctly: <u>URLs and license</u></summary>

### Check the URLs
Once you have installed your player, check whether the following URLs need changing to point to the folder containing the player SDK:
* UI CSS library: `href="../../node_modules/theoplayer/ui.css"`
* THEOplayer library: `src="../../node_modules/theoplayer/THEOplayer.js"`
* libraryLocation: `libraryLocation: "../../node_modules/theoplayer/"`

### License
The license included in the implementation only allows for playback on _localhost_.
To play on any other domains, as well as to make sure your license doesn't expire, get your license on  https://portal.theoplayer.com.
</details>

## Styling captions
In THEOplayer, you can use textTracks for many purposes, including subtitles and closed captions. These appear on the UI, and may be styled.
The present sample showcases how to add default styling to your subtitles and how the user may also be able to select their preferred styling.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About textTracks 
In THEOplayer, the textTracks can be used for a variety of purposes: showing captions, passing metadata, activating timeline thumbnails and marking chapters. 

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
* [THEO Portal](https://portal.theoplayer.com)

### TextTracks
* [TextTracks how-to guides - Introduction](https://docs.theoplayer.com/how-to-guides/10-texttrack/00-introduction.md)
* [How to insert subtitles](https://docs.theoplayer.com/how-to-guides/10-texttrack/04-how-to-insert-subtitles.md)
* [TextTracks API](https://docs.theoplayer.com/api-reference/web/theoplayer.texttrack.md)
* [Demo - Closed Captions and Subtitles](https://www.theoplayer.com/theoplayer-demo-cea-closed-captions-subtitles)

### Track styling
* [TextTrackStyle API](https://docs.theoplayer.com/api-reference/web/theoplayer.texttrackstyle.md)