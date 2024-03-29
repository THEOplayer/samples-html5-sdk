# Progressive web app with THEOplayer
## Info
This project demonstrates how THEOplayer could fit in a progressive web app. The repository at https://github.com/jamesjohnson280/hello-pwa is the starting point for this project.

## Notes
* This application should not be rolled out in production.
* The `/theoplayer/` folder contains the files of the THEOplayer library. Replace these files with your own THEOplayer files if you clone (or download) this project.
* Resources: https://developers.google.com/web/tools/workbox, https://developers.google.com/web/tools, https://web.dev/progressive-web-apps/
* Online demo of this project: https://cdn.theoplayer.com/demos/progressive-web-app/index.html
* This project passed the Lighthouse audit on the 7th of May, 2020.
![Lighthouse Audit](lighthouse_audit.png "Lighthouse Audit")

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