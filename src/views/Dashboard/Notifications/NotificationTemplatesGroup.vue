<template>
<div>
    <div class="visitTable d-flex" @click="showTemplates=!showTemplates">
      <div class="tableIconDiv d-flex justify-content-center my-auto">
        <img class="tableIcon my-auto" :src="this.glb.getMediaUrl(templateGroup.icon)" />
      </div>
        
        <h4 class="tableHeader my-auto">{{templateGroup.name}}</h4>
        <img class="tableArrow" :class="{'flipArrow': showTemplates }" src="@/assets/arrow-downpavel.svg" />
    </div>
    <transition name="expand">
        <div  v-if="showTemplates">
        <div class="tableMap d-flex">
        <div class="col-6">
        <span class="tableMapHashtag">#</span>
        <span>Название типа уведомления</span>
        </div>
        <span class="channelEl col-2">Канал</span>
        <span class="segmentEl col-2">Сегмент</span>
        <span class="text-end actionEl col-2">Действие</span>
    </div>
    <div class="tableContent d-flex"
        v-for="template in templateGroup.templates"
        :key=template.id
    >
        <div class="d-flex col-5">
        <img class="contentIcon" src="@/assets/sms-tracking-bold.svg" />
        <p class="contentText">{{ template.name }}</p>
        </div>
        <div class="col-3"><p class="contentText channelContent">{{ template.channel }}</p></div>
        <div class="col-2">
          <div class="contentSegment justify-content-center">
            <p class="my-auto">{{ template.segment }}</p>
          </div>
          
        </div>
        <div class="col-2 d-flex justify-content-center"><cm-button class="ms-auto listButton">Редактировать</cm-button></div>
    </div>
    </div>
    </transition>
    
    
</div>
</template>

<script>
import CmButton from '../../../components/UI/buttons/CmButton.vue';
import { ref } from "vue";
export default{
    setup() {
    const open = ref(true);

    return {
      open,
    };
  },
    components: {CmButton},
    props: {
        templateGroup: {
            type: Object
        },
    },
    data: function(){
        return {
            showTemplates: false,
        }
    }
}
</script>

<style scoped>
.channelContent {
  font-size: 0.875rem;
  padding-right: 2.9rem;
  text-align: center;
}
.tableMap {
  margin-top: 1.5rem;
  padding-top: 0.5rem;
  height: 2.5rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #A1A2A2;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}
.tableMapHashtag {
  margin-left: 1.2rem;
  margin-right: 3.1875rem;
}
.tableContent {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  height: 5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #F0F3F8;
}
.contentIcon {
  margin-top: 1.7rem;
  margin-left: 0.7rem;
  margin-right: 2.5rem;
  width: 1.6rem;
  height: 1.5rem;
}
.contentText {
  margin-top: 1.7rem;
}
.listButton{
  width: 11.25rem;
  height:2.5rem;
  margin-top: 1.2rem;
  font-size: 0.875rem;
}
.contentSegment {
  display: flex;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.5rem;
  border: 0.125rem solid #1E2022;
  box-sizing: border-box;
  border-radius: 0.625rem;
  margin-top: 1.6rem;
  margin-left: 3.9rem;
  width: 1.8rem;
  height: 1.8rem;
  padding-top: 0.1rem;
}
.visitTable {
  background: #F6F9FC;
  border-radius: 0.75rem;
  height: 5rem;
  margin-top: 1.875rem;
}
.tableHeader {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.375rem;
}
.tableIconDiv{
  margin-left: 1.5rem;
  margin-right: 1.7rem;
  width: 3.1rem;
  height: 3.1rem;
  background: #FFFFFF;
  box-shadow: 0px 0.0625rem 0.125rem rgba(21, 21, 21, 0.2);
  border-radius: 0.75rem;
}
.tableIcon {
  width: 2.125rem;
  height: 2.125rem;
}
.tableArrow {
  margin-right: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: auto;
  transform: rotate(180deg);
  transition-duration: 0.5s;
}
.flipArrow {
    transform: rotate(0deg);
    transition-duration: 0.5s;
}
.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.5s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
}
.channelEl {
  margin-left: 1.4rem;
}
.segmentEl {
  margin-left: 1.6rem;
}
.actionEl {
  padding-right: 3rem;
}
</style>