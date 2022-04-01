<template>
<div class="row">
  <div class="col" :style="{'margin': calcPadding}">
    <div class="area_header">
      <h2>{{ currentSection.fullName }}</h2>
      <div class="sectionsDiv">
        <span class="breadCrumbs">Главная</span>
        <div class="arrowPosition" :style="{'background-image': 'url('+require('@/assets/arrow-right.svg')+')'}"></div>
        <span class="breadCrumbs">{{ currentSection.name }}</span>
      </div>

    </div>
  </div>
  <div v-if="showBlank" class="col-4 col-4-custom blank">

  </div>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
name: "PersonalAreaHeader",
computed: {
  ...mapState({
      dashboard: state => state.texts.dashboard,
    }),
  currentSection(){
    let currentPathName = this.$route.name;
    let section = this.dashboard[currentPathName];
    if (section){
      return section;
    } else if (['notificationSegments', 'notificationTypes', 'notificationTemplates'].includes(currentPathName)) {
      return this.dashboard['notifications'];
    } else if (['billingLicense', 'billingPayments'].includes(currentPathName)) {
      return this.dashboard['billing'];
    } else {
      return {name: "", fullName: ""};
    }
  },
  showBlank(){
    let sectionsWithBlank = ['personalArea','settings', 'mobileApp'];
    return sectionsWithBlank.includes(this.$route.name);
    },
  mobilePreview(){
    let pageWithMobilePreview = ['mobileApp'];
    return pageWithMobilePreview.includes(this.$route.name);
    },

  calcPadding(){
    let route = this.$route.name;
    let sectionsWithBlank = ['personalArea','settings', 'mobileApp'];
    console.log(route);
    if (route === 'services'){
      return '1.5rem 3.75rem 0.625rem 3.75rem'
    } else if (sectionsWithBlank.includes(route)){
      return '1.5rem 3.75rem 0.625rem 0'
    } else {
      return '1.5rem 0 0.625rem 0'
    }
  }
},

}
</script>

<style scoped>

.breadCrumbs{
  color: #A1A2A2;
}
.area_header {
  border-bottom: 1px solid #EFF0F0;
  padding-bottom: 0.75rem;
  /*padding-bottom: 0.75rem;*/
  /*padding-left: 0;*/
  /*padding-right: 0;*/
  /*margin-left: 1.7rem;*/
  /*margin-top: 1.5rem;*/
}
.blank{
  background-color: #F7F9FC;
}
.sectionsDiv {
  display: flex;
  align-items: center;
  margin-top: 0.35rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
}
.arrowPosition {
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  height: 0.5rem;
  width: 0.5rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
}
</style>
