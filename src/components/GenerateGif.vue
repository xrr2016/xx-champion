<template>
  <div class="columns generate-column">
    <div class="column generate-column-left">
      <div class="card video is-selected">
        <video
          src="../assets/animatedbuilder.mp4"
          autobuffer
          muted
          @contextmenu.stop.prevent
          @click.stop.prevent.self="selectVideo($event)"
        />
      </div>
      <div class="card video is-selected">
        <video
          src="../assets/llllaadsada.mp4"
          autobuffer
          muted
          @contextmenu.stop.prevent
          @click.stop.prevent.self="selectVideo($event)"
        />
      </div>
    </div>
    <div class="column is-three-quarters generate-column-right">
      <div class="box is-unselectable canvas-container">
        <canvas class="canvas" id="videoCanvas" width="320" height="180" ref="videoCanvas"></canvas>
      </div>

      <!-- <div class="columns gif-frames">
        <div class="column frame">First column</div>
        <div class="column frame">Second column</div>
        <div class="column frame">Third column</div>
        <div class="column frame">Fourth column</div>
      </div>-->
      <progress
        class="progress is-success"
        :value="videoPlayProgress"
        max="100"
      >{{videoPlayProgress}}%</progress>
      <button
        class="button is-info is-outlined generate-button"
        :class="{ 'is-loading': isGenerating }"
        :disabled="isGenerating"
        @click="generateGif"
      >生成</button>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { Component, Vue } from "vue-property-decorator";

const GIF = window.GIF;
const gif = new GIF({
  workers: 2,
  quality: 10,
  debug: true,
  width: 320,
  height: 180
});

interface Word {
  text: string;
  fontSize: number;
  color: string;
  startTime: number;
  duration: number;
}

@Component({
  computed: {
    ...mapState(["renderText"])
  },
  watch: {}
})
export default class GenerateGif extends Vue {
  dpr: number = window.devicePixelRatio;
  selectedVideo: HTMLVideoElement = null;
  videoPlayProgress: number = 0;
  isGenerating: boolean = false;
  frames: Array<any> = [];
  frameLimit: number = 20;
  words: Array<Word> = [
    {
      text: "0000",
      color: "black",
      fontSize: 32,
      startTime: 3,
      duration: 4
    },
    {
      text: "1111",
      color: "black",
      fontSize: 32,
      startTime: 10,
      duration: 4
    },
    {
      text: "2222",
      fontSize: 32,
      startTime: 12,
      duration: 4,
      color: "black"
    },
    {
      text: "3333",
      color: "black",
      fontSize: 32,
      startTime: 16,
      duration: 6
    }
  ];

  selectVideo(event) {
    const canvas: any = document.getElementById("videoCanvas");
    const context: any = canvas.getContext("2d");
    const video: HTMLVideoElement = event.target;

    this.selectedVideo = video;

    let lastDrawTime = 0;

    video.play();
    video.addEventListener("timeupdate", () => {
      // const word = this.words[0];
      const { currentTime, duration } = video;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.videoPlayProgress = (currentTime / duration) * 100;

      // if (currentTime >= word.startTime) {
      //   this.drawWord(canvas, context, word);
      //   lastDrawTime = currentTime;
      // }

      // if (currentTime >= lastDrawTime + word.duration) {
      //   context.clearRect(0, 0, canvas.width, canvas.height);
      //   this.words.splice(0, 1);
      //   lastDrawTime = currentTime;
      // }
    });
  }

  drawWord(word: Word) {
    // context.fillStyle = word.color;
    // context.textAlign = "center";
    // context.font = `${word.fontSize}px sans-serif`;
    // context.fillText(
    //   word.text,
    //   canvas.width / 2,
    //   canvas.height - word.fontSize
    // );
  }

  async renderWords(currentTime: number) {
    // const startTime = 0;
    // const word = this.words[0];
    // if(currentTime >= word.startTime) {
    //    this.drawWord(word)
    // }
  }

  generateFrames(): void {}

  generateGif(): void {
    let framesNumber = 10;
    const rate = 15;
    const self = this;
    const video: HTMLVideoElement = this.selectedVideo;
    const canvas: any = document.getElementById("videoCanvas");
    const context: any = canvas.getContext("2d");

    function addFrame() {
      const { currentTime, duration } = video;

      while (framesNumber > 0) {
        if (currentTime >= self.words[0].startTime) {
          gif.addFrame(context, {
            delay: currentTime,
            copy: true
          });
          framesNumber -= 1;
        }
      }
    }

    let interval;
    this.isGenerating = true;
    this.selectedVideo.currentTime = 0;
    this.selectedVideo.play().then(() => {
      // interval = setInterval(() => {
      //   addFrame();
      // }, 1000 / rate);
      video.addEventListener("timeupdate", addFrame);
      console.log(framesNumber);
    });

    video.addEventListener("ended", () => {
      clearInterval(interval);
    });

    gif.on("finished", function(blob) {
      console.log("finished");
      this.isGenerating = false;
      window.open(URL.createObjectURL(blob));
      video.removeEventListener("timeupdate", addFrame);
      // const url = URL.createObjectURL(blob);
      // const a = document.createElement("a");

      // this.selectedVideo.pause();

      // a.href = url;
      // a.download = this.renderText;
      // a.click();
    });

    gif.render();
  }

  downloadImage(): void {
    console.log("download");
  }
}
</script>

<style lang="scss" scoped>
.generate-column-left {
  .video {
    line-height: 0;
    &:not(:last-of-type) {
      margin-bottom: 0.75rem;
    }
    &.is-selected {
      border: 1px solid #209cee;
      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
    }
  }
}
.generate-column-right {
  justify-content: flex-start;
  flex-direction: column;
  .canvas-container {
    padding: 0;
    line-height: 0;
  }
  .generate-button {
    width: 240px;
  }
}
</style>

