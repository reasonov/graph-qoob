<template>
<div class="row m-3">
  <div class="col-6 p-3 pe-4">
    <h4> {{ content.title }} </h4>
    <cm-select
      class="mt-4"
      placeholder="Выберитe SMS агрегатор"
      select-label="SMS агрегатор"
      :selected="selectedSmsAggregatorName"
      :options="crmList"
      @select="selectCrm"
    ></cm-select>
    <div v-if="selectedSmsAggregatorId">
      <cm-input
        class="mt-3"
        label="Отправитель"
      ></cm-input>
      <cm-input
        v-for="(field, index) in currentFields"
        :key="index"
        :label="field"
        class="mt-3"
      ></cm-input>
      <cm-button
        cls="main"
        class="mt-3"
      >
        Подключить
      </cm-button>
    </div>
  </div>
  <div class="col-6 p-3 ps-4">
    <cm-card-base height="max-content" width="100%">
      <div class="d-flex justify-content-between">
        <div class="smsLogo" :style="{'background-image': 'url('+this.glb.getMediaUrl(content.status.img)+')'}"></div>
        <div>
          <img v-if="isActive" :src="this.glb.getMediaUrl(content.status.imgActive)" class="waLogo">
          <img v-else :src="this.glb.getMediaUrl(content.status.imgInactive)" class="waStatusIcon">
        </div>
      </div>
      <div class="d-flex mt-5">
        <div class="w-50">{{ content.status.aggregator }}</div>
        <div> не подключен</div>
      </div>
      <div class="d-flex mt-2">
        <div class="w-50">{{ content.status.status }}</div>
        <div> не активен</div>
      </div>
    </cm-card-base>
    <help-card
      width="100%"
      class="mt-4"
      :title="content.instruction.title"
      :sub-title="content.instruction.subtitle"
      :description="content.instruction.description"
    ></help-card>
  </div>
</div>
</template>

<script>
import CmInput from "@/components/UI/inputs/CmInput";
import CmButton from "@/components/UI/buttons/CmButton";
import CmSelect from "@/components/UI/СmSelect";
import HelpCard from "@/components/Dashboard/HelpCard";
import {mapState} from "vuex";
import CmCardBase from "@/components/UI/CmCardBase";
export default {
  name: "SmsSettings",
  components: {CmCardBase, HelpCard, CmSelect, CmButton, CmInput},
  data: function () {
    return {
      isActive: false,
      selectedSmsAggregatorName: "",
      selectedSmsAggregatorId: null,
      crmList: [
        {id: 1, name: "СмсАгрегатор1", fields: ["Логин", "Пароль"]},
        {id: 2, name: "СмсАгрегатор2", fields: ["Логин", "Пароль", "Таймаут"]},
        {id: 3, name: "СмсАгрегатор3", fields: ["Токен"]},
      ]
    }
  },

  computed: {
    ...mapState({
      content: state => state.texts.components.smsSettings,
    }),
    currentFields(){
      let currentCrm = this.crmList.find(el => el.id === this.selectedSmsAggregatorId)
      return currentCrm ? currentCrm.fields: []
    }
  },
  methods: {
    selectCrm(crm) {
      this.selectedSmsAggregatorId = crm.id;
      this.selectedSmsAggregatorName = crm.name;
    }
  }
}
</script>

<style scoped>
.smsLogo{
  height: 3.25rem;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
}
</style>