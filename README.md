# THEOplayer Vue.js Sample

## License

This projects falls under the license as defined in https://github.com/THEOplayer/license-and-disclaimer.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## A step-by-step guide:

1. Open your favorite IDE and then a terminal and install Vue CLI component:

```
npm install vue
```

2. If needed, create a new workspace and initial application:

```
vue create theoplayer-vuejs-sample
```

3. Choose your preferred configuration by choosing one of the presets from the list.

4. Once the project is created you should see successful message.

5. Go to root project and start application using instructions:

```
cd theoplayer-vuejs-sample
npm run serve
```

6. As a result you should be able to browse the default page under the following url: http://localhost:8080/

7. Reference the THEOplayer files in index.html like following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title>theoplayer-vuejs-sample</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="//cdn.theoplayer.com/dash/theoplayer/ui.css"
    />
  </head>

  <body>
    <noscript>
      <strong
        >We're sorry but theoplayer-vuejs-sample doesn't work properly without
        JavaScript enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <script
      type="text/javascript"
      src="//cdn.theoplayer.com/dash/theoplayer/THEOplayer.js"
    ></script>
    <!-- built files will be auto injected -->
  </body>
</html>
```

8. In the src/components/ add new file and name it Player.vue, then add the following snippet:

```html
<template>
  <div
    class="theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer"
    ref="theoplayer"
  ></div>
</template>

<script>
  export default {
    props: ["source"],
    mounted: function() {
      this.playerInit();
    },
    methods: {
      playerInit() {
        const player = new window.THEOplayer.Player(this.$refs.theoplayer, {
          fluid: true,
          libraryLocation: "//cdn.theoplayer.com/dash/theoplayer/"
        });
        player.source = {
          sources: this.source
        };
      }
    }
  };
</script>
<style>
  .THEOplayer {
    width: 50%;
    margin: 0 auto;
  }

  .video-js.vjs-16-9 {
    padding-top: 28.12%;
    width: 50%;
  }
</style>
```

9. Then you can reference the Player component in different parts of the app and pass the source, for instance you can change App.vue like following:

```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Player :source="source" v-if="source" />
  </div>
</template>

<script>
  import Player from "./components/Player.vue";

  export default {
    name: "app",
    components: {
      Player
    },
    data: function() {
      return {
        source: [
          {
            type: "application/x-mpegurl",
            src: "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"
          }
        ]
      };
    }
  };
</script>
<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
```

## Including THEOplayer library assets

1. Create a new folder named i.e. libs under public folder and copy the THEOplayer WebSDK files there.

2. Change the index.html to reference local files:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title>theoplayer-vuejs-sample</title>
    <link rel="stylesheet" type="text/css" href="libs/THEOplayer/ui.css" />
  </head>

  <body>
    <noscript>
      <strong
        >We're sorry but theoplayer-vuejs-sample doesn't work properly without
        JavaScript enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <script type="text/javascript" src="libs/THEOplayer/THEOplayer.js"></script>
    <!-- built files will be auto injected -->
  </body>
</html>
```

3. In the Player.vue modify libraryLocation like following:

```
 const player = new window.THEOplayer.Player(this.$refs.theoplayer, {
        fluid: true,
        libraryLocation: "./libs/THEOplayer"
      });

```
