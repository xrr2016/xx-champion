<template>
  <div class="columns generate-column">
    <div class="column generate-column-left">
      <!-- <div class="field has-addons">
        <p class="control">
          <a class="button is-static">图片名称</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="text" v-model="image.name">
        </p>
      </div>-->
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">图片宽度</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="number" max="1080" min="360" step="10" v-model="image.width">
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">图片高度</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="number" max="960" min="240" step="10" v-model="image.height">
        </p>
      </div>

      <!-- <div class="field has-addons">
        <p class="control">
          <a class="button is-static">图片宽高比</a>
        </p>
        <div class="control is-expanded">
          <p class="select is-fullwidth">
            <select v-model="image.ratio">
              <option value="3by1">3by1</option>
            </select>
          </p>
        </div>
      </div>-->
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">标题字体大小</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="number" max="48" min="16" v-model="image.titleFontSize">
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">作者字体大小</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="number" max="24" min="12" v-model="image.authorFontSize">
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">标题字体粗细</a>
        </p>
        <p class="control is-expanded">
          <input
            class="input"
            type="number"
            max="800"
            min="400"
            step="100"
            v-model="image.titleFontWeight"
          >
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">作者字体粗细</a>
        </p>
        <p class="control is-expanded">
          <input
            class="input"
            type="number"
            max="600"
            min="400"
            step="100"
            v-model="image.authorFontWeight"
          >
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">标题字体颜色</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="color" v-model="image.titleColor">
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">作者字体颜色</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="color" v-model="image.authorColor">
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">图片背景颜色</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="color" v-model="image.backgroundColor">
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">下载图片格式</a>
        </p>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select v-model="image.format">
              <option value="image/png">image/png</option>
              <option value="image/jpeg">image/jpeg</option>
              <option value="image/webp">image/webp</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field file has-name is-fullwidth">
        <label class="file-label">
          <input
            class="file-input"
            type="file"
            accept=".jpg, .jpeg, .png, .webp"
            @change="handleBgImageChange"
          >
          <span class="file-cta">背景图片</span>
          <span class="file-name">{{ backgroundImageName }}</span>
        </label>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">背景图片尺寸</a>
        </p>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select v-model="image.backgroundSize">
              <option value="auto">auto</option>
              <option value="cover">cover</option>
              <option value="contain">contain</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">背景图片横轴位置</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="number" step="1" v-model="image.backgroundPositionX">
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">背景图片纵轴位置</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="number" step="1" v-model="image.backgroundPositionY">
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">作者名称</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="text" v-model="image.author">
        </p>
      </div>
    </div>

    <div class="column is-three-quarters generate-column-right">
      <div class="box is-unselectable output-image-html" id="imageHtml" :style="imageBoxStyle">
        <h3 class="title is-3" :style="imageTitleStyle">{{ this.nbaTeam.name + this.slogan.word }}</h3>
        <p class="author" :style="imageAuthorStyle">
          author:
          <span class="author-name">{{ image.author }}</span>
        </p>
      </div>
      <!-- <canvas class="box image-canvas" ref="imageCnavas" id="imageCanvas"></canvas> -->
      <button
        class="button is-info is-outlined generate-button"
        :class="{ 'is-loading': isGenerating }"
        :disabled="isGenerating"
        @click="generateImage"
      >生成</button>
    </div>
  </div>
</template>

<script lang="ts">
import html2canvas from "html2canvas";
import { getMainColor } from "nba-color";
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/models";

declare module "vue/types/vue" {
  interface Vue {
    image: {
      name: string;
      author: string;
      width: number;
      height: number;
      ratio: string;
      titleFontSize: number;
      authorFontSize: number;
      titleFontWeight: number;
      authorFontWeight: number;
      titleColor: string;
      authorColor: string;
      backgroundColor: string;
      backgroundImage: any;
      backgroundSize: string;
      backgroundImageUrl: string;
      backgroundPositionX: number;
      backgroundPositionY: number;
      format: string;
    };
    nbaTeam: Team;
  }
}

@Component({
  name: "GenerateImage",
  props: {
    nbaTeam: {
      type: Object,
      required: true
    },
    slogan: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageBoxStyle(): object {
      const {
        width,
        height,
        backgroundSize,
        backgroundColor,
        backgroundImageUrl,
        backgroundPositionX,
        backgroundPositionY
      } = this.image;
      return {
        width: width + "px",
        height: height + "px",
        backgroundColor: backgroundColor,
        backgroundSize: backgroundSize,
        backgroundImage: backgroundImageUrl,
        backgroundPositionX: backgroundPositionX + "%",
        backgroundPositionY: backgroundPositionY + "%"
      };
    },
    imageTitleStyle(): object {
      const { titleColor, titleFontSize, titleFontWeight } = this.image;
      return {
        color: titleColor,
        fontWeight: titleFontWeight,
        fontSize: titleFontSize + "px"
      };
    },
    imageAuthorStyle(): object {
      const { authorColor, authorFontSize, authorFontWeight } = this.image;
      return {
        color: authorColor,
        fontWeight: authorFontWeight,
        fontSize: authorFontSize + "px"
      };
    },
    backgroundImageName(): string {
      return this.image.backgroundImage
        ? this.image.backgroundImage.name
        : "点击上传背景图片";
    }
  },
  watch: {
    nbaTeam: function(newTeam: Team) {
      this.image.name = newTeam.name + this.slogan.word;
      this.image.backgroundColor = getMainColor(newTeam.abbr).hex;
    },
    slogan: function(newSlogan) {
      this.image.name = this.nbaTeam.name + newSlogan.word;
    }
  }
})
export default class GenerateImage extends Vue {
  image: any = {
    name: this.nbaTeam.name + this.slogan.word,
    author: "王大锤",
    width: 720,
    height: 240,
    ratio: "3by1",
    titleFontSize: 32,
    authorFontSize: 16,
    titleFontWeight: 600,
    authorFontWeight: 400,
    titleColor: "#ffffff",
    authorColor: "#ffffff",
    backgroundColor: getMainColor(this.nbaTeam.abbr).hex,
    backgroundImage: null,
    backgroundSize: "auto",
    backgroundImageUrl: "",
    backgroundPositionX: 50,
    backgroundPositionY: 50,
    format: "image/png"
  };

  isGenerating: boolean = false;

  generateImage() {
    const { ratio, width, height, name, format } = this.image;
    const imageHtml: any = document.getElementById("imageHtml");

    this.isGenerating = true;

    html2canvas(imageHtml, {
      width,
      height,
      logging: false
    }).then((canvas: HTMLCanvasElement) => {
      const src = canvas.toDataURL(format);

      this.$emit("show-image-modal", {
        src,
        name,
        ratio,
        format: format.split("/")[1]
      });
      this.isGenerating = false;
    });
  }

  handleBgImageChange(event: any): void {
    const image = event.target.files[0];
    this.image.backgroundImage = image;
    this.image.backgroundImageUrl = `url(${URL.createObjectURL(image)}`;
  }
}
</script>

<style lang="scss" scoped>
// .image-canvas {
//   width: 720px;
//   height: 240px;
// }

.output-image-html {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  color: #fff;
  background-repeat: no-repeat;
  .author {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    .author-name {
      font-style: italic;
    }
  }
}
</style>

