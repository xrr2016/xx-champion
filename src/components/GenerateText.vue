<template>
  <div class="columns generate-column">
    <div class="column generate-column-left">
      <a class="button is-text is-fullwidth">中文</a>
      <a class="button is-text is-fullwidth">英语</a>
      <a class="button is-text is-fullwidth">日语</a>
    </div>
    <div class="column is-three-quarters generate-column-right">
      <h3 class="subtitle is-3 render-text">{{ renderText }}</h3>
      <button
        class="button is-info is-outlined generate-button"
        :data-clipboard-text="renderText"
        @click="handleCopyClick"
        ref="copyButton"
      >复制</button>
    </div>
  </div>
</template>

<script lang="ts">
import ClipboardJS from "clipboard";
import { Component, Vue } from "vue-property-decorator";
import { Team, Slogan } from "../models/index";

declare module "vue/types/vue" {
  interface Vue {
    team: {
      src: string;
      name: string;
    };
    slogan: {
      word: string;
    };
  }
}

@Component({
  name: "GenerateText",
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
  mounted() {
    new ClipboardJS(".button");
  },
  computed: {
    renderText(): string {
      return this.team.name + this.slogan.word;
    }
  }
})
export default class GenerateText extends Vue {
  handleCopyClick() {
    const button: any = this.$refs.copyButton;
    button.setAttribute("data-balloon", "Copied!");
    button.setAttribute("data-balloon-pos", "up");

    const timeout = setTimeout(() => {
      button.removeAttribute("data-balloon");
      button.removeAttribute("data-balloon-pos");
      clearTimeout(timeout);
    }, 5000);
  }

  handleLanguageClick() {
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
  }
}
</script>

<style lang="scss" scoped>
.render-text {
  text-decoration: underline dotted;
}
</style>


