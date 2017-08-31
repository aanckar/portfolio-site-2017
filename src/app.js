import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import svgicon from 'vue-svgicon'
import store from './store'
import router from './router'
import App from './components/App.vue'
import smoothScroll from 'smoothscroll-polyfill'

import './scss/app.scss'

sync(store, router)

Vue.use(VueRouter)
Vue.use(svgicon, {
	tagName: 'svgicon'
})

smoothScroll.polyfill()

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})