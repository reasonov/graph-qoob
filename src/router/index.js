import { createRouter, createWebHistory } from 'vue-router'
import StartPage from "../views/StartPage";
import Services from "@/views/Dashboard/Services";
import Dashboard from "@/views/Dashboard";
import Guide from "@/views/Dashboard/Guide";
import MobileApp from "@/views/Dashboard/MobileApp";
import Settings from "@/views/Dashboard/Settings";
import PersonalArea from "@/views/Dashboard/PersonalArea";
import NotificationSegments from "@/views/Dashboard/Notifications/NotificationSegments";
import NotificationTypes from "@/views/Dashboard/Notifications/NotificationTypes";
import NotificationTemplates from "@/views/Dashboard/Notifications/NotificationTemplates";
import BillingPayments from "@/views/Dashboard/BillingPayments";
import Registration from "@/views/Registration";
import Login from "@/views/Login";
import BillingLicenseView from "@/views/Dashboard/BillingLicenseView";
import Home from "@/views/Home";
import TestModals from "@/views/TestModals";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {path: '', name: 'startPage', component: StartPage},
      {path: 'login', name: 'login', component: Login},
      {path: 'registration', name: 'registration', component: Registration}
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {path: '', redirect: {name: 'services'}},
      {path: 'services', name: 'services', component: Services},
      {path: 'guide', name: 'guide', component: Guide},
      {path: 'app', name: 'mobileApp', component: MobileApp},
      {path: 'settings', name: 'settings', component: Settings},
      {path: 'personal_area', name: 'personalArea', component: PersonalArea},
      {path: 'notifications/segments', name: 'notificationSegments', component: NotificationSegments},
      {path: 'notifications/types', name: 'notificationTypes', component: NotificationTypes},
      {path: 'notifications/templates', name: 'notificationTemplates', component: NotificationTemplates},
      {path: 'billing/license', name:'billingLicense', component: BillingLicenseView},
      {path: 'billing/payments', name:'billingPayments', component: BillingPayments},
    ]
  },
  {
    path: '/test_modals',
    name: 'test_modals',
    component: TestModals
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
