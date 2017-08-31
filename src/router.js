import VueRouter from 'vue-router'
import Home from './pages/Home.vue'

const routes = [
	{
		name: 'home',
		title: 'Home',
		path: '/',
		components: {
			main: Home
		}
	}
]

export default new VueRouter({
	routes,
	//mode: 'history'
})