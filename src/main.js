import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI, {
  size: 'small'
})

Vue.config.productionTip = false
Vue.component('HelloWorld', HelloWorld)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
