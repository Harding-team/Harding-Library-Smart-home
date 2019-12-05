import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$baseurl = 'http://172.20.10.14:3000';  

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
