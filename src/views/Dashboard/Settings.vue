<template>
  <div class="settingsContainer col mt-4">
    <h3 class="settingsHeader">Настройки подключаемых сервисов qoob.store</h3>
    <p class="settingsSubHeader">Являясь всего лишь частью общей картины, предприниматели в сети интернет лишь добавляют<br> фракционных разногласий и указаны как претенденты на роль ключевых факторов.</p>
    <settings-item
      v-for="(service, index) in content.services"
      :key="index"
      :service="service"
      @btn-click="openSettings(service.name)"
    ></settings-item>
    <side-popup ref="sidepopup">
      <component :is="currentComponent"></component>
    </side-popup>
  </div>
  <div class="col-4 col-4-custom blank"></div>
</template>

<script>
import SidePopup from "../../components/UI/SidePopup";
import {mapState} from "vuex";
import SettingsItem from "@/components/Dashboard/Settings/SettingsItem";
import CrmSettings from "@/components/Dashboard/Services/CrmSettings";
import WhatsAppSettings from "@/components/Dashboard/Services/WhatsAppSettings";
import SmsSettings from "@/components/Dashboard/Services/SmsSettings";
export default {
  name: "Settings",
  components: {
    SettingsItem,
    SidePopup,
    CrmSettings,
    WhatsAppSettings,
    SmsSettings,
  },
  data() {
    return {
      currentComponent: null,
    }
  },
  computed: {
    ...mapState({
      content: state => state.texts.dashboard.settings,
    }),
  },
  methods: {
    openSettings(serviceName){
      if (serviceName === 'crm'){
        this.currentComponent = CrmSettings;
      } else if (serviceName === 'whatsapp'){
        this.currentComponent = WhatsAppSettings;
      } else if (serviceName === 'sms'){
        this.currentComponent = SmsSettings;
      } else {
        this.currentComponent = null;
      }
      this.$refs.sidepopup.open();
    }
  }
}
</script>

<style scoped>
.sectionWrap{
  margin: 3.75rem 3.75rem 10rem 3.125rem;
}
.settingsContainer {
  padding-right: 3.7rem;
}
.settingsHeader {
  margin-top: 1.1rem;
  font-weight: 600;
  font-size: 1.625rem;
  line-height: 2.625rem;
}
.settingsSubHeader {
  margin-top: 1.1rem;
  margin-bottom: 2.5rem;
  font-size: 1rem;
  line-height: 1.625rem;
}
.blank{
  background-color: #F7F9FC;
}
.col-4-custom {
  width: 31%;
}
</style>
