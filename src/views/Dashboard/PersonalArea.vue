<template>
<!--<h1>Личный кабинет</h1>-->
<div class="col sectionWrap">
  <div class="">
    <h3 class="profileTitle">{{ text.profileTitle }}</h3>
    <p class="text-secondary fs-16">Аккакнт qoob.store #106</p>
  </div>
  <div class="d-flex justify-content-between contentWrap">
    <div class="me-5 w-50">
      <div>
        <change-picture
          class="mb-4"
          :title="text.personalData.title"
          :requirements-text="text.personalData.avatarDescriptionText"
          v-model="picture"
        ></change-picture>
        <CmInput :label="text.personalData.secondNameText" v-model="profile.lastName"></CmInput>
        <CmInput :label="text.personalData.firstNameText" v-model="profile.firstName"></CmInput>
        <CmInput :label="text.personalData.patronimText" v-model="profile.middleName"></CmInput>
        <cm-select
          :select-label="text.personalData.statusText"
          :options="profileStatuses"
          :selected="profileStatuses.filter(el => el.id === profile.status)[0].name"
        ></cm-select>
        <CmInput :label="text.personalData.whatsappNumberText" v-model="profile.phone"></CmInput>
        <CmInput :label="text.personalData.emailText" v-model="profile.email"></CmInput>
        <cm-select
          select-label="Предпочтительный способ связи"
          :options="contactMethods"
          :selected="selectedContactMethodName"
          placeholder="Не выбран"
          @select="selectContactMethod"
        ></cm-select>
      </div>
      <h4 class="fw-bold mt-5">{{ text.serviceNotification.title }}</h4>
      <p class="mt-4">{{ text.serviceNotification.text }}</p>
      <cm-check-box class="mt-4" :label="text.serviceNotification.noticesTexts.text1" check-description=""></cm-check-box>
      <cm-check-box :label="text.serviceNotification.noticesTexts.text2" check-description=""></cm-check-box>
      <cm-button class="mt-4">{{ text.serviceNotification.btnSubcribeTelegramText }}</cm-button>
    </div>
    <div class="rightColumn w-50">
      <div class="">
        <h4 class="fw-600">{{ text.alertWhatsapp.title }}</h4>
        <p class="fs-16" style="margin-top: 0.9rem">{{ text.alertWhatsapp.text }}</p>
      </div>
      <div>
        <PersonalAreaContact
          v-for="contact in contacts"
          :key="contact.id"
          :contact-prop="contact"
          @delete="contacts=contacts.filter(el => el.id !== contact.id )"
        ></PersonalAreaContact>
        <PersonalAreaContact last></PersonalAreaContact>
      </div>
    </div>
  </div>
  <div class="bottomBox">
    <div class="d-flex justify-content-end align-items-center h-100">
      <div>
        <cm-button :cls="'main'">{{ text.btnSaveChangesText }}</cm-button>
      </div>
    </div>
  </div>
</div>
<div class="col-4 col-4-custom blank"></div>
</template>

<script>
import CmInput from "../../components/UI/inputs/CmInput";
import CmButton from "../../components/UI/buttons/CmButton";
import PersonalAreaContact from "./PersonalArea/PersonalAreaContact";
import {mapState} from "vuex";
import CmCheckBox from "../../components/UI/inputs/CmCheckBox";
import ChangePicture from "@/components/UI/ChangePicture";
import CmSelect from "@/components/UI/СmSelect";
export default {
  name: "PersonaArea",
  components: {CmSelect, ChangePicture, CmCheckBox, PersonalAreaContact, CmButton, CmInput},
  data: function (){
    return {
      picture: null,
      profile:{
        firstName: 'Александа',
        lastName: 'Кучугура',
        middleName: 'Валерьевич',
        phone: '+7 982 234 23 45',
        email: 'alex@seven-scale.com',
        contactMethod: 3,
        status: 1,
      },
      contacts: [
        {
          id: 1,
          position: {
            id:2,
            name: "Собственник",
          },
          phone: '+79843435454',
          warnings: true,
          news: true,
          license: true,
        }
      ],
      profileStatuses: [{name: 'Собственник', id: 1}, {name: 'Администратор', id: 2}],
      selectedContactMethodName: '',
      selectedContactMethodId: null,
      contactMethods: [
        {id: 3, name: 'электронная почта'},
        {id: 4, name: 'телефон'},
        {id: 7, name: 'голубями'},
      ]
    }
  },
  computed: {
    ...mapState({
      text: state => state.texts.dashboard.personalArea,
    }),
  },
  methods:{
    selectContactMethod(obj){
      this.selectedContactMethodName = obj.name;
    }
  }
}
</script>

<style scoped>
.sectionWrap{
  padding-top: 3rem;
}
.profileTitle{
  font-size: 1.625rem;
}
.card-img{
  width: 146px;
  height: 146px;
  left: 0px;
  top: 50px;
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
.contentWrap{
  margin-top: 2.4rem;
}
.rightColumn{
  margin-right: 3rem;
  margin-left: .75rem;
}
</style>