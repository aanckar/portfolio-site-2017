<template>
	<div class="loader-overlay" v-if="isLoading" :class="{'fade-out': !showLoader}">
		<div>
			<spinner></spinner>
			<progress-bar :progress="progress"></progress-bar>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Spinner from './Spinner.vue'
import ProgressBar from './ProgressBar.vue'

export default {
	components: {
		Spinner, ProgressBar
	},
	computed: {
		...mapGetters({
			isLoading: 'loader/isLoading',
			showLoader: 'loader/showLoader',
			progress: 'loader/progress'
		})
	}
}
</script>

<style lang="scss">
.loader-overlay {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 30;
	width: 100vw;
	height: 100vh;
	opacity: 1;
	background: rgba(255,255,255,1);
	transition: all 0.5s ease-in-out;
	&.fade-out {
		opacity: 0;
	}
	>div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>