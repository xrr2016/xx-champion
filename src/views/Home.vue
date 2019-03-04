<template>
  <main class="home">
    <section class="hero is-dark is-bold has-text-centered home-hero">
      <div class="hero-body is-unselectable">
        <div class="container">
          <h1 class="title is-uppercase">XXChampion</h1>
          <h2 class="subtitle">Hero subtitle</h2>
        </div>
      </div>
    </section>

    <section class="section home-section">
      <div class="container teams">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" type="text" v-model="inputTeamName" placeholder="输入队名">
              </p>
            </div>

            <div class="field">
              <div class="select is-fullwidth">
                <select v-model="selectedTeam">
                  <option v-for="(team, index) of teams" :key="index" :value="team">{{ team.name }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container box contents">
        <div class="tabs is-fullwidth">
          <ul>
            <li
              v-for="(type, index) of types"
              :class="{'is-active': type.selected}"
              :key="index"
              @click="changeGenerateType(type)"
            >
              <a>{{ type.name }}</a>
            </li>
          </ul>
        </div>
        <keep-alive>
          <component v-bind:is="selectedGenTypeName"></component>
        </keep-alive>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
import { Component, Vue } from "vue-property-decorator";

import GenerateText from "../components/GenerateText.vue";
import GenerateImage from "../components/GenerateImage.vue";
import GenerateGif from "../components/GenerateGif.vue";

@Component({
  components: {
    GenerateText,
    GenerateImage,
    GenerateGif
  },
  data() {
    return {
      inputTeamName: "",
      selectedTeam: null,
      selectedGenType: null,
      selectedGenTypeName: "GenerateText",
      teams: [
        { selected: false, name: "勇士", abbr: "GSW" },
        { selected: false, name: "雄鹿", abbr: "MIL" },
        { selected: false, name: "雷霆", abbr: "OKC" },
        { selected: false, name: "鹈鹕", abbr: "GSW" },
        { selected: false, name: "76人", abbr: "GSW" },
        { selected: false, name: "猛龙", abbr: "GSW" },
        { selected: false, name: "国王", abbr: "GSW" },
        { selected: false, name: "奇才", abbr: "GSW" },
        { selected: false, name: "快船", abbr: "GSW" },
        { selected: false, name: "开拓者", abbr: "GSW" },
        { selected: false, name: "火箭", abbr: "GSW" },
        { selected: false, name: "湖人", abbr: "GSW" },
        { selected: false, name: "森林狼", abbr: "GSW" },
        { selected: false, name: "掘金", abbr: "GSW" },
        { selected: false, name: "凯尔特人", abbr: "GSW" },
        { selected: false, name: "马刺", abbr: "GSW" },
        { selected: false, name: "篮网", abbr: "GSW" },
        { selected: false, name: "老鹰", abbr: "GSW" },
        { selected: false, name: "黄蜂", abbr: "GSW" },
        { selected: false, name: "爵士", abbr: "GSW" },
        { selected: false, name: "独行侠", abbr: "GSW" },
        { selected: false, name: "步行者", abbr: "GSW" },
        { selected: false, name: "太阳", abbr: "GSW" },
        { selected: false, name: "魔术", abbr: "GSW" },
        { selected: false, name: "尼克斯", abbr: "GSW" },
        { selected: false, name: "热火", abbr: "GSW" },
        { selected: false, name: "公牛", abbr: "GSW" },
        { selected: false, name: "骑士", abbr: "GSW" },
        { selected: false, name: "灰熊", abbr: "GSW" }
      ],
      types: [
        { selected: true, name: "文字", type: "GenerateText" },
        { selected: false, name: "图片", type: "GenerateImage" },
        { selected: false, name: "GIF", type: "GenerateGif" }
      ]
    };
  },
  watch: {
    inputTeamName: function(newVal) {
      this.setRenderText(newVal + "总冠军!");
    },
    selectedTeam: function(newVal) {
      this.inputTeamName = newVal.name;
      this.setRenderText(newVal.name + "总冠军!");
    }
  },
  mounted() {
    const team0 = this.teams[0];
    this.selectedTeam = team0;
    this.inputTeamName = team0.name;
    this.setRenderText(team0.name + "总冠军!");
  },
  methods: {
    ...mapMutations(["setRenderText"]),
    changeGenerateType(type): void {
      this.types.forEach(t => (t.selected = false));
      type.selected = true;
      this.selectedGenType = type;
      this.selectedGenTypeName = type.type;
    }
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  .home-hero {
    .hero-body {
      padding: 1.5rem;
    }
  }
  .home-section {
    display: flex;
    flex-flow: column wrap;
    padding-top: 1.5rem;
    min-height: calc(100vh - 113px);
    .teams {
      margin-bottom: 1.5rem;
    }
    .contents {
      flex: 1;
      padding-top: 0;
    }
  }
}
</style>

