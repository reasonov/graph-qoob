<template>
<div class="">
  <h3 class="h3Header">Шаблоны уведомлений</h3>
  <div class="searchRow">
    <cm-search class="searchBarStyle" placeholder="Поиск шаблона"></cm-search>
    <div class="gap"></div>
    <div class="searchCollapseDiv">
      <span class="searchCollapseText">Свернуть все</span>
      <img class="collapseArrowDown ps-3 pe-3" src="@/assets/arrow-downpavel.svg" />
    </div>
  </div>
  <notification-templates-group
    v-for="(templateGroup, index) in templatesGroups"
    :key="index"
    :template-group="templateGroup"
    ></notification-templates-group>
</div>
</template>

<script>
import NotificationTemplatesGroup from "@/views/Dashboard/Notifications/NotificationTemplatesGroup";
import CmSearch from "@/components/UI/inputs/CmSearch.vue";
export default {
  components: { CmSearch, NotificationTemplatesGroup },
  name: "NotificationTemplates",
  data: function() {
    return {
      templatesGroups: [
        {
          name: "Напоминание клиенту о предстоящем визите",
          icon: "/static/sms-tracking.svg",
          templates: [
            {id: 1, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "01"},
            {id: 2, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "02"},
            {id: 3, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "03"},
            {id: 4, name: "Напоминание клиенту о предстоящем визите", channel: "WhatsApp", segment: "04"},
            {id: 5, name: "Напоминание клиенту о предстоящем визите", channel: "WhatsApp", segment: "05"},
            {id: 6, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "06"},
            {id: 7, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "07"},
            {id: 8, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "08"},
            {id: 9, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "09"},
            {id: 10, name: "Напоминание клиенту о предстоящем визите", channel: "SMS", segment: "01"},
            {id: 11, name: "Напоминание клиенту о предстоящем визите", channel: "SMS", segment: "01"},
            {id: 12, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "01"},
            {id: 13, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "01"},
            {id: 14, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "01"},
            {id: 15, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "01"},
          ]
        },
        {
          name: "Запрос отзыва после визита (онлайн запись)", 
          icon: "/static/star.svg",
          templates: [
            {id: 1, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "01"},
            {id: 2, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "01"},
          ]
        },
        {
          name: "Уведомление клиента о новой скидке",
          icon: "/static/ticket-discount.svg",
          templates: [
            {id: 1, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "01"},
          ]
        },
        {
          name: "Поздравление клиента с днем рождения",
          icon: "/static/cake.svg",
          templates: [
            {id: 1, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "01"},
            {id: 2, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "01"},
            {id: 3, name: "Напоминание клиенту о предстоящем визите", channel: "Push", segment: "01"},
          ]
        }
      ]
    }
  },
}
</script>

<style scoped>
.container-fluid {
  padding-left: 3.75rem;
  padding-right: 3.75rem;
}
.searchBarStyle {
  height: 3rem;
}
.h3Header {
  font-family: Graphik LCG;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: #1E2022;
  margin-top: 2.6rem;
}
.searchRow {
  margin-top: 2.5rem;
  display: flex;
}
.inputStyle {
  border: none;
  background-color: #F6F9FC;
  
  font-size: 1rem;
  line-height: 1.6rem;

  color: #6D6D6D;
  outline: none;
}
.searchCollapseDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.125rem;
  background: #F7F9FC;
  border-radius: 0.75rem;
  height: 3rem;
}
.searchCollapseText {
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #1E2022;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 0.6rem;
}
.collapseArrowDown {
flex: none;
order: 1;
flex-grow: 0;
margin-right: 0.1rem;
}
.gap {
  width: 1.25rem;;
}

</style>