<template>
  <div>
  <side-popup ref="popup">
    <crm-settings></crm-settings>
  </side-popup>
  <services-card
    v-if="!isExists"
    :img="getCrmLogo()"
    :text="content.notSync.text"
    :btn-text="content.notSync.btnText"
    btn-to-next
    @btn-action="this.$refs.popup.open()"
    @click="isExists=!isExists"
  ></services-card>
  <services-card
    v-else
    :img="getCrmLogo()"
    :statuses="crm.statuses"
    @click="isExists=!isExists"
  ></services-card>
  </div>
</template>

<script>
import {mapState} from "vuex";
import SidePopup from "@/components/UI/SidePopup";
import CrmSettings from "@/components/Dashboard/Services/CrmSettings";
import ServicesCard from "@/components/Dashboard/Services/ServicesCard";
export default {
name: "ServicesCrm",
  components: {ServicesCard, CrmSettings, SidePopup},
  data: function (){
    return {
      isExists: false,
      isActive: true,
      crm: {}
    }
  },
  computed: {
    ...mapState({
      content: state => state.texts.dashboard.services.crm,
    }),
  },
  mounted() {
    this.crm = {
      img: '/static/yclients-logo.svg',
        statuses: [
          { name: this.content.sync.crm, value:"Ylclients"},
          { name: this.content.sync.accId, value:"ID 1231234"},
          { name: this.content.sync.expiry, value:"до 05.05.2022"},
          { name: this.content.sync.status, value:"Активен"},
        ]
    }
  },
  methods: {
    openPopup() {
      this.$refs.popup.open();
      console.log(SidePopup.name);
    },
    getCrmLogo(){
      return this.isExists ? this.glb.getMediaUrl(this.crm.img) : this.glb.getMediaUrl(this.content.notSync.img);
    }
  }
}
</script>

<style scoped>

</style>