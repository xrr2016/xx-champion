<template>
  <li class="card field gif-frame">
    <div class="image-cover" :style="imageStyle" v-show="isImageLoading"></div>
    <div class="card-image frame" :id="frame.id">
      <figure class="image">
        <img :style="imageStyle" :src="frame.image" @load="onImageLoad">
      </figure>
      <h4 class="subtitle is-4" :style="subtitleStyle">{{ frame.subtitle }}</h4>
    </div>
    <div class="card-content">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">{{ frameIndex + 1}}</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="输入台词" v-model="frame.subtitle">
        </p>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "GifFrame",
  props: {
    frameIndex: {
      type: Number,
      required: true
    },
    frame: {
      type: Object,
      required: true
    },
    imageStyle: {
      type: Object,
      required: true
    },
    subtitleStyle: {
      type: Object,
      required: true
    }
  }
})
export default class GifFrame extends Vue {
  isImageLoading: boolean = true;

  onImageLoad() {
    this.isImageLoading = false;
  }
}
</script>

<style lang="scss" scoped>
.gif-frame {
  position: relative;
  .image-cover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  }
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

// @keyframes skeleton-loading {
//   0% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0 50%;
//   }
// }
</style>


