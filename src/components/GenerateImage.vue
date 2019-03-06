<template>
  <div class="columns generate-column">
    <div class="column generate-column-left">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">图片名称</a>
              </p>
              <p class="control is-expanded">
                <input class="input" type="text" v-model="image.name">
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">作者名称</a>
              </p>
              <p class="control is-expanded">
                <input class="input" type="text" v-model="image.author">
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">图片宽度</a>
              </p>
              <p class="control is-expanded">
                <input
                  class="input"
                  type="number"
                  max="1080"
                  min="360"
                  step="10"
                  v-model="image.width"
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">图片高度</a>
              </p>
              <p class="control is-expanded">
                <input
                  class="input"
                  type="number"
                  max="960"
                  min="240"
                  step="10"
                  v-model="image.height"
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">图片宽高比</a>
              </p>
              <div class="select is-fullwidth">
                <select v-model="image.format">
                  <option value="image/png">image/png</option>
                  <option value="image/jpeg">image/jpeg</option>
                  <option value="image/webp">image/webp</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">标题字体大小</a>
              </p>
              <p class="control is-expanded">
                <input class="input" type="number" max="48" min="16" v-model="image.titleFontSize">
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">作者字体大小</a>
              </p>
              <p class="control is-expanded">
                <input class="input" type="number" max="24" min="12" v-model="image.authorFontSize">
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
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
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
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
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">标题字体颜色</a>
              </p>
              <p class="control is-expanded">
                <input class="input" type="color" v-model="image.titleColor">
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">作者字体颜色</a>
              </p>
              <p class="control is-expanded">
                <input class="input" type="color" v-model="image.authorColor">
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">图片背景颜色</a>
              </p>
              <p class="control is-expanded">
                <input class="input" type="color" v-model="image.backgroundColor">
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">下载图片格式</a>
              </p>
              <div class="select is-fullwidth">
                <select v-model="image.format">
                  <option value="image/png">image/png</option>
                  <option value="image/jpeg">image/jpeg</option>
                  <option value="image/webp">image/webp</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field file has-name is-fullwidth">
        <label class="file-label">
          <input
            class="file-input"
            id="bgImage"
            type="file"
            accept=".jpg, .jpeg, .png, .webp"
            name="bgImage"
            @change="handleBgImageChange"
          >
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            背景图片
          </span>
          <span class="file-name">{{ backgroundImageName }}</span>
        </label>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">背景图片尺寸</a>
              </p>
              <div class="select is-fullwidth">
                <select v-model="image.backgroundSize">
                  <option value="auto">auto</option>
                  <option value="cover">cover</option>
                  <option value="contain">contain</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">背景图片横轴位置</a>
              </p>
              <p class="control is-expanded">
                <input class="input" type="number" step="1" v-model="image.backgroundPositionX">
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">背景图片纵轴位置</a>
              </p>
              <p class="control is-expanded">
                <input class="input" type="number" step="1" v-model="image.backgroundPositionY">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="column is-three-quarters generate-column-right">
      <article
        class="content box is-unselectable output-image-html"
        ref="imageHtml"
        :style="imageBoxStyle"
      >
        <h3 class="title is-3 is-spaced" :style="imageTitleStyle">{{ renderText }}</h3>
        <p class="author" :style="imageAuthorStyle">
          author:
          <span class="author-name">{{ image.author }}</span>
        </p>
      </article>

      <button
        class="button download-button"
        :class="{ 'is-loading': isGenerating }"
        :disabled="isGenerating"
        @click="downloadImage"
      >生成</button>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import html2canvas from "html2canvas";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "GenerateImage",
  computed: {
    ...mapState(["renderText"]),
    imageBoxStyle(): object {
      return {
        width: this.image.width + "px",
        height: this.image.height + "px",
        backgroundColor: this.image.backgroundColor,
        backgroundSize: this.image.backgroundSize,
        backgroundImage: this.image.backgroundImageUrl,
        backgroundPositionX: this.image.backgroundPositionX + "%",
        backgroundPositionY: this.image.backgroundPositionY + "%"
      };
    },
    imageTitleStyle(): object {
      return {
        color: this.image.titleColor,
        fontWeight: this.image.titleFontWeight,
        fontSize: this.image.titleFontSize + "px"
      };
    },
    imageAuthorStyle(): object {
      return {
        color: this.image.authorColor,
        fontWeight: this.image.authorFontWeight,
        fontSize: this.image.authorFontSize + "px"
      };
    },
    backgroundImageName(): string {
      return this.image.backgroundImage
        ? this.image.backgroundImage.name
        : "点击上传背景图片";
    }
  },
  mounted() {
    this.image.name = this.renderText;
  }
})
export default class GenerateImage extends Vue {
  image: any = {
    name: "",
    author: "王大锤",
    width: 720,
    height: 240,
    titleFontSize: 32,
    authorFontSize: 16,
    titleFontWeight: 600,
    authorFontWeight: 400,
    titleColor: "#ffffff",
    authorColor: "#ffffff",
    backgroundColor: "#ffdd57",
    backgroundImage: null,
    backgroundSize: "auto",
    backgroundImageUrl: "",
    backgroundPositionX: 50,
    backgroundPositionY: 50,
    format: "image/png"
  };
  isGenerating: boolean = false;

  downloadImage(): void {
    const self = this;
    this.isGenerating = true;

    html2canvas(this.$refs.imageHtml).then(canvas => {
      canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.href = url;
        a.download = self.renderText;
        a.click();
        self.isGenerating = false;
      }, self.image.format);
    });
  }

  handleBgImageChange(): void {
    const bgInput: HTMLInputElement = document.getElementById("bgImage");
    const image = bgInput.files[0];
    this.image.backgroundImage = image;
    this.image.backgroundImageUrl = `url(${URL.createObjectURL(image)}`;
    console.log(this.image.backgroundImageUrl);
  }
}
</script>

<style lang="scss" scoped>
.output-image-html {
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 720px;
  height: 240px;
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

