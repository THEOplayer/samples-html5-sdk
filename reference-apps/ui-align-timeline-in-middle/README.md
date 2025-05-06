# Customizing time indicators
The present sample showcases a THEOplayer implementation where custom time indicators have been created and aligned to the middle of the control bar.

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
To play on any other domains, as well as to make sure your license doesn't expire, get your license on https://portal.theoplayer.com.
</details>

## Aligning custom UI elements
In THEOplayer, you can decide to use the chromeless SDK, to build a completely custom UI, or the chromeful SDK, which you can tweak and adapt to your implementation.
The present sample showcases one way to add and position custom UI elements in the default THEOplayer UI.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About customizing the default UI
In THEOplayer, the default UI already includes the features and controls that are most common across implementations and use cases.

Check the other samples for other UI customizations, and the links below for related resources.

### Additional notes about adding and aligning custom UI elements
* <u>Not only time indicators</u> - When it comes to adding elements to the THEOplayer UI, you can add and align different types of elements, including time indicators, buttons, progress bar, texts and layers, etc.
* <u>Alternatives</u> - Depending on the element(s) that you are adding (and aligning) and on your use case, different ways to do so may be used.

To know more about this, check out the linked documentation.
</details>

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEOportal](https://portal.theoplayer.com)

### UI and customization
* [How-to guides - Introduction](https://docs.theoplayer.com/how-to-guides/11-ui/00-introduction.md)
* [API reference - UI Configuration](https://docs.theoplayer.com/api-reference/web/theoplayer.uiconfiguration.md)

### Customizing the timeline
* [How to align the timeline in the middle](https://docs.theoplayer.com/how-to-guides/11-ui/02-how-to-align-timeline-in-the-middle.md)
* [How to get frame-accurate currentTime display in the UI Control bar](https://docs.theoplayer.com/getting-started/01-sdks/01-web/08-how-to-get-frame-accurate-currentime-display.md)
