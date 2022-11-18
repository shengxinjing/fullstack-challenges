<template>
  <div class="video-wrap">
      <!-- <div></div> -->
      <video src="/ikun/ikun.mp4" class="video"></video>
      <button @click="play">play</button>
  </div>
  </template>
  <script>
  import DPlayer  from  'dplayer'
  export default {
      props: { 
      },
      methods: {
        play(){
          this.$refs.video.play()

        },
          load: function () {
              this.options.container = this.$refs.video;
          }
      },
      mounted: function () {

        this.$refs.video.play()

      },
      beforeDestroy: function () {
          this.dplayer && this.dplayer.destroy();
      }
  }
  </script>
  <style>
  </style>
  