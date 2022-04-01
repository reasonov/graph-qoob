<template>
  <div class="col contentWrap">
    <div class="d-flex justify-content-between">
      <div class="me-5 w-50">
        <change-picture
          title="Логотип компании"
          requirements-text="Краткая информация (технические требования) о формате, размере и соотношении сторон изображения."
          :picture="company.logo"
        ></change-picture>
        <h4 class="">Информация о компании</h4>
        <CmInput label="Название" v-model="company.name"></CmInput>
        <CmInput label="Сфера бизнеса" v-model="company.sphere.name"></CmInput>
        <CmInput label="Страна" v-model="company.country"></CmInput>
        <CmInput label="Город" v-model="company.city"></CmInput>
        <CmInput label="Адрес" v-model="company.address"></CmInput>
      </div>
      <div class="me-5 ms-3 w-50">
        <h4>Контакты и кнопки соцсетей</h4>
        <mobile-app-contact
          v-for="contact in networks"
          :key="contact.id"
          :contact="contact"
          v-model="contact.value"
          @delete="deleteContact"
        ></mobile-app-contact>
        <cm-button class="w-100 mt-5">Добавить новый контакт</cm-button>
      </div>
    </div>

    <div class="bottomBox">
      <div class="d-flex justify-content-end align-items-center h-100">
        <div>
          <cm-button :cls="'main'">Сохранить изменения</cm-button>
        </div>
      </div>
    </div>
  </div>
  <div class="col-4 col-4-custom blank mobilePreviewWrap">
    <div class="d-flex w-100 justify-content-center mt-3">
      <div class="w-50">
        <h3 class="w-100">Макет вашего мобильного приложения</h3>
      </div>
    </div>
    <div class="d-flex align-items-start justify-content-center">
      <div class="w-100">
        <div class="phonePicture" :style="{ backgroundImage: 'url('+ require('@/assets/mobileApp1.png') +')'}"></div>
        <div class="d-flex justify-content-center selectColorBtn">
          <div class="w-50">
            <button class="selectColorBtn_white w-50">Светлая</button>
            <button class="selectColorBtn_dark w-50">Тёмная</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChangePicture from "@/components/UI/ChangePicture";
import CmInput from "@/components/UI/inputs/CmInput";
import CmButton from "@/components/UI/buttons/CmButton";
import MobileAppContact from "@/components/Dashboard/MobileApp/MobileAppContact";
export default {
  name: "MobileApp",
  components: {MobileAppContact, CmButton, CmInput, ChangePicture},
  data: function () {
    return {
      company: {
        id: 12,
        logo: '/static/beauty-logo.jpg',
        name: 'Студия красты “Health & Beauty”',
        sphere: {id: 4, name:'Салон красоты'},
        country: 'Россия',
        city: 'Норильск',
        address: 'ул. Бауманская д. 9, этаж 2, пав. 15'
      },
      networks: [
        {
          id: 2,
          type: {name: 'Телефон', icon: '/static/mobile.svg'},
          value: '+7 (987) 343 42 43'
        },
        {
          id: 3,
          type: {name: 'Instagram', icon: '/static/instagram.svg'},
          value: '@barber_bober'
        },
        {
          id: 5,
          type: {name: 'WhatsApp', icon: '/static/whatsapp.svg'},
          value: '+7 (987) 343 42 43'
        },
        {
          id: 7,
          type: {name: 'Website', icon: '/static/home-hashtag.svg'},
          value: 'bober.site'
        },
        {
          id: 9,
          type: {name: 'Share', icon: '/static/link-square.svg'},
          value: 'n388339.yclients.com'
        },
      ]
    }
  },
  methods: {
    deleteContact(contactId){
      this.networks = this.networks.filter(el => el.id !== contactId);
    }
  }
}
</script>

<style scoped>
.contentWrap{
  padding-top: 2.7rem;
}
.phonePicture{
  height: 36.5rem;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.bottomBox {
  position: fixed;
  bottom: 0;
  left: 16.5rem;
  height: 6rem;
  width: calc((100% - 15.325rem)*0.647);
  padding: 1.5rem;
  background: #FFFFFF;
  box-shadow: 0px 17px 40px rgba(19, 49, 97, 0.07), 0px 6.20528px 21.901px rgba(19, 49, 97, 0.0482987), 0px 3.01255px 10.6325px rgba(19, 49, 97, 0.0389404), 0px 1.47681px 5.21226px rgba(19, 49, 97, 0.0310596), 0px 0.583932px 2.06094px rgba(19, 49, 97, 0.0217013);
  border-radius: 1.875rem 1.875rem 0 0;
}
.blank{
  background-color: #F7F9FC;
}
.selectColorBtn {
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  color: #000000;
}
.selectColorBtn_white {
  margin-top: 2.5rem;
  border: 0.125rem solid #FFC549;
  box-sizing: border-box;
  border-radius: 0.75rem 0px 0px 0.75rem;
  padding: 0.625rem 1.625rem;
  background: #FFFFFF;
}
.selectColorBtn_dark {
  background: #F7F9FC;
  opacity: 0.6;
  border: 0.125rem solid #A1A2A2;
  border-left: 0;
  box-sizing: border-box;
  border-radius: 0px 0.75rem 0.75rem 0px;
  color: #1E2022;
  padding: 0.625rem 1.625rem;
}
.me-5{
  margin-right: 3.1rem!important;
}
</style>
