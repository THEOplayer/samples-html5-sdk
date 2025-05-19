# Visibility API
The present sample showcases the Visibility functionality of THEOplayer.

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

## Customizing UI elements
In THEOplayer, you can decide to use the chromeless SDK to build a completely custom UI, or the chromeful SDK, which you can tweak and adapt to your implementation.

In the present sample, you can see the Visibility feature in action, that pauses the player is less than the specified portion of the video player area is within the viewport.

<details style="border:1px solid #ccc;padding:1em; background-color:#f9f9f9">
  <summary>Learn more</summary>

### About customizing the default UI
In THEOplayer, the default UI already includes the features and controls that are most common across implementations and use cases. You may decide to add, delete or tweak its elements to adapt the player to your implementation.

Check the other samples for other UI customizations, and the links below for related resources.

### Additional notes about the Visibility API
* <u>Viewport</u> - Applying this API, the video stops if too much of the video area is outside of the viewport, and resumes when it is back. However, this is not the same as to say that the user can see the video, as there might be other elements, covering the video (e.g.: sticky elements)  
* <u>Support</u> - This API is based on the Intersection Observer API. This is widely available today on major browsers.

</details>

## Documentation and resources
### Player
* [NPM web player](https://www.npmjs.com/package/theoplayer)
* [THEOportal](https://portal.theoplayer.com)

### UI and customization
* [How-to guides - Introduction](https://docs.theoplayer.com/how-to-guides/11-ui/00-introduction.md)
* [API reference - UI Configuration](https://docs.theoplayer.com/api-reference/web/theoplayer.uiconfiguration.md)

### Visibility API
* [API reference - Visibility](https://docs.theoplayer.com/api-reference/web/theoplayer.visibility.md)
* [MDN - Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
