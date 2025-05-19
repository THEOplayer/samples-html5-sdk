# Uplynk App
The Uplynk App is a project which demonstrates the potential of THEOplayer's integration with Uplynk.
The primary purpose of this project is to host the code for the [demo](https://cdn.theoplayer.com/demos/uplynk/index.html) linked below.

This app uses the following APIs:
* https://docs.optiview.dolby.com/theoplayer/v9/api-reference/web/interfaces/UplynkSource.html
* https://docs.optiview.dolby.com/theoplayer/v9/api-reference/web/classes/Player.html#uplynk
* https://docs.optiview.dolby.com/theoplayer/v9/api-reference/web/interfaces/UplynkConfiguration.html
* https://docs.optiview.dolby.com/theoplayer/v9/api-reference/web/interfaces/UplynkUiConfiguration.html

Please also take a look at all the guides under our Uplynk documentation:
* https://docs.optiview.dolby.com/theoplayer/how-to-guides/web/uplynk/introduction/

Links:
* Github: https://github.com/THEOplayer/samples-html5-sdk/tree/master/reference-apps/uplynk-app
* Demo: https://cdn.theoplayer.com/demos/uplynk/index.html

# NPM scripts

- Install NPM dependencies: `npm install`
- Build with Webpack: `npm run build-dev` or `npn run build`
- Serve the app locally: `npm run start` (Open [http://localhost:8000](http://localhost:8000) to view it in the browser.)

## Deploying

The `/public/` folder contains the files which can be deployed to a web server. It's this repository which is uploaded to https://cdn.theoplayer.com/demos/uplynk/index.html.

Webpack must be used to build `/public/js/dist.js`. This file, `dist.js`, bundles the code from `/src/`, and contains the logic which is at the heart of this web app.

## Files

The application has the following files at its core:
- /src/config.js - stores player configuration and video source objects
- /src/app.js - handles the application logic
- /src/player.js - creates and interacts with the player object

# Frameworks and libraries
The application uses THEOplayer's default web SDK library location. This library location is located at `https://cdn.theoplayer.com/dash/theoplayer/`. 
This URL is incorporated in `/public/index.html` and `/src/player.js`. This library location will only be valid for `https://*.theoplayer.com` and `localhost` domains.
Replace the library with your own THEOplayer if you clone this project.

The application uses Javascript according to the [ECMAScript 5](https://www.w3schools.com/js/js_es5.asp) specification.

The application uses [Bootstrap 4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/) for handling the layout and provide mobile-first UI experience. [Material design](https://material.io/design/) is used as the design language of the application.

# Browser compatibility
The application is compatible with all modern Chromium browsers.
