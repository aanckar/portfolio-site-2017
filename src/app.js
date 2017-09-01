import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import svgicon from 'vue-svgicon'
import store from './store'
import router from './router'
import App from './components/App.vue'
import { polyfills } from './utils'
import smoothScroll from 'smoothscroll-polyfill'
import 'nodelist-foreach-polyfill'

import './scss/app.scss'

smoothScroll.polyfill()

sync(store, router)

Vue.use(VueRouter)
Vue.use(svgicon, {
	tagName: 'svgicon'
})

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})