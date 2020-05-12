# THEOplayer React.js Sample

## License

This projects falls under the license as defined in https://github.com/THEOplayer/license-and-disclaimer.

## Overview
This project contains a basic implementation of a React App using THEOplayer as a React Component.

## Project setup

```
npm install
```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).


```
npm start
```
Compiles and runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

## Creating and using a component

### `src/THEOplayerWrapper.js`
is an example implementation of a React Component that wraps the THEOplayer.js module. You can extend this wrapper to support whatever THEOplayer API that you want to use.
### `src/App.js`
uses the `Player` component exported by `THEOplayerWrapper.js` and specifies a source for the player to play.

## Going to Production

 The THEOplayer library provided in this sample is currently targeted to the latest version and is set to run on **localhost only**

### Getting  a license
To run THEOplayer in production you will need a valid THEOplayer HTML5 SDK set up to run on your domain. You can use your existing license or get one for free on [THEOportal](http://portal.theoplayer.com).

### Updating the project
You will need to update some files that reference the THEOplayer.js and THEOplayer.css files:

- `src/THEOplayerWrapper.js`, -- Please replace the URL of the libraryLocation to the url or folder where your THEOplayer files (THEOplayer.js, THEOplayer.d.js, etc.) are residing.
- `src/App.js`
- `public/index.html` -- Please replace the links to the THEOplayer assets with your own URLs.