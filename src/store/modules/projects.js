const state = {
	available: window.APP_DATA.projects,
	active: ''
}

const getters = {
	available: state => state.available,
	active: state => state.active
}

const mutations = {
	open(state, project) {
		state.active = project.id
	},
	close(state) {
		state.active = ''
	}
}

export default {
	state,
	getters,
	mutations,
	namespaced: true
}