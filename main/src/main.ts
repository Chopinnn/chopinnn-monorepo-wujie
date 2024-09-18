import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {a} from 'common'
console.log('hjz',a)

import Wujie from 'wujie-vue3'

const app = createApp(App)

app.use(router).use(Wujie)

app.mount('#app')
