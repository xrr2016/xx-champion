<template>
  <div class="modal image-modal" :class="{'is-active': isShow}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ image.name + '.' + image.format }}</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <p class="image">
          <img :src="image.src" :alt="image.name">
        </p>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success is-fullwidth" @click="downloadImage">下载</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "ImageModal",
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    image: {
      type: Object,
      required: true
    }
  }
})
export default class ImageModal extends Vue {
  downloadImage() {
    const link = document.createElement("a");
    link.href = this.image.src;
    link.download = this.image.name;
    link.click();
  }
  closeModal() {
    this.$emit("close-modal");
  }
}
</script>

<style lang="scss" scoped>
.image-modal {
}
</style>


