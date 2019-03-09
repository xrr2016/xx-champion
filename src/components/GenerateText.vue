<template>
  <div class="columns generate-column">
    <div class="column generate-column-left">
      <div class="fields">
        <div class="field has-addons">
          <a class="button is-white is-fullwidth">中文</a>
          <button class="button" disabled>翻译</button>
        </div>
        <div
          class="field has-addons"
          v-for="(item, index) of languages"
          :key="index"
          @click="handleButtonClick(item, index)"
        >
          <a class="button is-white is-fullwidth">{{ item.text }}</a>
          <button class="button" :class="{'is-loading': isTranslating}" :disabled="isTranslating">翻译</button>
        </div>
      </div>

      <a class="button is-white is-small is-fullwidth">{{ renderTranslateTimes }}</a>
    </div>
    <div class="column is-three-quarters generate-column-right">
      <p
        class="button is-text field is-fullwidth copy-button"
        :data-clipboard-text="renderText"
        @click="handleCopyClick"
      >{{ renderText }}</p>
      <p
        class="button is-text field is-fullwidth copy-button"
        title="点击复制"
        v-for="(item, index) of languages"
        :data-clipboard-text="item.result"
        :key="index"
        @click="handleCopyClick"
      >{{ item.result }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import ClipboardJS from "clipboard";
import { Component, Vue } from "vue-property-decorator";
import { Team, Slogan, Language, languages } from "../models/index";
import localforage from "localforage";

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
    isTranslating: boolean;
    translateTimes: any;
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
    new ClipboardJS(".copy-button");
    localforage.getItem("translateTimes").then((value: any) => {
      if (value) {
        const { date: lastDate } = value;
        const date = new Date().toLocaleDateString();

        if (date === lastDate) {
          this.translateTimes = value;
        } else {
          localforage.setItem("translateTimes", this.translateTimes);
        }
      } else {
        localforage.setItem("translateTimes", this.translateTimes);
      }
    });
  },
  computed: {
    renderText(): string {
      return this.team.name + this.slogan.word;
    },
    renderTranslateTimes(): string {
      return `${this.translateTimes.current} / ${this.translateTimes.total}`;
    }
  }
})
export default class GenerateText extends Vue {
  isTranslating: boolean = false;
  languages: Array<Language> = languages;
  translateTimes: any = {
    current: 0,
    total: 30,
    date: new Date().toLocaleDateString()
  };

  handleButtonClick(item: Language, index: number) {
    if (this.isTranslating) {
      return;
    }

    if (this.translateTimes.current >= this.translateTimes.total) {
      return;
    }

    this.isTranslating = true;
    const query = this.renderText;

    translate(query, "zh", item.lan)
      .then(data => {
        const { trans_result } = data;
        this.languages[index] = {
          ...item,
          translated: true,
          result: trans_result[0]["dst"]
        };
        this.translateTimes.current += 1;
        localforage.setItem("translateTimes", this.translateTimes);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        this.isTranslating = false;
      });
  }

  handleCopyClick(event: any) {
    const target = event.target;
    if (!target.innerText) {
      return;
    }
    target.setAttribute("data-balloon", "Copied!");
    target.setAttribute("data-balloon-pos", "bottom");

    const timeout = setTimeout(() => {
      target.removeAttribute("data-balloon");
      target.removeAttribute("data-balloon-pos");
      clearTimeout(timeout);
    }, 4000);
  }
}
</script>

<style lang="scss" scoped>
.generate-column-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .fields {
    flex: 1;
  }
}
.render-text {
  text-decoration: underline dotted;
}
</style>


