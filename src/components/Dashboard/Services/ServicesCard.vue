<template>
<cm-card :ratio="88.311688">
  <div class="serviceCardWrapper position-relative h-100">
    <div v-if="img" class="servicesImg" :style="{'background-image': 'url('+img+')'}">
    </div>
    <div v-else class="cardTitle d-flex align-items-center">
      <h3>{{ title }}</h3>
    </div>
    <hr>
  <div v-if="!statuses" class="cardContent d-flex align-items-center fs-16">
    <div>
      <p>{{ text }}</p>
    </div>
  </div>
  <div v-else class="statusesWrap">
    <div
      v-for="(status, index) in statuses"
      :key="index"
      class="d-flex justify-content-between mt-2 mb-2"
    >
      <div class="w-50">{{status.name}}</div>
      <div class="w-50">{{status.value}}</div>
    </div>
  </div>
    <cm-button
      sm
      v-if="btnText"
      @click="$emit('btn-action')"
      :to-back="btnToBack"
      :to-next="btnToNext"
      class="serviceCardButton"
      style="min-width: 11.125rem;"
    >{{ btnText }}</cm-button>
  </div>
</cm-card>
</template>

<script>
import CmCard from "@/components/UI/CmCard";
import CmButton from "@/components/UI/buttons/CmButton";
export default {
name: "ServicesCard",
  components: {CmButton, CmCard},
  props: {
    width: {
      type: String,
      default: '100%'
    },
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    btnText: {
      type: String,
    },
    action: {
      type: Function,
    },
    statuses: {
      type: Array
    },
    btnToNext: {
      type: Boolean,
      default: false
    },
    btnToBack: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
hr{
  color: #d4d4d4;
}
.statusesWrap{
  margin-top: 2rem;
}
.serviceCardWrapper{
  padding: 0.625rem;
}
.cardContent{
  margin-bottom: 2.5rem;
  margin-top: 2.1rem;
}
.cardTitle{
  height: 3.25rem;
}
.serviceCardButton{
  position: absolute;
  bottom: 0.7rem;
}
.servicesImg{
  margin: -0.75rem 0 0 0;
  height: 3.25rem;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
}
/*p{*/
/*  line-height: 1.8rem;*/
/*}*/

</style>