<template>
<div>
  <cm-card
    height="100%"
  >
    <div class="d-flex justify-content-between">
      <div :style="{'background-image': 'url('+require('@/assets/whatsappLogo.png')+')'}" class="servicesWhatsappLogo"></div>
      <div>
        <cm-switch
          lg
          :check="active"
          v-model="active"
          @click="toggle"
        ></cm-switch>
      </div>
    </div>
    <div class="d-flex align-items-center h-100 servicesMiniText fs-14">
      <div>
        <div>{{ content.accId }} {{ WhatsAppAccId }}</div>
        <div>{{ content.expiry }} {{ WhatsAppAccExpiry }}</div>
      </div>
    </div>
  </cm-card>
  <side-popup ref="whatsAppSettings">
    <whats-app-settings></whats-app-settings>
  </side-popup>
</div>
</template>

<script>
import CmCard from "@/components/UI/CmCard";
import CmSwitch from "@/components/UI/inputs/СmSwitch";
import WhatsAppSettings from "@/components/Dashboard/Services/WhatsAppSettings";
import SidePopup from "@/components/UI/SidePopup";
import {mapState} from "vuex";
export default {
name: "ServicesWhatsApp",
  components: {SidePopup, WhatsAppSettings, CmCard, CmSwitch},
  data: function (){
    return {
      active: false,
      WhatsAppAccId: "6546473",
      WhatsAppAccExpiry: "05.05.2022",
    }
  },
  computed: {
    ...mapState({
      content: state => state.texts.dashboard.services.whatsApp,
    }),
  },
  watch: {
    active(){
      if (this.active) {
        this.WhatsAppAccId = "6546473";
        this.WhatsAppAccExpiry = "05.05.2022";
      } else {
        this.WhatsAppAccId = "-";
        this.WhatsAppAccExpiry = "-";
      }
    }
  },
  methods: {
    toggle(){
      if (this.active) {
        this.WhatsAppAccId = "6546473";
        this.WhatsAppAccExpiry = "05.05.2022";
      } else {
        this.$refs.whatsAppSettings.open();
      }
    }
  }
}
</script>

<style scoped>
.servicesWhatsappLogo{
  height: 1.75rem;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
}
.servicesMiniText {
  font-size: 0.875rem;
}
</style>