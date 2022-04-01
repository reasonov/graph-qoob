<template>
  <div>
  <services-card
    v-if="!isExists"
    :img="this.glb.getMediaUrl(content.img)"
    :text="content.notConfigured.text"
    :btn-text="content.notConfigured.btnText"
    with-btn
    btn-to-next
    @btn-action="$router.push({name: 'mobileApp'})"
    @click="isExists=!isExists"
  ></services-card>
  <services-card
    v-else
    :img="this.glb.getMediaUrl(content.img)"
    btn-to-next
    @btn-action="$router.push({name: 'mobileApp'})"
    @click="isExists=!isExists"
    :statuses="qoobApp.statuses"
  ></services-card>
  </div>
</template>

<script>
import {mapState} from "vuex";
import ServicesCard from "@/components/Dashboard/Services/ServicesCard";
export default {
name: "ServicesQoobApp",
  components: {ServicesCard,},
  data: function (){
    return {
      isExists: false,
      isActive: true,
      qoobApp: {}
    }
  },
  mounted() {
    this.qoobApp = {statuses: [
        { name: this.content.configured.userCount, value:"999"},
      ]
    }
  },
  computed: {
    ...mapState({
      content: state => state.texts.dashboard.services.qoobApp,
    }),
  }
}
</script>

<style scoped>

</style>