<template>
  <div class="columns generate-column">
    <div class="column generate-column-left">
      <div class="field has-addons" v-for="(item, index) of context.subtitles" :key="index">
        <p class="control">
          <a class="button is-static">第{{ index + 1 }}句</a>
        </p>
        <p class="control is-expanded">
          <input
            class="input"
            type="text"
            v-model="item.word"
            maxlength="20"
            @input="handleSubtitleInput(item)"
          >
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">图片宽度</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="number" min="240" max="720" step="10" v-model="gifImage.width">
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
            max="720"
            min="160"
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

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">图片间隔时间</a>
        </p>
        <p class="control is-expanded">
          <input
            class="input"
            type="number"
            max="2000"
            min="100"
            step="10"
            v-model="gifImage.delay"
          >
        </p>
      </div>

      <button
        class="button is-info is-outlined is-fullwidth generate-button"
        :disabled="isGenerating"
        @click="generateGif"
      >{{ generateButtonText }}</button>
    </div>
    <ul class="column is-three-quarters generate-column-right" type="1">
      <li class="card field" v-for="(frame, index) of context.frames" :key="index">
        <div class="card-image frame" :id="frame.id">
          <figure class="image">
            <img :style="imageStyle" :src="frame.image">
          </figure>
          <h4 class="subtitle is-4" :style="subtitleStyle">{{ frame.subtitle }}</h4>
        </div>
        <div class="card-content">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">{{ index + 1}}</a>
            </p>
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="输入台词" v-model="frame.subtitle">
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import html2canvas from "html2canvas";
import { Component, Vue } from "vue-property-decorator";

import yilunyou from "../models/yilunyou";
import zhengxiang from "../models/zhengxiang";
import zongguanjun from "../models/zongguanjun";
import { Frame, Team, Slogan, slogans } from "../models/index";

declare module "vue/types/vue" {
  interface Vue {
    gifImage: {
      width: number;
      height: number;
      delay: number;
      subtitle: {
        bottom: number;
        fontSize: number;
        color: string;
        fontStyle: string;
      };
    };
    context: any;
    finished: number;
    isGenerating: boolean;
  }
}

declare global {
  interface Window {
    GIF: any;
  }
}

function changeSlogan(word: string, self: any) {
  switch (word) {
    case "总冠军":
      self.context = zongguanjun;
      break;
    case "一轮游":
      self.context = yilunyou;
      break;
    case "真香":
      self.context = zhengxiang;
      break;
  }
}

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
        const rate = this.finished / (this.context.frames.length * 2);
        return Math.floor(rate * 100) + "%";
      }
      return "生成";
    },
    imageStyle() {
      const { width, height } = this.gifImage;
      return {
        width: width + "px",
        height: height + "px"
      };
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
  },
  watch: {
    team: function(newVal, oldVal) {
      if (newVal.abbr === oldVal.abbr) {
        return;
      }

      const { meta } = this.context;
      const subtitle = this.context.subtitles[meta.teamNameIndex];

      meta.teamName = newVal.name;
      subtitle.word = subtitle.word.replace(oldVal.name, newVal.name);

      this.context.frames.forEach((frame: any, index: number) => {
        if (index >= subtitle.start && index <= subtitle.end) {
          frame.subtitle = subtitle.word;
        }
      });
    },
    slogan: function(newVal, oldVal) {
      if (newVal.word === oldVal.word) {
        return;
      }
      changeSlogan(newVal.word, this);
      this.gifImage.delay = this.context.frames[0].delay;
    }
  },
  mounted() {
    changeSlogan(this.slogan.word, this);
    this.gifImage.delay = this.context.frames[0].delay;
  }
})
export default class GenerateGif extends Vue {
  gifImage = {
    name: this.team.name + this.slogan.word,
    width: 480,
    height: 240,
    delay: 0,
    subtitle: {
      bottom: 16,
      fontSize: 24,
      color: "#ffffff",
      fontStyle: "normal"
    }
  };

  context: any = {
    meta: null,
    frames: [],
    subtitles: []
  };

  finished: number = 0;
  isGenerating: boolean = false;

  generateFrames() {
    const frames = this.context.frames;
    const { width, height } = this.gifImage;

    return new Promise(resolve => {
      frames.forEach((frame: any, index: number) => {
        const html: any = document.getElementById(frame.id);

        html2canvas(html, {
          scale: 1,
          logging: false
        }).then((canvas: any) => {
          frame.data = canvas
            .getContext("2d")
            .getImageData(0, 0, width, height);
          this.finished += 1;
          if (this.finished >= frames.length) {
            resolve();
          }
        });
      });
    });
  }

  async generateGif() {
    this.isGenerating = true;

    const { GIF } = window;
    const frames = this.context.frames;
    const { width, height, name } = this.gifImage;

    const gif = new GIF({
      workers: 2,
      quality: 0,
      width,
      height
    });

    await this.generateFrames();

    frames.forEach((frame: any, index: number) => {
      gif.addFrame(frame.data, { copy: true, delay: frame.delay });
      this.finished += 1;
    });

    gif.on("finished", (blob: Blob) => {
      const src = URL.createObjectURL(blob);

      this.finished = 0;
      this.isGenerating = false;
      this.$emit("show-image-modal", { src, name, format: "gif" });
    });

    gif.render();
  }

  handleSubtitleInput(item: any) {
    this.context.frames.forEach((frame: any, index: number) => {
      if (index >= item.start && index <= item.end) {
        frame.subtitle = item.word;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.generate-column-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .card-image {
    position: relative;
    .subtitle {
      position: absolute;
      bottom: 1rem;
      width: 100%;
      padding: 0 1em;
      text-align: center;
      background: transparent;
      letter-spacing: 1px;
    }
  }
  .card-content {
    padding: 0.8rem;
  }
}
</style>

