# Building a custom quality selector menu
The present sample showcases how to build a custom submenu in the default UI.

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

## Customizing UI elements
In THEOplayer, you can decide to use the chromeless SDK, to build a completely custom UI, or the chromeful SDK, which you can tweak and adapt to your implementation.

The present sample showcases how to add a custom quality selector submenu which, based on mp4 files, simulates the usual menu built automatically from HLS or DASH renditions.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About customizing the default UI
In THEOplayer, the default UI already includes the features and controls that are most common across implementations and use cases. You may decide to add, delete or tweak its elements to adapt the player to your implementation.

Check the other samples for other UI customizations, and the links below for related resources.

### Notes about the current sample
* <u>Quality selection on iOS</u> - What described here can be used, especially in combination with a continuous play feature, to simulate the "normal" quality selection user menu on iOS, where it's not present.
* <u>With HLS or DASH</u> - The same method can be applied to single-variant playlists in HLS/DASH.
* <u>Normal ABR is advised</u> - Many of the benefits of ABR are not present here. Our advice is to play "normal" multivariant streams wherever possible.

### Additional notes about customizing menus
* <u>Adding elements</u> - The method here illustrated can be used to add other submenus or menu items in the default UI, and, slightly tweaked, can be used for the same purpose on your own UI. 
* <u>Alternatives for label customization</u> - There are other ways to customize quality labels (and other texts in general): if that is what you are after, see the language localization sample and navigate through the documentation linked below.

</details>

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEO Portal](https://portal.theoplayer.com)

### UI and customization
* [How-to guides - Introduction](https://docs.theoplayer.com/how-to-guides/11-ui/00-introduction.md)
* [API reference - UI Configuration](https://docs.theoplayer.com/api-reference/web/theoplayer.uiconfiguration.md)

### Custom menus and labels
* [How to customize quality selection & labels (MP4)](https://docs.theoplayer.com/getting-started/01-sdks/01-web/07-how-to-customize-quality-selection.md)
* [Demo - Custom quality labels](https://www.theoplayer.com/theoplayer-demo-custom-quality-labels)

