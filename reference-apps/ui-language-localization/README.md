# Localizing the language of the player
The present sample showcases how localize the player texts so that your custom texts are shown to the user.


## Running this sample
1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In the repository root, install the dependencies and start the local server:
   ```sh
   npm install
   npm start
   ```
   `npm install` gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package.
3. Open http://localhost:8080/reference-apps/ui-language-localization/index.html.

The page loads the player from `../../node_modules/theoplayer/`:
* UI CSS: `../../node_modules/theoplayer/ui.css`
* Player library: `../../node_modules/theoplayer/THEOplayer.js`
* `libraryLocation`: `../../node_modules/theoplayer/`

### License
The license in this sample only allows playback on _localhost_.
To play on other domains, get your own license on the [THEOportal](https://portal.theoplayer.com) and set it in the player configuration.

See [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/) for the full setup guide, and the [examples page](https://optiview.dolby.com/docs/theoplayer/examples/) for more live demos.

## Customizing UI elements
In OptiView Player, you can decide to use the chromeless SDK, to build a completely custom UI, or the chromeful SDK, which you can tweak and adapt to your implementation.

The present sample showcases how to customize the existing OptiView Player texts to change them or make them available in other languages.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About customizing the default UI
In OptiView Player, the default UI already includes the features and controls that are most common across implementations and use cases. You may decide to add, delete or tweak its elements to adapt the player to your implementation.

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
* [How-to guides - Introduction](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ui/introduction/)
* [API reference - UI Configuration](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/interfaces/UIConfiguration.html)

### Language localization
* [How to change the default UI language to other](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ui/how-to-change-default-UI-language-to-other/)
* [Demo - Language localization](https://www.theoplayer.com/theoplayer-demo-language-localization)

