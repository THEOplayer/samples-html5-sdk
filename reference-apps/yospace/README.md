# Yospace
The present sample showcases playback with a Yospace stream in THEOplayer.

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

## Using ads
In THEOplayer you can do SSAI and/or CSAI.

The present sample showcases SSAI ads, integrated in the stream with Yospace.

[comment]: <> (<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">)

[comment]: <> (  <summary>Learn more</summary>)

[comment]: <> (### Additional notes about Yospace)

[comment]: <> (* <u>Yospace</u> - THEOplayer partnered with Yospace to fully pre-integrate their Server-Side Ad Insertion solution, allowing you to play their streams in a breeze.)

[comment]: <> (</details>)

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEOportal](https://portal.theoplayer.com)

### UI and customization
* [How-to guides - Introduction](https://docs.theoplayer.com/how-to-guides/11-ui/00-introduction.md)
* [API reference - UI Configuration](https://docs.theoplayer.com/api-reference/web/theoplayer.uiconfiguration.md)

### Yospace
* [API reference - Yospace](https://docs.theoplayer.com/api-reference/web/theoplayer.yospace.md)
* [How-to guides - Yospace](https://docs.theoplayer.com/how-to-guides/01-ads/04-yospace.md)
* [Demo - Yospace](https://demo.theoplayer.com/ssai)
