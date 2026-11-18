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
