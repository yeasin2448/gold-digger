import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerGlobalComponents } from './components'

import './assets/tailwind.css'

registerGlobalComponents(Vue)

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
