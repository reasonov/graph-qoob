<template>

<div class="position-fixed navMenuWrap">
<div class="companyWrapper">
  <SidebarCompany></SidebarCompany>
  <transition name="fade">
    <nav v-if="navOpen">
          <SidebarCompany></SidebarCompany>
          <SidebarCompany></SidebarCompany>
          <SidebarCompany></SidebarCompany>
          <SidebarCompany></SidebarCompany>
          <SidebarCompany></SidebarCompany>
          <SidebarCompany></SidebarCompany>
          <SidebarCompany></SidebarCompany>
    </nav>
  </transition>
  <div v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}" class="companyWrap">
    <div v-bind:class="[navOpen ? show: close]">
      <img src="@/assets/drop-down-sidebar.svg" alt="">
    </div>
  </div>
</div>
    <router-link :to="{name: 'services'}" custom v-slot="{isActive, navigate}">
      <SidebarItem :icon-src="require(`@/assets/status-up.svg`)" :is-active="isActive" @click="navigate">
        Статус сервисов
      </SidebarItem>
    </router-link>
    <router-link :to="{name: 'guide'}" custom v-slot="{isActive, navigate}">
      <SidebarItem :icon-src="require(`@/assets/information.svg`)" :is-active="isActive" @click="navigate">
        Гид по настройке
      </SidebarItem>
    </router-link>
    <router-link :to="{name: 'mobileApp'}" custom v-slot="{isActive, navigate}">
      <SidebarItem :is-bordered=false :icon-src="require(`@/assets/category.svg`)" :is-active="isActive" @click="navigate" with-line>
        Приложение
      </SidebarItem>
    </router-link>

    <SidebarItem :icon-src="require('@/assets/sms-tracking_black.svg')" :is-active="isNotificationsPath" collapse @click="focusNotifications=!focusNotifications" :is-collapsed="!showNotifications"
    >Уведомления</SidebarItem>
    <div v-if="showNotifications">
      <router-link :to="{name:'notificationSegments'}" custom v-slot="{isActive, navigate}">
        <SidebarItem :is-active="isActive" @click="navigate">
          Сегменты
        </SidebarItem>
      </router-link>
      <router-link :to="{name:'notificationTypes'}" custom v-slot="{isActive, navigate}">
        <SidebarItem :is-active="isActive" @click="navigate">
          Типы
        </SidebarItem>
      </router-link>
      <router-link :to="{name:'notificationTemplates'}" v-slot="{isActive, navigate}" custom>
        <SidebarItem :is-active="isActive" @click="navigate">
          Шаблоны
        </SidebarItem>
      </router-link>
    </div>

    <SidebarItem :icon-src="require('@/assets/dollar-square.svg')" :is-active="isBillingPath" collapse @click="focusBilling=!focusBilling" with-line :is-collapsed="!showBilling"
    >Биллинг</SidebarItem>
    <div v-if="showBilling">
      <router-link :to="{name:'billingLicense'}" custom v-slot="{isActive, navigate}">
        <SidebarItem :is-active="isActive" @click="navigate">
          Лицензия
        </SidebarItem>
      </router-link>
      <router-link :to="{name:'billingPayments'}" custom v-slot="{isActive, navigate}">
        <SidebarItem :is-active="isActive" @click="navigate">
          Оплаты
        </SidebarItem>
      </router-link>
    </div>

    <router-link :to="{name: 'settings'}" custom v-slot="{isActive, navigate}">
      <SidebarItem :icon-src="require(`@/assets/setting.svg`)" :is-active="isActive" @click="navigate">
        Настройки
      </SidebarItem>
    </router-link>
    <router-link :to="{name: 'personalArea'}" custom v-slot="{isActive, navigate}">
      <SidebarItem :icon-src="require(`@/assets/user-edit.svg`)" :is-active="isActive" @click="navigate">
        Личный кабинет
      </SidebarItem>
    </router-link>
    <router-link :to="{name: 'startPage'}" custom v-slot="{isActive, navigate}">
      <SidebarItem :icon-src="require(`@/assets/logout.svg`)" :is-active="isActive" @click="navigate" with-line>
        Выход
      </SidebarItem>
    </router-link>
<!--    <router-link :to="{name: 'cmDemonstration'}" custom v-slot="{isActive, navigate}">-->
<!--      <SidebarItem :is-active="isActive" @click="navigate">Демо компонентов</SidebarItem>-->
<!--  </router-link>-->
  </div>
</template>

<script>
import SidebarCompany from "@/components/Dashboard/SidebarCompany";
import SidebarItem from "@/components/Dashboard/SidebarItem";

export default {
  name: "Sidebar",
  components: {SidebarItem, SidebarCompany},
  props: ['isVisibleProp'],
  data() {
    return {
      navOpen: false,
      show: 'open',
      close: 'close',
      focusNotifications: false,
      focusBilling: false,
    }
  },
  computed: {
    showNotifications(){
      return this.focusNotifications
      // if (this.focusNotifications) {
      //   return true
      // }
      // return this.isNotificationsPath
    },
    isNotificationsPath() {
      return this.$route.fullPath.includes('/dashboard/notifications')
    },
    showBilling(){
      return this.focusBilling
      // if (this.focusBilling) {
      //   return true
      // }
      // return this.isBillingPath
    },
    isBillingPath() {
      return this.$route.fullPath.includes('/dashboard/billing')
    },
  }
}
</script>

<style scoped>
.navMenuWrap::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
.navMenuWrap {
  width: 12.5rem;
  background-color: #1E2022;
  height: 100vh;
  padding-top: 2.5625rem;
  overflow: auto;
}
.companyWrap img {
  margin: 0 auto 0.875rem;
  display: block;
  filter: invert(0.25);
}
.companyWrapper {
  margin-bottom: 2.4375rem;
  padding: 0 1.5rem;
}
.fade:not(.show) {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 0.8;
}
.open {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  transform: rotate(180deg);
  cursor: pointer;
}
.close {
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  cursor: pointer;
}
.navMenuItemLine::after {
  content: "";
  position: absolute;
  color: #333;
  width: 9.5rem;
  height: 1px;
  background-color: rgba(255, 255, 255, .1);
  top: 0;
}
</style>
