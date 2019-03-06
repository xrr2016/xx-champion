<template>
  <div class="home">
    <div class="field">
      <p class="control">
        <input class="input" type="text" v-model="inputTeamName" placeholder="输入队名">
      </p>
    </div>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <div class="select is-fullwidth">
            <select v-model="selectedTeam">
              <option v-for="(team, index) of teams" :key="index" :value="team">{{ team.name }}</option>
            </select>
          </div>
        </div>

        <div class="field">
          <div class="select is-fullwidth">
            <select v-model="selectedSlogan">
              <option v-for="(slogan, index) of slogans" :key="index" :value="slogan">{{ slogan }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
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
</template>

<script lang="ts">
import { mapMutations } from "vuex";
import { Component, Vue } from "vue-property-decorator";

import GenerateText from "../components/GenerateText.vue";
import GenerateImage from "../components/GenerateImage.vue";
import GenerateGif from "../components/GenerateGif.vue";

interface Type {
  selected: boolean;
  name: string;
  type: string;
}

@Component({
  components: {
    GenerateText,
    GenerateImage,
    GenerateGif
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

  methods: {
    ...mapMutations(["setRenderText"])
  }
})
export default class Home extends Vue {
  inputTeamName: string = "";
  selectedTeam: object = {};
  selectedSlogan: string = "总冠军";
  selectedGenType: object = {};
  selectedGenTypeName: string = "GenerateText";
  teams: Array<any> = [
    { name: "老鹰", abbr: "ATL" },
    { name: "篮网", abbr: "BKN" },
    { name: "凯尔特人", abbr: "BOS" },
    { name: "黄蜂", abbr: "CHA" },
    { name: "公牛", abbr: "CHI" },
    { name: "勇士", abbr: "GSW" },
    { name: "雄鹿", abbr: "MIL" },
    { name: "雷霆", abbr: "OKC" },
    { name: "鹈鹕", abbr: "NOP" },
    { name: "76人", abbr: "PHI" },
    { name: "猛龙", abbr: "TOR" },
    { name: "国王", abbr: "SAC" },
    { name: "奇才", abbr: "GSW" },
    { name: "快船", abbr: "GSW" },
    { name: "开拓者", abbr: "GSW" },
    { name: "火箭", abbr: "GSW" },
    { name: "湖人", abbr: "GSW" },
    { name: "森林狼", abbr: "GSW" },
    { name: "掘金", abbr: "GSW" },
    { name: "马刺", abbr: "GSW" },
    { name: "爵士", abbr: "GSW" },
    { name: "独行侠", abbr: "GSW" },
    { name: "步行者", abbr: "GSW" },
    { name: "太阳", abbr: "GSW" },
    { name: "魔术", abbr: "GSW" },
    { name: "尼克斯", abbr: "GSW" },
    { name: "热火", abbr: "GSW" },
    { name: "骑士", abbr: "GSW" },
    { name: "灰熊", abbr: "GSW" }
  ];
  slogans: Array<string> = ["总冠军", "一轮游"];
  types: Array<Type> = [
    { selected: true, name: "文字", type: "GenerateText" },
    { selected: false, name: "图片", type: "GenerateImage" },
    { selected: false, name: "GIF", type: "GenerateGif" }
  ];

  mounted() {
    const team0 = this.teams[0];
    this.selectedTeam = team0;
    this.inputTeamName = team0.name;
    this.setRenderText(team0.name + "总冠军!");
  }

  changeGenerateType(type: Type): void {
    this.types.forEach(t => (t.selected = false));
    type.selected = true;
    this.selectedGenType = type;
    this.selectedGenTypeName = type.type;
  }
}
</script>

<style lang="scss" scoped>
.home {
  flex: 1;
  display: flex;
  flex-flow: column wrap;
}
</style>

