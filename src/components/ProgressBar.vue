<template>
	<div class="progress-bar">
		<div :style="styles"></div>
	</div>
</template>

<script>
export default {
	props: {
		progress: {
			type: Number,
			default: 0
		}
	},
	computed: {
		styles() {
			return {
				transform: `scaleX(${this.progress/100})`
			}
		}
	}
}
</script>

<style lang="scss">
@import '~vars';

.progress-bar {
	width: 18rem;
	max-width: 90vw;
	height: 0.625rem;
	margin: 0 auto;
	padding: 0.125rem;
	border: 1px solid $primary;
	div {
		width: 100%;
		height: 100%;
		transform-origin: left;
		background-color: $primary;
		transition: transform 0.25s ease-in-out;
	}
}
</style>