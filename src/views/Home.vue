<template>
  <div class="home">
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
              <option
                v-for="(slogan, index) of slogans"
                :key="index"
                :value="slogan"
              >{{ slogan.word }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs is-fullwidth">
      <ul>
        <li
          :key="index"
          v-for="(type, index) of types"
          :class="{'is-active': type.selected}"
          @click="changeGenerateType(type)"
        >
          <a>{{ type.text }}</a>
        </li>
      </ul>
    </div>

    <transition name="slide">
      <keep-alive :max="3">
        <GenerateText
          v-if="selectedType === types[0]"
          :team="selectedTeam"
          :slogan="selectedSlogan"
        />
        <GenerateImage
          v-else-if="selectedType === types[1]"
          :nbaTeam="selectedTeam"
          :slogan="selectedSlogan"
          @show-image-modal="showImageModal"
        />
        <GenerateGif
          v-else-if="selectedType === types[2]"
          :team="selectedTeam"
          :slogan="selectedSlogan"
          @show-image-modal="showImageModal"
        />
      </keep-alive>
    </transition>

    <ImageModal
      :is-show="isShowImageModal"
      :modalImage="modalImage"
      @close-modal="closeImageModal"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GenerateText from "../components/GenerateText.vue";
import GenerateImage from "../components/GenerateImage.vue";
import GenerateGif from "../components/GenerateGif.vue";
import ImageModal from "../components/ImageModal.vue";
import { types, teams, slogans, Team, Slogan, Type } from "../models/index";

declare module "vue/types/vue" {
  interface Vue {
    selectedTeam: {
      name: string;
    };
    selectedSlogan: {
      word: string;
    };
  }
}

@Component({
  components: {
    GenerateText,
    GenerateImage,
    GenerateGif,
    ImageModal
  },
  computed: {
    renderText(): string {
      return this.selectedTeam.name + this.selectedSlogan.word;
    }
  }
})
export default class Home extends Vue {
  types: Array<Type> = types;
  teams: Array<Team> = teams;
  slogans: Array<Slogan> = slogans;

  selectedType: Type = types[0];
  selectedTeam: Team = teams[0];
  selectedSlogan: Slogan = slogans[0];

  modalImage = {
    src: "",
    name: "",
    ratio: ""
  };
  isShowImageModal: boolean = false;

  changeGenerateType(type: Type): void {
    this.types.forEach(t => (t.selected = false));
    type.selected = true;
    this.selectedType = type;
  }

  showImageModal(data: any) {
    this.modalImage = data;
    this.isShowImageModal = true;
  }

  closeImageModal() {
    this.modalImage = {
      src: "",
      name: "",
      ratio: ""
    };
    this.isShowImageModal = false;
  }
}
</script>

<style lang="scss" scoped>
.home {
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  .tabs {
    margin-bottom: 0.75rem;
  }
}
</style>

