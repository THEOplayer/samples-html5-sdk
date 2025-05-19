# Caching content with THEOplayer
The present sample shows an implementation of THEOplayer where the user can cache the content.

To keep the page simple, we moved to this readme notes and useful resources.

## About the player implementation
The present samples are meant to be used with the NPM-installed player. Get your NPM web player on https://www.npmjs.com/package/theoplayer.

Alternatively, you can also generate a custom player on THEOportal.

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

## Caching content
In THEOplayer, you can cache content. This can be used for different purposes, including faster seeking, smooth playback on unstable networks or shorter join time for the videos in a playlist.  

The present sample showcases how to provide the user with two simple buttons, respectively to cache a video portion and to remove the cached content.

For more information, you can refer to the linked resources here below.

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEOportal](https://portal.theoplayer.com)

### Cache
* [Cache API reference](https://docs.theoplayer.com/api-reference/web/theoplayer.cache.md)
* [Demo - Playlist and caching](https://www.theoplayer.com/theoplayer-demo-playlist-and-caching)
