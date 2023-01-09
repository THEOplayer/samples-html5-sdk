# Showing preview thumbnails in THEOplayer
The present sample showcases a THEOplayer implementation where preview thumbnails are made available on the timeline.

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

## Using textTracks for thumbnails
In THEOplayer you can use textTracks for many purposes, including preview thumbnails.
The present sample showcases how to sideload a track containing the thumbnails, so that these will appear on the timeline.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About textTracks
In THEOplayer, the textTracks can be used for a variety of purposes: showing captions, passing metadata, activating timeline thumbnails and marking chapters.

Check the other samples for other textTracks functionalities, and the links below for related resources.

### Additional notes about preview thumbnails
* <u>In-stream thumbnails</u> - As for other textTracks, THEOplayer supports both sideloaded files and tracks defined directly in the stream.
* <u>Thumbnails generation</u> - The easiest way to generate thumbnails is to create them based on key frames of your segments. Advanced packagers today support this feature and will offer the possibility to amend your manifest files with a thumbnail stream.
* <u>Retrieving single cues</u> - The API also exposes the content of each available image as a list of timed cues. This allows you to use the thumbnails for other use cases, like updating your EPG icon or creating a custom thumbnail display.

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

### Thumbnails
* [How to implement preview thumbnails in THEOplayer](https://docs.theoplayer.com/how-to-guides/10-texttrack/05-how-to-implement-preview-thumbnails.md)
* [Blog post - In-stream thumbnail support for (DVR) DASH streams](https://www.theoplayer.com/blog/in-stream-thumbnail-support-dvr-dash-streams)
* [FAQ - What are the benefits of preview thumbnails?](https://docs.theoplayer.com/knowledge-base/03-playback/02-what-are-the-benefits-of-preview-thumbnails.md) 
* [Demo - Preview thumbnails](https://www.theoplayer.com/theoplayer-demo-preview-thumbnails)