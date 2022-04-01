<template>
  <div class="mt-4">
    <hr>
    <h6 class="contactTitle fw-500">Контакт <span class="ms-1" v-if="isSelectedPosition">"{{ selectedPosition }}"</span></h6>
    <CmInput
      v-model="contactPhone"
      :label="text.phoneText"
    ></CmInput>
    <cm-select
      select-label="Должность"
      placeholder="Выберете должность"
      :options="positions"
      :selected="selectedPosition"
      @select="updatePosition"
      class="mb-4"
    ></cm-select>
    <cm-check-box v-model="contact.warnings" :label="text.noticesTexts.text1" check-description=""></cm-check-box>
    <cm-check-box v-model="contact.news" :label="text.noticesTexts.text2" check-description=""></cm-check-box>
    <cm-check-box v-model="contact.license" :label="text.noticesTexts.text3" check-description=""></cm-check-box>
    <div class="d-flex mt-4">
      <cm-button v-if="!last" @click="deleteContact" cls="secondary" class="me-4">Удалить контакт</cm-button>
      <cm-button v-else>Добавить новый контакт</cm-button>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import CmInput from "../../../components/UI/inputs/CmInput";
import CmCheckBox from "../../../components/UI/inputs/CmCheckBox";
import CmSelect from "@/components/UI/СmSelect";
import CmButton from "@/components/UI/buttons/CmButton";

export default {
  name: "PersonalAreaContact",
  props: {
    contactProp: {
      type: Object,
    },
    last: {
      type: Boolean,
      required: false
    }
  },
  components: {CmButton, CmSelect, CmInput, CmCheckBox},
  data: function (){
    return {
      contact: {
          position: {name:'Не выбран'},
          phone: '+7 ... ... .. ..',
          warnings: false,
          news: false,
          license: false,
      },
      isSelectedPosition: false,
      contactPhone: '',
      contactWarnings: false,
      contactNews: false,
      contactLicense: false,
      selectedPosition: '',
      positions: [{name: 'Администратор', value: 1}, {name: 'Уборщица', value: 2}],
    }
  },
  mounted() {
    if (this.contactProp){
      this.contact = this.contactProp;
      this.selectedPosition = this.contact.position.name;
      this.isSelectedPosition = true;
      this.contactPhone = this.contact.phone;
      this.contactWarnings = this.contact.warnings;
      this.contactNews = this.contact.news;
      this.contactLicense = this.contact.license;
    }
  },
  computed: {
    ...mapState({
      text: state => state.texts.dashboard.personalArea.contact,
    }),
  },
  methods: {
    updatePosition(value){
      this.selectedPosition = value.name;
      this.isSelectedPosition = true;
    },
    deleteContact(){
      this.$emit('delete');
    }
  }

}
</script>

<style scoped>
hr {
  color: #d4d4d4;
}
.contactTitle{
  margin-top: 2.3rem;
}
</style>