# Adding UI buttons
The present sample showcases a THEOplayer implementation where two buttons are added to the control bar, on top of the default ones.

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

## Adding UI elements
In THEOplayer, you can decide to use the chromeless SDK, to build a completely custom UI, or the chromeful SDK, which you can tweak and adapt to your implementation.
The present sample showcases how to add buttons for functionalities not included in the default THEOplayer UI.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About customizing the default UI 
In THEOplayer, the default UI already includes the features and controls that are most common across implementations and use cases.

Check the other samples for other UI customizations, and the links below for related resources.

### Additional notes about adding UI elements
* <u>Not only buttons</u> - When it comes to adding elements to the THEOplayer UI, buttons are certainly very useful, but it is possible to add other UI elements too, if needed.

To know more about both topics, check out the linked documentation.
</details>

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEO Portal](https://portal.theoplayer.com)

### UI and customization
* [How-to guides - Introduction](https://docs.theoplayer.com/how-to-guides/11-ui/00-introduction.md)
* [API reference - UI Configuration](https://docs.theoplayer.com/api-reference/web/theoplayer.uiconfiguration.md)

### Adding UI elements
* [How to insert a button](https://docs.theoplayer.com/how-to-guides/11-ui/07-how-to-insert-a-button.md)
* [Demo - Adding buttons and text to the default UI](https://www.theoplayer.com/theoplayer-demo-adding-buttons-to-the-ui-with-custom-logic)