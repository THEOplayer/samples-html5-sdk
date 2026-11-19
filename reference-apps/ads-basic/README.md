# Playing ads
The present sample shows how to add CSAI ads (preroll, midroll, postroll) in the player. 


## Running this sample
1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In the repository root, install the dependencies and start the local server:
   ```sh
   npm install
   npm start
   ```
   `npm install` gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package.
3. Open http://localhost:8080/reference-apps/ads-basic/index.html.

The page loads the player from `../../node_modules/theoplayer/`:
* UI CSS: `../../node_modules/theoplayer/ui.css`
* Player library: `../../node_modules/theoplayer/THEOplayer.js`
* `libraryLocation`: `../../node_modules/theoplayer/`

### License
The license in this sample only allows playback on _localhost_.
To play on other domains, get your own license on the [THEOportal](https://portal.theoplayer.com) and set it in the player configuration.

See [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/) for the full setup guide, and the [examples page](https://optiview.dolby.com/docs/theoplayer/examples/) for more live demos.

## Using ads
In OptiView Player you can do SSAI and/or CSAI.
The present sample showcases CSAI ads with the default CSAI and the Google IMA integrations, which are the most commonly used.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### Notes about the CSAI integration
Ads can be played in OptiView Player out of the box with the CSAI integration. For this, you don't need to add any library, nor to specify any integration in your `adSource`. 

The UI, including the language, is customizable. Check the links below for related resources.

### Notes about the Google IMA integration
Ads can also be played in OptiView Player with the Google IMA integration. For this, the IMA library is needed. You also need to specify `integration: 'google-ima'` in your adSource.

Some aspects of the UI are customizable, but since IMA ads play in an `<iframe>`, this cannot be changed at will. Check the links below for related resources.
</details>

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEOportal](https://portal.theoplayer.com)

### Ads
* [How to guides - Introduction](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ads/introduction/)
* [Ads API reference](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/interfaces/Ads.html)
* [AdsConfiguration](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/interfaces/AdsConfiguration.html)
* [Advertising Tester - VAST, VPAID, VMAP](https://www.theoplayer.com/theoplayer-demo-advertisement-tester-vpaid-vast-vmap)

* [Setting up CSAI ads](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ads/how-to-set-up-vast-and-vmap/)
  <span style="display: inline-block;height:2em"></span>
* [Customizing CSAI ads](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ads/customizing-the-ad-overlay-text/)
  
* [Setting up IMA ads](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ads/google-ima/)
  <span style="display: inline-block;height:2em"></span>
* [FAQ: Is it possible to hide/disable the Google IMA UI?](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ui/is-it-possible-to-hide-googla-ima/)




