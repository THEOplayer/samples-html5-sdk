# Showing captions
The present sample showcases a THEOplayer implementation with subtitles both in-stream and sideloaded, where the user can choose the desired subtitles through the control bar.
Here, the subtitles are shown by default on the stream. 

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


## Using textTracks for captions
In THEOplayer, you can use textTracks for many purposes, including subtitles and closed captions. These appear on the UI, and may be styled.
The present sample showcases how to select by default a specific track, and provides information about the track changes in the console. 

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About textTracks
In THEOplayer, the textTracks can be used for a variety of purposes: showing captions, passing metadata, activating timeline thumbnails and marking chapters.

Check the other samples for other textTracks functionalities, and the links below for related resources.

### Additional notes about subtitles
* <u>Formats</u> - THEOplayer supports many different subtitle formats (platform limitations may apply). 
* <u>Functionalities</u> - It is possible to manipulate the subtitle tracks in several ways and for different purposes.

To know more about both topics, check out the linked documentation.
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
* [FAQ - Which subtitle and CC formats are supported on native Safari](https://docs.theoplayer.com/faq/67-which-subtitle-and-cc-formats-are-supported-on-native-safari.md)
