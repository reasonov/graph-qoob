<template>
<div>
  <sidebar></sidebar>
    <div
      class="container-fluid dash_content"
      :style="{'padding':calcPadding}"
    >
      <personal-area-header></personal-area-header>
      <div class="row paddingBottomDashboardContent">
        <router-view/>
      </div>
    </div>
  <global-modal></global-modal>
</div>
</template>

<script>
import PersonalAreaHeader from "@/components/Dashboard/DashboardHeader";
import Sidebar from "@/components/Dashboard/Sidebar";
import GlobalModal from "@/components/UI/GlobalModal";
export default {
name: "Dashboard",
  components: {GlobalModal, Sidebar, PersonalAreaHeader},
  data: function () {
    return {
      show: true
    }
  },
  computed: {
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
        return '0 0 0 12.5rem'
      } else if (sectionsWithBlank.includes(route)){
        return '0 0 0 16.25rem'
      } else {
        return '0 3.75rem 0 16.25rem'
      }
    }
  }

}
</script>

<style scoped>

</style>
