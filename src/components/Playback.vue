<template>
  <div>
    Play url: {{videoOptions.sources[0].src}}
    <video-player :options="videoOptions" />
  </div>
</template>

<script>
import VideoPlayer from "./VideoPlayer";

export default {
  name: "Playback",
  components: {
    VideoPlayer
  },
  props: {
    source: {
      type: Object,
      default() {
        return {};
      }
    },
    suffix: "",
    sourceType: "",
  },
  watch: {
    suffix: {
      immediate: true,
      handler(value) {
        this.videoOptions.sources[0].src =
          `${this.source.serverUrl}/${this.source.applicationName}/${this.source.streamName}/${value}`;
      }
    },
    sourceType: {
      immediate: true,
      handler(value) {
        this.videoOptions.sources[0].type = value;
      }
    }
  },
  data() {
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        // preload: "auto",
        playbackRates: [0.5, 1, 1.5, 2],
        loop: true,
        aspectRatio: "16:9",
        fullscreen: {
          options: { navigationUI: "hide" }
        },
        sources: [
          {
            // mpeg-dash application/dash+xml
            type: this.sourceType,
            src: `${this.source.serverUrl}/${this.source.applicationName}/${this.source.streamName}/${this.suffix}`
          },
          {
            // src: "/static/sample.mp4",
            // type: "video/mp4"
            // hls application/x-mpegURL
            // type: "application/x-mpegURL",
            // src:"http://127.0.0.1:1935/live/myStream.stream_1080/playlist.m3u8"
          }
        ],
        // controlBar: {
        //   children: [
        //     {
        //       name: "playToggle"
        //     },
        //     {
        //       name: "progressControl"
        //     },
        //     {
        //       name: "currentTimeDisplay"
        //     },
        //     {
        //       name: "timeDivider"//时间进度条
        //     },
        //     {
        //       name: "durationDisplay"
        //     },
        //     {
        //       name: "volumePanel", // 音量调整方式横线条变为竖线条
        //       inline: false
        //     },
        //     {
        //       name: "pictureInPictureToggle" //画中画播放模式
        //     },
        //     {
        //       name: "fullscreenToggle"
        //     }
        //   ]
        // }
      }
    };
  }
};
</script>

<style scoped></style>
