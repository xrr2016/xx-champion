<template>
  <div class="modal image-modal" :class="{'is-active': isShow}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ modalImage.name + '.' + modalImage.format }}</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <p class="image">
          <img :src="modalImage.src" :alt="modalImage.name">
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

declare module "vue/types/vue" {
  interface Vue {
    modalImage: {
      src: string;
      name: string;
    };
  }
}

@Component({
  name: "ImageModal",
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    modalImage: {
      type: Object,
      required: true
    }
  }
})
export default class ImageModal extends Vue {
  downloadImage() {
    const link = document.createElement("a");
    link.href = this.modalImage.src;
    link.download = this.modalImage.name;
    link.click();
  }
  closeModal() {
    this.$emit("close-modal");
  }
}
</script>

<style lang="scss" scoped>
</style>


