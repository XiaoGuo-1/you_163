import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

new Vue({
  el:"#app",
  render: h => h(App),
});
