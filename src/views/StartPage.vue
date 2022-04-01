<template>
  <div class="container">
    <div class="row startPageWrap" :style="{'background-image':'url('+require('@/assets/startPageImg.png')+')'}">

        <div class="startPageContent">
          <h1 class="startPageMainTitle">Добро пожаловать <br>
            в сервис qoob.store</h1>
          <p class="startPageDescription">qoob — это приложение для онлайн записи <br>
            и продвинутый агрегатор уведомлений, который понравится вам и вашим клиентам.</p>
          <cm-button
              :cls="'main'"
              to-next="True"
              @click="$router.push('/registration')"
          >Регистрируйся</cm-button>
        </div>

    </div>
    </div>
</template>

<script>

import CmButton from "@/components/UI/buttons/CmButton";
export default {
  name: 'StartPage',
  components: {CmButton},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .start_page_img img{
    height: 100vh;
  }
  .start_page_img {
    /*position: relative;*/
  }
  h1 {
    text-align: left;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 52px;
    color: #1E2022;
    width: 535px;
  }
  .startPageMainTitle {

  }
  .startPageWrap{
    background-repeat:no-repeat;
    background-position: -672% -2.9rem;
  }
  .startPageContent {
    max-width: 535px;
    /*width: 40%;*/
    /*height: 100vh;*/
    padding-left: 4.8%;
    padding-top: 17.5%;
    padding-bottom: 30%;

  }
  .startPageDescription {
    text-align: left;
    margin-top: 24px;
    margin-bottom: 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
  }

  .main {
    margin-right: auto;
    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    width: 50%;
  }


  /* ------ Media Queries ------ */
  /* 1600-1920px */
  @media screen and (max-width: 1920px) {
    .startPageWrap {
      background-size: auto!important;
    }
  }

  /* 1401-1600px */
  @media screen and (max-width: 1600px) {

  }

  /* 1201-1400px */
  @media screen and (max-width: 1400px) {
    .startPageWrap {
      background-position: -400% -104px!important;
      background-size: 104% !important;
    }
    .startPageContent {
      padding-top: 11%;
      padding-bottom: 24% !important;
    }
  }

  /* 992-1200px */
  @media screen and (max-width: 1200px) {
    .startPageWrap {
      background-position: -401% -62px!important;
    }
    .startPageContent {
      max-width: 436px!important;
      padding-bottom: 24%!important;
    }
  }

  /* 768-992px */
  @media screen and (max-width: 992px) {
    .startPageContent {
      padding-left: 3%;
      /*padding-top: 17%;*/
      padding-bottom: 11% !important;
    }
  }

  /* 576-768px */
  @media screen and (max-width: 768px) {

  }

  /* 320-576px */
  @media screen and (max-width: 576px) {

  }






</style>
