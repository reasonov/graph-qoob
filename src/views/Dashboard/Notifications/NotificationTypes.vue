<template>
  <div class="container-fluid px-0 position-relative">
    <div class="d-flex position-absolute end-0 layoutHandlerDiv" >
      <div class="d-flex switchDiv">
        <span class="layoutText">Отключить все</span>
        <cm-switch
          v-model="disableAll"
        ></cm-switch>
      </div>
      <img @click="changeDisplay" class="layoutHandler" :src="changeDisplayIcon" alt="Layout handler"/>
    </div>
    <notifications-types-group
      v-for="(typeGroup, index) in typesGroups"
      :key="index"
      :type-group="typeGroup"
      title="Стандартные типы уведомлений вашей CRM"
      :is-list="isList"
    ></notifications-types-group>
  </div>
</template>

<script>
import NotificationsTypesGroup from "@/views/Dashboard/Notifications/NotificationsTypesGroup";
import CmSwitch from "@/components/UI/inputs/СmSwitch";
export default {
  name: "NotificationTypes",
  components: {NotificationsTypesGroup, CmSwitch},
  data: function(){
    return{
      disableAll: false,
      isList: false,
      changeDisplayIcon: require(`@/assets/frame873.svg`),
      typesGroups: [
        {
          name: "Стандартные типы уведомлений вашей CRM",
          types: [
            {name: "Напоминание клиенту\nо предстоящем визите", icon: "/static/sms-tracking.svg"},
            {name: "Запрос отзыва после визита (онлайн запись)", icon: "/static/star.svg"},
            {name: "Уведомление клиента\nо новой скидке", icon: "/static/ticket-discount.svg"},
            {name: "Предупреждение клиента\n об окончании действия скидки на онлайн запись", icon: "/static/sms-tracking.svg"},
            {name: "Поздравление клиента\nс днем рождения", icon: "/static/cake.svg"},
            {name: "Информирование клиента\nо привязке электронной карты", icon: "/static/danger.svg"},
            {name: "Уведомление клиента об онлайн записи", icon: "/static/sms-tracking.svg"}
          ]
        },
        {
          name: "Пользовательские типы уведомлений",
          withCreate: true,
          types: [
            {name: "Напоминание клиенту\nо предстоящем визите", icon: "/static/sms-tracking.svg"},
            {name: "Запрос отзыва после визита (онлайн запись)", icon: "/static/star.svg"},
            {name: "Уведомление клиента\nо новой скидке", icon: "/static/ticket-discount.svg"},
            {name: "Предупреждение клиента\n об окончании действия скидки на онлайн запись", icon: "/static/sms-tracking.svg"},
            {name: "Поздравление клиента\nс днем рождения", icon: "/static/cake.svg"},
            {name: "Информирование клиента\nо привязке электронной карты", icon: "/static/danger.svg"},
            {name: "Уведомление клиента об онлайн записи", icon: "/static/sms-tracking.svg"}
          ]
        },
      ]
    }
  },
  methods: {
    changeDisplay(){
      this.isList = !this.isList;
      if (this.isList == true) {
        this.changeDisplayIcon = require('@/assets/frame874.svg');
      } else {
        this.changeDisplayIcon = require('@/assets/frame873.svg');
      }
      
    }
  }
}
</script>

<style scoped>
.layoutHandler{
  width: 2.5rem;
  height: 2.5rem;
}
.layoutHandler:hover{
  cursor: pointer;
}
.switchDiv {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #F7F9FC;
  border-radius: 0.75rem;
  margin-right: 0.875rem;
  padding-right: 0.9rem;
  padding-left: 1.5rem;
}
.layoutText {
  margin-right: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
}
.layoutHandlerDiv {
  margin-top: 1.3rem;
  margin-right: 0.8rem;
}
</style>