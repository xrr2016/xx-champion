<template>
  <section class="generate-text has-text-centered">
    <h2 class="subtitle is-2">{{ renderText }}</h2>
    <button
      class="button"
      data-balloon="Copied!"
      data-balloon-pos="up"
      :data-clipboard-text="renderText"
    >复制</button>
  </section>
</template>

<script lang="ts">
import { mapState } from "vuex";
import * as ClipboardJS from "clipboard";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "GenerateText",
  computed: {
    ...mapState(["renderText"])
  },
  mounted() {
    new ClipboardJS(".button");
  }
})
export default class GenerateText extends Vue {}
</script>

<style lang="scss" scoped>
.generate-text {
  margin-top: 5rem;
}
</style>

