<template>
<div>
  <cm-card
    height="100%"
  >
    <div class="d-flex justify-content-between">
      <div class="servicesSmsLogo" :style="{'background-image': 'url('+require('@/assets/sms.svg')+')'}"></div>
      <div>
        <cm-switch
          lg
          v-model="active"
          @click="$refs.sidepopup.open()"
        ></cm-switch>
      </div>
    </div>
    <div class="servicesSmsContent fs-14">
      <div class="w-100">
        <div class="row">
          <div class="col-5">Агрегатор</div>
          <div class="col-7">{{ SmsAgregatorOn }}</div>
         </div>
         <div class="row">
          <div class="col-5">Статус</div>
          <div class="col-7">{{ SmsAgregatorStatus }}</div>
         </div>
      </div>
    </div>
  </cm-card>
  <side-popup ref="sidepopup">
    <sms-settings></sms-settings>
  </side-popup>
</div>
</template>

<script>
import CmCard from "@/components/UI/CmCard";
import CmSwitch from "@/components/UI/inputs/СmSwitch";
import SidePopup from "@/components/UI/SidePopup";
import SmsSettings from "@/components/Dashboard/Services/SmsSettings";
export default {
name: "ServicesSms",
  components: {SmsSettings, SidePopup, CmCard, CmSwitch},
  data: function (){
    return {
      active: false,
      SmsAgregatorOn: "Не подключено",
      SmsAgregatorStatus: "Не активен",
    }
  },
  watch: {
    active(){
      if (this.active) {
        this.SmsAgregatorOn = "Подключено";
        this.SmsAgregatorStatus = "Активен";
      } else {
        this.SmsAgregatorOn = "Не подключено";
        this.SmsAgregatorStatus = "Не активен";
      }
    }
  },
}
</script>

<style scoped>
.servicesSmsContent{
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 0.875rem;
}
.servicesSmsLogo{
  height: 2rem;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
}
</style>