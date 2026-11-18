<template>
  <div class="theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer" ref="theoplayer"></div>
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
