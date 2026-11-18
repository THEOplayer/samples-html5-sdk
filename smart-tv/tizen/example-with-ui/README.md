# THEOplayer Tizen Reference App with UI

THEOplayer Tizen Reference app with UI is an example user interface for Tizen.

For a barebone example, check out the `minimum-example` directory in the root directory of the project.

## UI bundle set-up

* Ensure [Node.js](https://nodejs.org/en/) 10+ and npm are available on your local device.
* Make sure modules are installed: `npm install`

## Making the UI bundle

You can make a build by running the following command:
```
npm run build
```

You can also watch changes:
```npm run watch```

This will create a build of the TypeScript files under `src/` and bundle it at `js/Main.js`.

## Inserting your THEOplayer build

Place your THEOplayer build under `libs/`. Make sure to place a chromeless build (`THEOplayer.chromeless.js`). 
If you need to use HLS, make sure to also include the worker files.

## General Tizen set-up

See README at the root level of the project.