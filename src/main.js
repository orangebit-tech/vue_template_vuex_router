import Vue                  from 'vue'
import App from             './App.vue'
import VueRouter            from 'vue-router'
import { router }           from './router/router'
import store                from './store'
import * as VueGoogleMaps   from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    // key: 'YOUR_API_TOKEN',
    // libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  }
})
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
