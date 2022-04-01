<template>
<div class="row m-3">
  <div class="col-6 p-3 pe-4">
    <div class="h4 fw-bold mb-4">{{ content.title }}</div>
    <div v-if="!WhatsAppLicense" class="pre-wrap">
      <h6>{{ content.licenseNotExists.title }}</h6>
      {{ content.licenseNotExists.text }}
      <cm-button cls="main" to-next>{{ content.licenseNotExists.btnText }}</cm-button>
    </div>
    <div v-if="WhatsAppLicense && !WhatsAppActive">
      <div v-if="!agree">
        <p class="fs-16">{{ content.licenseExists.notAuth.agreeText }}</p>
        <cm-button
          cls="main"
          @click="agree=true"
        >{{ content.licenseExists.notAuth.btnAgreeText }}</cm-button>
      </div>
      <div v-else class="pre-wrap mt-4 fs-16">
        {{ content.licenseExists.notAuth.instructionText }}
        <img src="@/assets/QR.jpg" style="width: 100%" class="mt-5 mb-5">
        <p class="mt-4 mb-4">{{ content.licenseExists.notAuth.qrText }}</p>
      </div>
    </div>
    <div v-if="WhatsAppLicense && WhatsAppActive">
      <p class="fs-16">{{ content.licenseExists.auth.text }}</p>
      <img :src="this.glb.getMediaUrl(this.content.licenseExists.auth.img)" style="width: 100%;">
      <div class="d-flex">
        <cm-button cls="disable">{{ content.licenseExists.auth.btnDisable }}</cm-button>
        <cm-button cls="main" class="mx-4" @click="WhatsAppActive=false">{{ content.licenseExists.auth.btnReconfig }}</cm-button>
      </div>
    </div>
  </div>
  <div class="col-6 p-3 ps-4">
    <cm-card-base
      height="max-content"
    >
      <div class="d-flex justify-content-between">
        <div>
          <img :src="this.glb.getMediaUrl(this.content.status.img)" class="waLogo">
        </div>
        <div>
          <img v-if="isActive" :src="this.glb.getMediaUrl(this.content.status.imgActive)" class="waLogo">
          <img v-else :src="this.glb.getMediaUrl(this.content.status.imgInactive)" class="waStatusIcon">
        </div>
      </div>
      <hr>
      <div>Ваш аккаут ID {{ WhatsAppAccId }}</div>
      <div>оплачен по {{ WhatsAppAccExpiry }}</div>
      <div>Статус — {{ WhatsAppAccStatus }}</div>
    </cm-card-base>
    <help-card
      class="mt-4"
      :title="content.instruction.title"
      :sub-title="content.instruction.subtitle"
      :description="content.instruction.description"
    ></help-card>
  </div>
</div>
</template>

<script>
import CmButton from "@/components/UI/buttons/CmButton";
import HelpCard from "@/components/Dashboard/HelpCard";
import {mapState} from "vuex";
import CmCardBase from "@/components/UI/CmCardBase";
export default {
name: "WhatsAppSettings",
  components: {CmCardBase, HelpCard, CmButton},
  data: function (){
    return {
      WhatsAppLicense: true,
      WhatsAppActive: false,
      WhatsAppAccId: "6546473",
      WhatsAppAccExpiry: "05.05.2022",
      WhatsAppAccStatus: "активен",
      agree: false,
    }
  },
  computed: {
    ...mapState({
      content: state => state.texts.components.whatsAppSettings,
    }),
  },
}
</script>

<style scoped>
.waLogo{
  height: 36px;
}
.waStatusIcon {
  height: 50px;
}
hr{
  color: #d4d4d4;
}
</style>