<template>
  <div class="columns generate-column">
    <div class="column generate-column-left">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">图片宽度</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="number" min="320" max="720" step="10" v-model="gifImage.width">
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">图片高度</a>
        </p>
        <p class="control is-expanded">
          <input
            class="input"
            type="number"
            min="320"
            max="720"
            step="10"
            v-model="gifImage.height"
          >
        </p>
      </div>
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">字体大小</a>
        </p>
        <p class="control is-expanded">
          <input
            class="input"
            type="number"
            min="14"
            max="36"
            step="1"
            v-model="gifImage.subtitle.fontSize"
          >
        </p>
      </div>
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">字体颜色</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="color" v-model="gifImage.subtitle.color">
        </p>
      </div>
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">字体样式</a>
        </p>
        <div class="control is-expanded">
          <p class="select is-fullwidth">
            <select v-model="gifImage.subtitle.fontStyle">
              <option value="normal">normal</option>
              <option value="italic">italic</option>
            </select>
          </p>
        </div>
      </div>
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">字体距底部高度</a>
        </p>
        <p class="control is-expanded">
          <input
            class="input"
            type="number"
            min="16"
            :max="gifImage.height / 2"
            step="1"
            v-model="gifImage.subtitle.bottom"
          >
        </p>
      </div>

      <button
        class="button is-info is-outlined is-fullwidth generate-button"
        :disabled="isGenerating"
        @click="generateGif"
      >{{ generateButtonText }}</button>
    </div>
    <div class="column is-three-quarters generate-column-right">
      <div class="card" v-for="(frame, index) of frames" :key="index">
        <div class="card-image" :id="frame.id">
          <figure class="image">
            <img src="../assets/logo.png" width="480" height="270">
          </figure>
          <h4 class="subtitle is-4" :style="subtitleStyle">{{ frame.subtitle }}</h4>
        </div>
        <div class="card-content">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">台词</a>
            </p>
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="输入台词" v-model="frame.subtitle">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import html2canvas from "html2canvas";
import { Component, Vue } from "vue-property-decorator";

import { Frame } from "../models/index";

const frames: Array<Frame> = [
  {
    id: "animebuilder-000",
    delay: 500,
    image: "../assets/frames/animebuilder/001.png",
    subtitle: "animebuilder/000.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-001",
    delay: 1000,
    image: "../assets/frames/animebuilder/005.png",
    subtitle: "animebuilder/001.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-002",
    delay: 1500,
    image: "../assets/frames/animebuilder/010.png",
    subtitle: "animebuilder/002.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-003",
    delay: 2000,
    image: "../assets/frames/animebuilder/013.png",
    subtitle: "animebuilder/003.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-004",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/004.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-005",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/005.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-006",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/006.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-007",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/007.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-008",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/008.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-009",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/009.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-009",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/009.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-009",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/009.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-009",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/009.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-009",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/009.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-009",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/009.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-009",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/009.png",
    data: new ImageData(1, 1)
  },

  {
    id: "animebuilder-009",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/012.png",
    data: new ImageData(1, 1)
  },
  {
    id: "animebuilder-009",
    delay: 2500,
    image: "../assets/frames/animebuilder/018.png",
    subtitle: "animebuilder/009.png",
    data: new ImageData(1, 1)
  }
];

@Component({
  name: "GenerateGif",
  props: {
    team: {
      type: Object,
      required: true
    },
    slogan: {
      type: Object,
      required: true
    }
  },
  computed: {
    generateButtonText(): string {
      if (this.isGenerating) {
        return (this.finished / this.frames.length) * 100 + "%";
      }
      return "生成";
    },
    subtitleStyle(): object {
      const { bottom, fontSize, color, fontStyle } = this.gifImage.subtitle;
      return {
        color,
        fontStyle,
        bottom: bottom + "px",
        fontSize: fontSize + "px"
      };
    }
  }
})
export default class GenerateGif extends Vue {
  gifImage = {
    width: 480,
    height: 270,
    subtitle: {
      bottom: 16,
      fontSize: 24,
      color: "#4a4a4a",
      fontStyle: "normal"
    }
  };

  frames: Array<Frame> = frames;
  isGenerating: boolean = false;
  finished: number = 0;

  generateFramesData(width: number, height: number) {
    this.isGenerating = true;

    return new Promise(resolve => {
      this.frames.forEach((frame, index) => {
        const html = document.getElementById(frame.id);

        html2canvas(html, {
          width,
          height,
          scale: 1,
          logging: false
        }).then((canvas: HTMLCanvasElement) => {
          frame.data = canvas
            .getContext("2d")
            .getImageData(0, 0, width, height);
          this.finished += 1;
          if (this.finished >= this.frames.length) {
            resolve();
          }
        });
      });
    });
  }

  async generateGif() {
    const { width, height } = this.gifImage;
    await this.generateFramesData(width, height);

    const gif = new GIF({
      workers: 2,
      quality: 0,
      width,
      height
    });

    this.frames.forEach((frame, index) => {
      gif.addFrame(frame.data, { copy: true, delay: 100 });
    });

    gif.on("finished", (blob: Blob) => {
      const src = URL.createObjectURL(blob);

      this.finished = 0;
      this.isGenerating = false;
      this.$emit("show-image-modal", { src, name: "aaa", format: "gif" });
    });

    gif.render();
  }
}
// const link = document.createElement("a");
// link.href = url;
// link.download = "finished";
// link.click();
</script>

<style lang="scss" scoped>
.card:not(:last-of-type) {
  margin-bottom: 0.75rem;
}
// .generate-column-left {
//   position: relative;
//   .generate-button {
//     position: absolute;
//     bottom: 1rem;
//   }
// }
.generate-column-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .card-image {
    position: relative;
    img {
      width: 480px;
      height: 270px;
    }
    .subtitle {
      position: absolute;
      bottom: 1rem;
      width: 100%;
      padding: 0 1em;
      text-align: center;
      background: transparent;
    }
  }
  .card-content {
    padding: 1rem;
    border-top: 1px solid #dbdbdb;
  }
}
</style>

