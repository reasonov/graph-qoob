<template>
<div class="container-fluid p-0 m-0">
<div class="row separatorDiv" v-if="typeGroup.withCreate && !isList"></div>
<div class="row separatorList" v-if="typeGroup.withCreate && isList"></div>
  <h4 class="fontSize">{{ typeGroup.name }}</h4>
  <div class="row row-cols-4 p-0 m-0">
    <div v-if="typeGroup.withCreate && !isList">
    <div class="createDivStyle position-relative">
      <div class="position-relative h-25">
        <img class="addSquare position-absolute start-50 bottom-0 translate-middle-x" src="@/assets/add-square.svg" alt="Create new notification image add square" />
      </div>
        <div class="text-center h-75 position-relative d-flex align-items-center">
        <p class="mx-auto addButtonText pb-5">Новое уведомление<br /> для клиента</p>
        <cm-button sm cls="secondary" class="addButtonStyle position-absolute bottom-0 start-50 translate-middle-x">Создать</cm-button>
        </div>
    </div>
    </div>
    <div class="listAddDiv position-relative d-flex mx-auto" v-if="typeGroup.withCreate && isList">
      <div class="listAddContainer d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <img class="listAddSquare" src="@/assets/add-square-list.svg" />
          <span class="listAddText">Новый тип уведомления для клиента</span>
        </div>
        <div class="d-flex align-items-center"><cm-button sm cls="secondary" class="listAddButtonStyle">Создать</cm-button></div>
      </div>
    </div>
    <div v-if="isList" class="row w-100 p-0 listHeader">
      <div class="col-6 p-0 d-flex">
        <p class="hashtagStyle">#</p>
        <p class="namingStyle">Название типа уведомления</p>
      </div>
      <div class="col-4 p-0 d-flex">
        <p class="ms-auto">Статус</p>
      </div>
      <div class="col-2 p-0 d-flex">
        <p class="ms-auto">Действие</p>
      </div>
    </div>
    <notifications-types-item
      v-for="(type, index) in typeGroup.types"
      :key="index"
      :type="type"
      :is-list="isList"
    ></notifications-types-item>
  </div>
</div>
</template>

<script>
import NotificationsTypesItem from "@/views/Dashboard/Notifications/NotificationsTypesItem";
import CmButton from '../../../components/UI/buttons/CmButton.vue';
export default {
  name: "NotificationsTypesGroup",
  components: {NotificationsTypesItem, CmButton},
  props: {
    title: {
      type: String
    },
    typeGroup: {
      type: Array
    },
    isList: {
      type: Boolean
    },
  }
}
</script>

<style scoped>
.notificationContainer {
  padding-left: 0rem;
  padding-right: 0rem;
}
.fontSize{
  font-family: Graphik LCG;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.625rem;
  margin-left: 0.7rem;
  margin-top: 2.6rem;
  margin-bottom: 1.9rem;
}
.listHeader{
  padding-left: 1.5rem;
  color: #A1A2A2;
  margin-top: 1.1rem;
  font-size: 0.875rem;
  margin-bottom: -0.4rem;
}
.hashtagStyle{
  margin-left: 5.55rem;
}
.namingStyle{
  margin-left: 3.25rem;
}
.createDivStyle{
  height: 93%;
  padding: 1.875rem;
  /*background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='%23A1A2A2FF' stroke-width='3' stroke-dasharray='10' stroke-dashoffset='7' stroke-linecap='round'/%3e%3c/svg%3e");*/
  background: url(../../../assets/create-type.svg);
  /*border-radius: 1.875rem;*/
  margin-top: 0.655rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.addButtonText{
  font-family: Graphik LCG;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 2rem;

  color: #1E2022;

  opacity: 0.4;
}
.addButtonStyle{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.25rem;

  /* Base_00 */

  background: #F0F3F8;
  border-radius: 0.75rem;
  width: 11.25rem;
  height: 2.5rem;
  border: none;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
}
.listAddSquare{
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 3.5rem;
}
.listAddButtonStyle{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;

  /* Base_00 */

  background: #F0F3F8;
  border-radius: 0.75rem;
  width: 11.25rem;
  height: 2.5rem;
  border: none;
  /*margin-bottom: 1.15rem;*/
  margin-right: 1.3rem;
  font-size: 0.875rem;
}
.listAddText{
  /*margin-bottom: 1.75rem;*/
  margin-left: 7.7rem;
  color: #A1A2A2;
}
.listAddDiv{
  position: relative;
  /*height: 5.5rem;*/
  margin-top: 0.5rem;
  margin-bottom: 2.2rem;
  /*border-radius: 1.875rem;*/
  width: 98.5%;
  padding-top: 4.88%;
}
.listAddContainer{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: url(../../../assets/create-type-list.svg);
  background-size: cover;
  /*background-position: inherit;*/
  background-position: center;
  background-repeat: no-repeat;

}
.listAddDiv::after {
  content: "";
  /*background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='%23A1A2A2FF' stroke-width='3' stroke-dasharray='10' stroke-dashoffset='7' stroke-linecap='round'/%3e%3c/svg%3e");*/
  /*opacity: 0.5;*/
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}
.separatorDiv {
  height: 2.9rem;
}
.addSquare {
  margin-bottom: -0.5rem;
  width: 3rem;
  height: 3rem;
}
.separatorList {
  margin-top: 1.2rem;
}
</style>