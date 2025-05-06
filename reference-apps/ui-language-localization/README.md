# Localizing the language of the player
The present sample showcases how localize the player texts so that your custom texts are shown to the user.

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

## Customizing UI elements
In THEOplayer, you can decide to use the chromeless SDK, to build a completely custom UI, or the chromeful SDK, which you can tweak and adapt to your implementation.

The present sample showcases how to customize the existing THEOplayer texts to change them or make them available in other languages.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About customizing the default UI
In THEOplayer, the default UI already includes the features and controls that are most common across implementations and use cases. You may decide to add, delete or tweak its elements to adapt the player to your implementation.

Check the other samples for other UI customizations, and the links below for related resources.

### Additional notes about language localization
* <u>Not only for languages</u> - Language localization is a way to customize the player texts, so it can be used to adapt the texts as well as for translating them. 
* <u>Before the player instantiation</u> - The texts of the player instance may not be changed with the language localization after the instance is created. Choosing if and how to localize the texts must happen before the player is initialized.
* <u>Multiple languages</u> - In the player configuration, you can define localized strings for several languages (or use cases), and apply one or the other dynamically.  
* <u>Errors</u> - The error texts displayed in the UI may also be localized.
* <u>List of localizable strings</u> - There are a lot of texts in the player and almost all of them can be localized. There currently is no complete list of the localizable strings, but the one you find in this sample is already covering most strings.
* <u>Ready-made translations</u> - In the linked documentation, we make some ready-made examples of string lists available. These can give you a good start but are to be considered mainly as examples, as they are not constantly updated. 
* <u>Not all texts</u> - There may be a few texts that cannot be localized, for different reasons. If you find one can you cannot localize, we invite you to reach out so we can assist you. 

</details>

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEOportal](https://portal.theoplayer.com)

### UI and customization
* [How-to guides - Introduction](https://docs.theoplayer.com/how-to-guides/11-ui/00-introduction.md)
* [API reference - UI Configuration](https://docs.theoplayer.com/api-reference/web/theoplayer.uiconfiguration.md)

### Language localization
* [How to change the default UI language to other](https://docs.theoplayer.com/how-to-guides/11-ui/08-how-to-change-default-UI-language-to-other.md)
* [Demo - Language localization](https://www.theoplayer.com/theoplayer-demo-language-localization)

