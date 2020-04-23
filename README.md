# THEOplayer Nuxt.js Sample

## License

This projects falls under the license as defined in https://github.com/THEOplayer/license-and-disclaimer.

## Getting started

1. Open your favorite IDE and then a terminal and install Vue CLI component:

```
npx create-nuxt-app theoplayer-nuxtjs-sample
```

2. Follow the installation process (please note this instructions assumes you’ve chosen npm as a module packager)

3. Once the app is created, execute the following commands:

```
cd theoplayer-nuxtjs-sample
npm install
npm run dev
```

4. The default application should be served under: http://localhost:3000/

5. Reference the THEOplayer Web SDK by editing file nuxt.config.js like the following:

```js
export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//cdn.theoplayer.com/dash/theoplayer/ui.css'
      }
    ],
    script: [
      {
        type: 'text/javascript',
        src: '//cdn.theoplayer.com/dash/theoplayer/THEOplayer.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
```

6. Add the new component named Player.vue under this path: components/Player.vue

```
<template>
  <div
    ref="theoplayer"
    class="theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer"
  ></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    source: (state) => state.source
  }),
  mounted() {
    this.playerInit()
  },
  methods: {
    playerInit() {
      const player = new window.THEOplayer.Player(this.$refs.theoplayer, {
        fluid: true,
        libraryLocation: '//cdn.theoplayer.com/dash/theoplayer/'
      })
      player.source = {
        sources: this.source
      }
    }
  }
}
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

7. Please note that vuex is used to pass the player source, for this purpose add index.js file under this path: store/index.js with following content:

```js
export const state = () => ({
  source: null
})

export const mutations = {
  setSource(state, source) {
    state.source = source
  }
}
```

8. Now, we are ready to reference the player component in the index.vue like following:

```vue
<template>
  <div class="container">
    <div>
      <logo />
      <player />
      <h1 class="title">
        theoplayer-nuxtjs-sample
      </h1>
      <h2 class="subtitle">
        THEOplayer nuxtjs sample app
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import Player from '~/components/Player.vue'

export default {
  components: {
    Logo,
    Player
  },
  created() {
    this.$store.commit('setSource', [
      {
        type: 'application/x-mpegurl',
        src: '//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8'
      }
    ])
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
```

9. This should result in page which includes THEO player component.

## Build Setup

```bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
