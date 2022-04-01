<template>
<start-page-navbar></start-page-navbar>
<router-view></router-view>
</template>

<script>
import StartPageNavbar from "@/components/StartPage/HomeNavbar";
export default {
name: "Home",
  components: {StartPageNavbar}
}
</script>

<style scoped>

</style>