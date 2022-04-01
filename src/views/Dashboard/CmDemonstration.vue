<template>
  <div class="demo">
    <div class="d-flex justify-content-between" >
      <div class="mx-5">
        <h5><strong>Возможности CmInput</strong></h5>
        <h6 class="mt-5">CmInput со значком</h6>
        <cm-input class="myInput" label="Место для лейбла" required="true"></cm-input>
        <h6 class="mb-3"> CmInput с лейблом</h6>
        <cm-input class="myInput" label="Место для лейбла"></cm-input>
        <h6>CmInput связанность данных</h6>
        <cm-input class="myInput" @input="qwer = $event.target.value" placeholder="Введите что-нибудь"></cm-input>
      </div>
      <div class="mx-5">
        <h5><strong>Возможности CmCard</strong></h5>
        <cm-card class="d-flex align-items-center" :width="width" :height="height">
          Связанные данные: {{ qwer }}
        </cm-card>
        <h6>Введите ширину и длину в пикселях</h6>
        <div class="d-flex justify-content-between">
          <cm-input class="w-25" label="Ширина" @input="width = $event.target.value + 'px'"></cm-input>
          <cm-input class="w-25" label="Длина" @input="height = $event.target.value + 'px'"></cm-input>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-start">
      <div class="demoButtons">
        <h5><strong>Варианты CmButton</strong></h5>
        <div ><cm-button class="myBtn w-100" to-next="true">Arrow Forward</cm-button></div>
        <div ><cm-button class="myBtn w-100" to-back="true">Arrow Backward</cm-button></div>
        <div ><cm-button class="myBtn w-100" to-next to-back :cls="'secondary'">Secondary</cm-button></div>
        <div ><cm-button class="myBtn w-100" to-next to-back :cls="'main'">Main</cm-button></div>
        <div ><cm-button class="myBtn w-100" to-next to-back :cls="'disable'">Disable</cm-button></div>
      </div>
      <div class="mx-5">
        <h5><strong>CmSelect</strong></h5>
        <CmSelect
            :select-label="'Что-то написано'"
            :options="set_1"
            @select="selectOption"
            :selected="selected"/>
        <CmSelect
            :select-label="'Что-то другое написано'"
            :options="set_2"
            @select="selectOption_2"
            :selected="selected_2"/>
        <h5><strong>CmCheckBox</strong></h5>
        <cm-check-box
          label="Показать лого"
          v-model="showLogo"
        ></cm-check-box>
        <img v-if="showLogo" src="@/assets/qoob.store.png">
      </div>
    </div>
  </div>
</template>

<script>
import CmCheckBox from "../../components/UI/inputs/CmCheckBox";
import CmInput from "../../components/UI/inputs/CmInput";
import CmCard from "../../components/UI/CmCard";
import CmButton from "../../components/UI/buttons/CmButton";
import CmSelect from "@/components/UI/СmSelect";
export default {
  name: "cmDemonstration",
  components: {CmSelect, CmInput, CmButton, CmCard,CmCheckBox},
  data() {
    return {
      width: '385px',
      height: '340px',
      qwer: 'None',
      showLogo: true,
      // For DEMO CmSelect
      selected: 'Here you must select something',
      selected_2: 'Выбрать надо бы что-то',
      set_1: [
        { name: 'One', value: 'A' },
        { name: 'Two', value: 'B' },
        { name: 'Three', value: 'C' },
        { name: 'Four', value: 'D' },
      ],
      set_2: [
        { name: 'Один', value: '1' },
        { name: 'Два', value: '2' },
        { name: 'Три', value: '3' },
        { name: 'Четыре', value: '4' },
      ],
    //  For Demo CmSelect END

    }
  },
  // methods: {
  //   makeinput(event) {
  //     this.qwer = event.target.value
  //   }
  //
  // }
  // For DEMO CmSelect
  methods: {
    selectOption(option) {
      this.selected = option.name
    },
    selectOption_2(option) {
      this.selected_2 = option.name
    }
  }
  //  For Demo CmSelect END
}
</script>

<style scoped>
.demo {
  padding: 20px;
}
.demoButtons {
  margin-left: 48px;
  margin-right: 48px;
}
.myInput {

}

.myBtn {

}

</style>
