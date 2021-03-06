<template>
  <div class="columns generate-column">
    <div class="column generate-column-left">
      <div class="fields">
        <div class="field">
          <input
            class="input has-text-centered"
            ref="renderTextInput"
            type="text"
            v-model="renderText"
          >
        </div>

        <div
          class="field has-addons"
          v-for="(item, index) of languages"
          :key="index"
          @click="handleButtonClick(item, index)"
        >
          <p class="control is-expanded">
            <a
              class="button is-white is-fullwidth"
              :disabled="isTranslating"
              title="点击翻译"
            >{{ item.text }}</a>
          </p>
          <!-- <p class="control">
            <button class="button is-white" :class="{'is-loading': isTranslating}"></button>
          </p>-->
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
import Noty from "noty";
import ClipboardJS from "clipboard";
import localforage from "localforage";
import { Component, Vue } from "vue-property-decorator";

import translate from "../api/translate";
import { Team, Slogan, Language, languages } from "../models/index";

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
    // const input = this.$refs.renderTextInput as HTMLInputElement;
    // input.focus();

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
    renderTranslateTimes(): string {
      return `${this.translateTimes.current} / ${this.translateTimes.total}`;
    }
  },
  watch: {
    team: function(newVal) {
      this.renderText = newVal.name + this.slogan.word;
    },
    slogan: function(newVal) {
      this.renderText = this.team.name + newVal.word;
    }
  }
})
export default class GenerateText extends Vue {
  isTranslating: boolean = false;
  languages: Array<Language> = languages;
  translateTimes: any = {
    current: 0,
    total: 60,
    date: new Date().toLocaleDateString()
  };
  renderText: string = this.team.name + this.slogan.word;

  handleButtonClick(item: Language, index: number) {
    if (this.isTranslating) {
      return;
    }

    if (this.translateTimes.current >= this.translateTimes.total) {
      new Noty({
        timeout: 1000,
        theme: "nest",
        type: "warning",
        layout: "topCenter",
        text: "今日使用次数已用完"
      }).show();
      return;
    }

    this.isTranslating = true;
    const query = this.renderText;

    translate(query, "zh", item.lan)
      .then(data => {
        const { trans_result } = data;
        if (!trans_result) {
          return;
        }
        this.languages[index] = {
          ...item,
          translated: true,
          result: trans_result[0]["dst"]
        };
        this.translateTimes.current += 1;
        localforage.setItem("translateTimes", this.translateTimes);
      })
      .catch(err => {
        new Noty({
          timeout: 1000,
          theme: "nest",
          type: "warning",
          layout: "topCenter",
          text: "翻译失败，请重试"
        }).show();
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


