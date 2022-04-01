import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {global} from "./globalObjects"
import mitt from 'mitt'


const emitter = mitt();

const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.config.globalProperties.glb = global;
app.use(store);
app.use(router);


app.mount('#app')
