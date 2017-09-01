import { animate } from '../../utils'

const state = {
	itemsToLoad: 1,
	itemsLoaded: 0,
	isLoading: true
}

const getters = {
	showLoader: state => state.itemsToLoad > state.itemsLoaded,
	isLoading: state => state.isLoading,
	progress: state => {
		return Math.round(100 * state.itemsLoaded / state.itemsToLoad)
	}
}

const mutations = {
	itemLoaded(state) {
		state.itemsLoaded++
	},

	reset(state) {
		state.itemsLoaded = 0
	},

	setItemsToLoad(state, num) {
		state.itemsToLoad = num
	},

	stop(state) {
		state.isLoading = false
	}
}

const actions = {
	itemLoaded({state, commit}) {
		commit('itemLoaded')
		if ( state.itemsLoaded === state.itemsToLoad ) {
			setTimeout(() => {
				commit('stop')
				animate()
			}, 500)
		}
	}
}

export default {
	state,
	getters,
	mutations,
	actions,
	namespaced: true
}