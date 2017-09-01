<template>
	<div class="site-container" :class="{'has-open-modal': activeProject, 'is-loading': isLoading}">
		<loader></loader>
		
		<side-bar></side-bar>
		<main class="main section">
			<router-view name="main"></router-view>
			<footer class="site-footer">
				<p>©2017 Andreas Anckar</p>
			</footer>
		</main>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loader from './Loader.vue'
import SideBar from '../layouts/SideBar.vue'

export default {
	components: {
		Loader, SideBar
	},
	computed: {
		...mapGetters({
			isLoading: 'loader/isLoading',
			activeProject: 'projects/active'
		})
	}
}
</script>

<style lang="scss">
@import '~vars';

.site-container {
	background: linear-gradient(to right, #2c3e50, #bdc3c7);
	//background: linear-gradient(to right, #43c6ac, #191654);
	//background: linear-gradient(to left, #360033, #0b8793);
	//background: linear-gradient(to right, #088693, #301E36);
	//background: linear-gradient(to right, #44a08d, #093637);
	
}
.main {
	padding: 0rem;
	@media screen and (min-width: $fullhd) {
		width: calc(100% - #{$sidebar-width});
		margin-left: $sidebar-width;
		padding: 1rem;
	}
}
.site-footer {
	padding: 1rem 1.5rem;
	text-align: right;
	font-size: 1.25rem;
	color: $white;
}
</style>