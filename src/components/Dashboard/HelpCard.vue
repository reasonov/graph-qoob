<template>
  <cm-card-base
    :width="width"
    padding="1.7rem 2.5rem"
    height="max-content"
    class="helpCardPadding"
    @click="showDescription=!showDescription"
  >
    <div class="d-flex justify-content-between mb-3">
      <div class="d-flex align-items-center">
        <img src="@/assets/instruction.svg" class="me-3">
        <span class="helpTitle">
          {{ title }}
        </span>
      </div>
      <div class="">
        <img src="@/assets/drop-down.svg" alt="">
      </div>
    </div>
    <div
      v-if="!showDescription"
      class="text-secondary"
    >
      {{ subTitle }}
    </div>
    <div
      class="text-secondary"
      v-else
    >
      {{ description }}
    </div>
  </cm-card-base>
</template>

<script>
import CmCardBase from "@/components/UI/CmCardBase";
export default {
name: "HelpCard",
  components: {CmCardBase},
  props:{
    title:{
      type: String,
      required: true
    },
    subTitle:{
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    width: {
      type: String,
    }
  },
  data: function (){
    return {
      showDescription: false,
    }
  }
}
</script>

<style scoped>
.helpTitle{
  font-weight: 500;
}
.text-secondary{
  color: #6D6D6D;
}
.helpCardPadding > div {
  padding: 1rem 2rem;
  background-color: #3A7734;
}
</style>