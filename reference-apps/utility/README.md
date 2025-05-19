# Utility

Projects in this folder offer utility.
For example, there is a project which will help you measure the loading time of the THEOplayer SDK.

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
To play on any other domains, as well as to make sure your license doesn't expire, get your license on https://portal.theoplayer.com.
</details>
