<template>
 <div class="d-lg-flex justify-content-between company">
    <div class="companyLogo">
      <img src="@/assets/gallery-add.svg" alt="">
    </div>
    <p class="companyTitle">
      Студия красоты
      Health & Beauty
    </p>
  </div>
</template>

<script>
export default {
name: "SidebarCompany"
}
</script>

<style scoped>
.company {
  margin: 0 0 1.125rem;
  cursor: pointer;
}
.companyLogo {
  background: #F7F9FC;
  border-radius: 0.75rem;
  min-width: 2rem;
  min-height: 2rem;
  max-height: 2rem;
  margin-right: 0.75rem;
}
.companyTitle {
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #F7F9FC;
  align-items: center;
  margin: 0;
}
.companyLogo img {
  margin: 0.5em auto;
  display: block;
}

</style>
