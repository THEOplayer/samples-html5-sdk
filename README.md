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

### `src/player/THEOplayerView.tsx`

is an example implementation of a React Component that wraps the THEOplayer module. You can extend this wrapper to support whatever THEOplayer API that you want to use.

### `src/App.tsx`

uses the `Player` component exported by `THEOplayerView.tsx` and specifies a source for the player to play.

## Going to Production

The THEOplayer library in this sample is installed from [the `theoplayer` package on npm](https://www.npmjs.com/package/theoplayer). It does not yet have a license configured, so initially it works on **localhost only**. You can specify a custom license in the `App.tsx` file.

### Getting a license

To use this sample in your production app, you will need a valid license for the THEOplayer HTML5 SDK. You can use your existing license or get one on [THEOportal](http://portal.theoplayer.com).

### Updating the project

After acquiring a license, you can use it in the project.

In `src/App.tsx`, modify the `license` variable:

```ts
const license = '<insert license>';
```
