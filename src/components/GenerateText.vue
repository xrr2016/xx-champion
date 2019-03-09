<template>
  <div class="columns generate-column">
    <div class="column generate-column-left">
      <a
        class="button is-text is-fullwidth"
        v-for="(item, index) of languages"
        :key="index"
        @click="handleButtonClick(item)"
      >{{ item.text }}</a>
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

import translate from "../api/translate";

declare module "vue/types/vue" {
  interface Vue {
    team: {
      src: string;
      name: string;
    };
    slogan: {
      word: string;
    };
    renderText: string;
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
  languages: Array<object> = [
    {
      text: "中文",
      lan: "zh"
    },
    {
      text: "英语",
      lan: "en"
    },
    {
      text: "日语",
      lan: "jp"
    },
    {
      text: "西班牙语",
      lan: "spa"
    },
    {
      text: "法语",
      lan: "fra"
    },
    {
      text: "韩语",
      lan: "kor"
    }
  ];

  isTranslating: boolean = false;

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

  handleButtonClick(item: any) {
    if (item.lan === "zh") {
      return;
    }
    this.isTranslating = true;
    const query = this.renderText;
    translate(query, "zh", item.lan)
      .then(res => {
        console.log("res :", res);
      })
      .catch(err => {
        console.error(err);
      });
  }
}
</script>

<style lang="scss" scoped>
.render-text {
  text-decoration: underline dotted;
}
</style>


