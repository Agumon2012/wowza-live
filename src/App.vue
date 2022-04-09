<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    serverUrl: <input v-model.trim="source.serverUrl">
    applicationName: <input v-model.trim="source.applicationName">
    streamName: <input v-model.trim="source.streamName">
    <br>
    Live Type:
    <input type="radio" value="manifest.mpd" v-model="suffix" @change="changeSrcType">
    <label>MPEG DASH</label>
    <input type="radio"  value="playlist.m3u8" v-model="suffix" @change="changeSrcType">
    <label>Apple HLS</label>
    <br>
    <playback :source="source" :suffix="suffix" :source-type="sourceType"/>
  </div>
</template>

<script>
import Playback from "./components/Playback";

export default {
  name: 'App',
  components: {
    Playback
  },
  data() {
    return {
      suffix: "manifest.mpd",
      sourceType: "application/dash+xml",
      source: {
        serverUrl: "http://127.0.0.1:1935",
        applicationName: "live",
        streamName: "myStream.stream_1080",
      }
    };
  },
  methods: {
    changeSrcType() {
      this.$data.sourceType = "manifest.mpd" === this.$data.suffix ? "application/dash+xml" : "application/x-mpegURL"
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
