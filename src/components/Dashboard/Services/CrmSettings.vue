<template>
<div class="row m-3">
  <div class="col colPadding">
    <h4 class="mb-4">Подключение к CRM</h4>
    <cm-select
      select-label="CRM"
      placeholder="Выберите CRM систему"
      :selected="selectedCrmName"
      :options="crms"
      @select="selectCrm"
      class="mb-3"
    ></cm-select>
    <cm-input
      :label="'Логин'"
    ></cm-input>
    <cm-input
      :label="'Пароль'"
    ></cm-input>
    <cm-check-box
      class="mt-4"
      :label="'Я даю согласие на подключеине к “Название CRM”'"
      :check-description="''"
    ></cm-check-box>
    <div class="mb-5 mt-3"><cm-button cls="main">Подключить</cm-button></div>
    <h4 class="mt-5 pt-4">Ключ авторизации для yclients</h4>
    <p class="fs-16 mt-4">Перед вами ключ авторизации, скопируйте его и вставьте в соответсвующее поле в вашей crm. Что бы узнать подробнее читайте — помощь по разделу.</p>
    <div class="inputWithBtn mt-5">
      <label>Ключ авторизации для yclients</label>
      <div class="d-flex ">
        <div class="w-100">
          <input type="text" placeholder="3293—3321—9543—4534">
        </div>
        <div class="inputBtn"><div>Удалить</div></div>
      </div>
    </div>
  </div>
  <div class="col-status px-3 ps-4">
    <cm-card-base height="18.75rem">
      <div class="crmLogo" :style="{'background-image': 'url('+require('@/assets/yclients-logo.svg')+')'}"></div>
      <hr>
      <div class="d-flex justify-content-between crmStatuses">
        <div class="d-flex align-items-end ">
          <div>
            <div>Ваш аккаунт ID  -</div>
            <div>Оплачен до  -</div>
            <div>Статус  Не активен</div>
          </div>
        </div>
        <div class="d-flex align-items-end">
          <div class="crmStatusPic" :style="{'background-image': 'url('+require('@/assets/tick-circle-y.svg')+')'}"></div>
        </div>
      </div>
    </cm-card-base>
    <help-card
      class="mt-4"
      :title="'Помощь по разделу'"
      :sub-title="'Инструкция для получения ключа авторизации сервиса yclients.'"
      :description="'Являясь всего лишь частью общей картины, предприниматели в сети интернет лишь добавляют фракционных разногласий и указаны как претенденты на роль ключевых факторов.'"
    ></help-card>
  </div>
</div>
</template>

<script>
import CmInput from "@/components/UI/inputs/CmInput";
import CmCheckBox from "@/components/UI/inputs/CmCheckBox";
import CmButton from "@/components/UI/buttons/CmButton";
import HelpCard from "@/components/Dashboard/HelpCard";
import CmCardBase from "@/components/UI/CmCardBase";
import CmSelect from "@/components/UI/СmSelect";
export default {
name: "CrmSettings",
  components: {CmSelect, CmCardBase, HelpCard, CmButton, CmCheckBox, CmInput},
  data: function (){
    return{
      selectedCrmName: '',
      selectedCrmId:'',
      crms: [
        {value:1, name: 'yclients'}
      ]
    }
  },
  methods: {
    selectCrm(crm) {
      this.selectedCrmName = crm.name;
      this.selectedCrmId = crm.value;
    }
  }
}
</script>

<style scoped>
.colPadding{
  padding-left: 1rem;
  padding-right: 2.2rem;
}
.crmLogo{
  height: 2.75rem;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
}
.crmStatusPic {
  height: 5rem;
  width: 5rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.crmStatuses{
  height: calc(100% - 4.5rem);
  font-size: 0.875rem;
  line-height: 1.875rem;
}
hr {
  color: #c1c1c1;
}
.col-status{
  flex: 0 0 auto;
  width: 48%;
}
</style>