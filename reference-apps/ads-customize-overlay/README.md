# Customize the ads overlay
The present sample shows customized overlay elements for ads played with the CSAI integration.

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
The present sample showcases a customized UI overlay for CSAI ads played with the THEO integration.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### Notes about the CSAI integration
Ads can be played in THEOplayer out of the box with the CSAI integration. For this you don't need to add any library, nor to specify any integration in your adSource.

The UI, including the language, is customizable. Check the links below for related resources.

</details>

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEOportal](https://portal.theoplayer.com)

### Ads
* [How to guides - Introduction](https://docs.theoplayer.com/how-to-guides/01-ads/00-introduction.md)
* [Ads API reference](https://docs.theoplayer.com/api-reference/web/theoplayer.ads.md)
* [AdsConfiguration](https://docs.theoplayer.com/api-reference/web/theoplayer.adsconfiguration.md)
* [Advertising Tester - VAST, VPAID, VMAP](https://www.theoplayer.com/theoplayer-demo-advertisement-tester-vpaid-vast-vmap)

* [Setting up CSAI ads](https://docs.theoplayer.com/how-to-guides/01-ads/03-how-to-set-up-vast-and-vmap.md)
  <span style="display: inline-block;height:2em"></span>
* [Customizing CSAI ads](https://docs.theoplayer.com/how-to-guides/01-ads/02-customizing-the-ad-overlay-text.md)

* [Setting up IMA ads](https://docs.theoplayer.com/how-to-guides/01-ads/10-google-ima.md)
  <span style="display: inline-block;height:2em"></span>
* [FAQ: Is it possible to hide/disable the Google IMA UI?](https://docs.theoplayer.com/how-to-guides/11-ui/05-is-it-possible-to-hide-googla-ima.md)
