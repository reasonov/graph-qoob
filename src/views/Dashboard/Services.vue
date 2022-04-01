<template>
  <div class="cards_wrapper w-100">
    <div class="d-flex w-100">
      <transition name="fade">
      <div v-if="showWelcomeMessage" class="p-2" style="min-width: 50%;">
      <cm-card height="100%">
        <div class="position-relative h-100 p-2">
          <div class="welcomeTitle d-flex align-items-center">
            <div>
              {{ content.welcome.title }}
            </div>
          </div>
          <div class="welcomeContent fs-16">
              <p>{{ content.welcome.text }}</p>
          </div>
          <div class="wlcmBtn d-flex">
            <cm-button
              to-next
              cls="main"
              @click="showWelcomeMessage=false"
            >
              {{ content.welcome.btnText }}
            </cm-button>
          </div>
        </div>
      </cm-card>
      </div>
      </transition>
      <services-crm class="w-25 p-2"></services-crm>
      <services-qoob-store class="w-25 p-2"></services-qoob-store>
      <services-qoob-app class="w-25 p-2"></services-qoob-app>
      <div class="w-29 p-2 lastServicesContainer">
        <services-whats-app class="h-50 pb-2"></services-whats-app>
        <services-sms class="h-50 pt-2"></services-sms>
      </div>
    </div>
  </div>
  <div class="cards_wrapper w-100" style="overflow-x: unset">
    <div class="graph-section">
      <services-client-flow class="col-6 px-2"></services-client-flow>
      <services-segment-statistic class="col-6 px-2"></services-segment-statistic>
    </div>
  </div>
  <side-popup ref="slide"></side-popup>
</template>

<script>
import CmCard from "@/components/UI/CmCard";
import CmButton from "@/components/UI/buttons/CmButton";
import SidePopup from "@/components/UI/SidePopup";
import {mapState} from "vuex"
import ServicesCrm from "@/views/Dashboard/Services/ServicesCrm";
import ServicesQoobStore from "@/views/Dashboard/Services/ServicesQoobStore";
import ServicesQoobApp from "@/views/Dashboard/Services/ServicesQoobApp";
import ServicesWhatsApp from "@/views/Dashboard/Services/ServicesWhatsApp";
import ServicesSms from "@/views/Dashboard/Services/ServicesSms";
import ServicesClientFlow from "@/views/Dashboard/Services/ServicesClientFlow";
import ServicesSegmentStatistic from "@/views/Dashboard/Services/ServicesSegmentStatistic";
export default {
  name: "Services",
  components: {
    ServicesSegmentStatistic,
    ServicesClientFlow,
    ServicesSms,
    ServicesWhatsApp,
    ServicesQoobApp,
    ServicesQoobStore,
    ServicesCrm,
    SidePopup,
    CmButton,
    CmCard},
  data: function () {
    return {
      showWelcomeMessage: true,
    }
  },
  computed: {
    ...mapState({
      content: state => state.texts.dashboard.services,
    }),
  }
}
</script>

<style scoped>
.w-25{
  min-width: 25%;
}
.cards_wrapper{
  min-width: 100%;
  display: flex;
  overflow-x: auto;
  margin-left: 0.75rem;
  padding: 0.5rem 4.6rem 0 3.15rem;
  /*margin: 0px 0px 0px 12px;*/
}
.cards_wrapper > div {
  margin: 1rem 0 1.875rem 0;
}
.cards_wrapper::-webkit-scrollbar {
  display: none;
}
.welcomeContent{
  margin-top: 1rem;
}
.welcomeTitle{
  height: 2.5rem;
  font-size: 1.625rem;
  font-weight: 600;
}
.wlcmBtn{
  position: absolute;
  bottom: 0.7rem;
}
.p-2{
  padding: 0.625rem!important;
}
.px-2{
  padding: 0 0.625rem!important;
}
.lastServicesContainer{
  padding-right: 4.4rem!important;
}
.w-29{
  min-width: 28.8%;
}
.graph-section {
  display: flex;
  justify-content: space-between;

  max-width: 1720px;
  width: 100%;
  margin: 0 auto;

  box-sizing: border-box;
}
</style>