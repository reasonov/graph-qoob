<template>
<cm-card class="settingsItemCard" >
<div class="d-flex justify-content-between align-items-center">
  <div class="w-100 settingsDiv">
    <img class="settingsImage" :src="this.glb.getMediaUrl(service.img)">
    <div class="settingsTextDiv d-flex align-items-center">
      <p class="w-75" >{{ service.text }}</p>
    </div>
    
  </div>
  <cm-button to-next class="settingsButton" @click="$emit('btn-click')">{{ service.btnText }}</cm-button>
</div>
</cm-card>
</template>

<script>
import CmCard from "@/components/UI/CmCard";
import CmButton from "@/components/UI/buttons/CmButton";
export default {
name: "SettingsItem",
  components: {CmButton, CmCard},
  props: {
    service: {
      type: Object,
    }
  }
}
</script>

<style scoped>
.settingsItemCard {
  height: 12.1875rem;
  margin-bottom: 0.6rem;
}
.settingsDiv {
  padding-left: 1.8rem;
  padding-top: 0.45rem;
  font-size: 1rem;
  line-height: 1.875rem;
}
.settingsTextDiv {
  height: 7rem;
}
.settingsButton {
  margin-right: 1.8rem;
  margin-bottom: 1.7rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.6rem 1.4rem;
  font-weight: 400;
}
.settingsImage {
  max-height: 3.5rem;
}
</style>