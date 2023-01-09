# Changing the player colors
The present sample showcases how to customize the colors of the player consistently in just a few CSS lines.

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

The present sample showcases how to easily change player.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About customizing the default UI
In THEOplayer, the default UI already includes the features and controls that are most common across implementations and use cases. You may decide to add, delete or tweak its elements to adapt the player to your implementation.

Check the other samples for other UI customizations, and the links below for related resources.

### Additional notes about customizing colors
* <u>Single elements</u> - On top of these general color customizations, elements may also be targeted singularly for color customization. 
* <u>Accessibility</u> - In this sample, we purposefully chose a bad color combination (see control bar), to show that color combinations are important for accessibility. We advise to check that your preferred color combinations respect the general guidelines.

</details>

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEO Portal](https://portal.theoplayer.com)

### UI and customization
* [How-to guides - Introduction](https://docs.theoplayer.com/how-to-guides/11-ui/00-introduction.md)
* [API reference - UI Configuration](https://docs.theoplayer.com/api-reference/web/theoplayer.uiconfiguration.md)

### UI skinning
* [How-to guides - UI skinning](https://docs.theoplayer.com/how-to-guides/11-ui/13-ui-skinning.md)
* [Demo - UI skinning](https://www.theoplayer.com/theoplayer-demo-ui-skinning)
* [WCAG 2 Overview - Accessibility](https://www.w3.org/WAI/standards-guidelines/wcag/)
