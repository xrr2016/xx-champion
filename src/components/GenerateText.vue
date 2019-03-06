<template>
  <div class="columns generate-column">
    <div class="column buttons generate-column-left">
      <a class="button is-text is-fullwidth">中文</a>
      <a class="button is-text is-fullwidth">英语</a>
      <a class="button is-text is-fullwidth">日语</a>
    </div>
    <div class="column is-three-quarters generate-column-right has-text-centered">
      <h2 class="subtitle is-2">{{ renderText }}</h2>
      <button
        class="button download-button"
        :data-clipboard-text="renderText"
        @click="handleCopyClick"
      >复制</button>
    </div>
  </div>
</template>
  <!-- data-balloon="Copied!"
          data-balloon-pos="up"
  data-balloon-visible-->

<script lang="ts">
// import translate from "google-translate-api";
import { mapState } from "vuex";
import * as ClipboardJS from "clipboard";
import { Component, Vue } from "vue-property-decorator";

// translate("Ik spreek Engels", { to: "en" })
//   .then(res => {
//     console.log(res.text);
//     //=> I speak English
//     console.log(res.from.language.iso);
//     //=> nl
//   })
//   .catch(err => {
//     console.error(err);
//   });

@Component({
  name: "GenerateText",
  computed: {
    ...mapState(["renderText"])
  },
  mounted() {
    new ClipboardJS(".button");
  }
})
export default class GenerateText extends Vue {
  isClicked: boolean = false;

  handleCopyClick() {
    this.isClicked = true;
  }
}
</script>

<style lang="scss" scoped>
</style>

