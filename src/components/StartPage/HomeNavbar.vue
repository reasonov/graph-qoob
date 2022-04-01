<template>
  <div>
  <div class="start_page_navbar d-flex justify-content-between">
    <div>
        <img class="mainLogo" src="@/assets/qoob.store.svg" alt="">
    </div>
    <div>
      <ul class="d-flex startMenuList">
        <li class="startMenuLink"><router-link to="/prices">Цены</router-link></li>
        <li class="startMenuLink"><router-link to="/support">Поддержка</router-link></li>
        <li class="startMenuLink"><router-link to="/registration">Регистрация</router-link></li>
        <li class="startMenuLink"><router-link to="/login">Вход</router-link></li>
      </ul>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: "StartPageNavbar"
}
</script>

<style scoped>
  li{
    list-style-type: none;
  }
  .startMenuList {
    margin: 0;
    padding: 0;
  }
  .startMenuLink a {
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 1.5rem;
    color: #000000;
    margin-left: 3.75rem;

  }
  .start_page_navbar {
    padding: 4.2rem 12.6% 1.75rem 12.5%;
    align-items: center;
    background-color: #FFFFFF;
  }

  /* ------ Media Queries ------ */

  /* 1401-1600px */
  @media screen and (max-width: 1600px) {
    .start_page_navbar {
      padding: 74px 5% 32px 5%;
    }
  }

  /* 1201-1400px */
  @media screen and (max-width: 1400px) {
    .start_page_navbar[data-v-361cc65d] {
      padding: 32px 5% 32px 5% !important;
    }
  }

  /* 992-1200px */
  @media screen and (max-width: 1200px) {

  }

  /* 768-992px */
  @media screen and (max-width: 992px) {

  }

  /* 576-768px */
  @media screen and (max-width: 768px) {

  }

  /* 320-576px */
  @media screen and (max-width: 576px) {

  }

</style>
