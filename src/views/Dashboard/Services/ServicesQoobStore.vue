<template>
  <div>
  <services-card
    v-if="!isExists"
    :img="this.glb.getMediaUrl(content.img)"
    :text="content.notActive.text"
    :btn-text="content.notActive.btnText"
    with-btn
    @btn-action="openPopup"
    @click="isExists=!isExists"
    btn-to-next
  ></services-card>
  <services-card
    v-else-if="isExists && isActive"
    :img="this.glb.getMediaUrl(content.img)"
    :statuses="statusesActive"
    :is-exists="isExists"
    @click="isActive=!isActive"
  ></services-card>
  <services-card
    v-else-if="isExists && !isActive"
    :img="this.glb.getMediaUrl(content.img)"
    :statuses="statusesInactive"
    :is-exists="isExists"
    :btn-text="this.content.active.expiryBtnText"
    @btn-action="$refs.instructionPopup.open()"
    @click="isExists=!isExists; isActive=!isActive"
  ></services-card>
  <side-popup ref="popup">
    <div class="m-4">
      <billing-layout is-side-modal></billing-layout>
    </div>
  </side-popup>
  <side-popup ref="instructionPopup">
    <div class="p-5">
      <h4 class="">Инструкция</h4>
      <p class="mt-4">Здесь скоро появится инструкция</p>
    </div>
  </side-popup>
  </div>
</template>

<script>
import {mapState} from "vuex";
import SidePopup from "@/components/UI/SidePopup";
import ServicesCard from "@/components/Dashboard/Services/ServicesCard";
import billingLayout from "@/views/Dashboard/Billing/billing-layout";
export default {
name: "ServicesQoobStore",
  components: {billingLayout, ServicesCard, SidePopup},
  data: function (){
    return {
      isExists: false,
      isActive: true,
      statusesActive: [],
      statusesInactive: []
    }
  },
  mounted() {
    this.statusesActive = [
        { name: this.content.active.accId, value:"ID 3123123"},
        { name: this.content.active.expiry, value:"до 01.05.2022"},
        { name: this.content.active.status, value:"Активен"},
      ]
    this.statusesInactive = [
        { name: this.content.active.accId, value:"ID 3123123"},
        { name: this.content.active.expiry, value:"-"},
        { name: this.content.active.status, value:"Не активен"},
      ]
  },
  computed: {
    ...mapState({
      content: state => state.texts.dashboard.services.qoobStore,
    }),
  },
  methods: {
    openPopup() {
      this.$refs.popup.open();
    }
  }
}
</script>

<style scoped>

</style>