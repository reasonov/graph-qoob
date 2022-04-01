<template>
  
<div v-if="!isList" class="col-3 cardsDiv">
  <cm-card :ratio="88.311688" class="cardMargins">
    <div class="position-relative h-25 border-bottom cardHeadDiv">
      <img class="position-absolute top-0 start-0 menuMargins" src="@/assets/menu.svg" alt="Menu icon" />
      <img class="position-absolute top-0 start-50 translate-middle-x iconMargins" :src="this.glb.getMediaUrl(type.icon)" alt="SMS tracking icon" />
      <cm-switch
        lg
        class="position-absolute top-0 end-0 switchMargins"
        v-model="isActive"
      ></cm-switch>
    </div>
    <div class="position-relative d-flex align-items-center text-center h-75">
      <p class="fontStyle mx-auto">{{ type.name }}</p>
      <cm-button class="cardButton">Редактировать</cm-button>
    </div>
  </cm-card>
</div>

<div v-else class="col-12 listCol p-0">
  <div class="container-fluid h-100">
  <div class="row border-bottom h-100">
  <div class="col-6 p-0">
    <img class="listMenu" src="@/assets/menu.svg" alt="Menu icon" />
    <img class="listIcon" :src="this.glb.getMediaUrl(type.icon)" alt="SMS tracking icon" />
    <p class="listText">{{ type.name }}</p>
    </div>
    <div class="col-4 p-0 d-flex">
      <cm-switch
        class="listSwitch ms-auto"
        v-model="isActive"
      ></cm-switch>
  </div>
    <div class="col-2 p-0">
      <cm-button class="pt-1 pb-1 listButton ms-auto">Редактировать</cm-button>
    </div>
  </div>
  </div>
</div>


</template>

<script>
import CmCard from "@/components/UI/CmCard";
import CmSwitch from "@/components/UI/inputs/СmSwitch";
import CmButton from '@/components/UI/buttons/CmButton.vue';
export default {
name: "NotificationsTypesItem",
  components: {CmCard, CmSwitch, CmButton},
  props: {
    type: {
      type: Object,
    },
    isList: {
      type: Boolean,
    }
  },
  data: function (){
    return{
      isActive: false,
    }
  }
}
</script>

<style scoped>
.cardHeadDiv {
  margin-left: 0.6rem;
  margin-right: 0.6rem;
  margin-top: 0.2rem;
}
.fontStyle{
  font-family: Graphik LCG;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 2rem;
  white-space: pre-wrap;
  text-align: center;
  padding-bottom: 2.55rem;
}
.cardButton{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 0.875rem;
  line-height: 1.5rem;
  border: 0.15rem solid #FFC549;
  padding: 0.3rem 2.4rem;
  margin-bottom: 0.95rem;
}
.listText{
  margin-left: 7.8rem;
  font-family: Graphik LCG;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  display: flex;
  margin-top: -1.5rem;
}
.listMenu{
  margin-top: 2rem;
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.25rem;
}
.listCol{
  height: 5rem;
}
.listIcon{
  margin-left: 2.5rem;
  margin-top: 1.75rem;
  width: 1.5rem;
  height: 1.5rem;
}
.listSwitch{
  margin-top: 1.7rem;
}
.listButton{
  width: 11.25rem;
  height:2.5rem;
  margin-top: 1.25rem;
  font-size: 0.875rem;
}
.menuMargins {
  margin-top: 0.73rem;
  width: 1.875rem;
  height: 1.625rem;
}
.iconMargins {
  margin-top: 0.03rem;
  margin-left: -0.05rem;
  width: 3rem;
  height: 3rem;
}
.switchMargins {
  margin-top: 0.48rem;
  width: 2.75rem;
  height: 1.625rem;
}
.cardsDiv {
  padding: 0.655rem;
}
</style>