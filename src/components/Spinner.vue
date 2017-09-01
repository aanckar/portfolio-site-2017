<template>
	<!--
	<div class="sk-cube-grid">
		<div class="sk-cube sk-cube1"></div>
		<div class="sk-cube sk-cube2"></div>
		<div class="sk-cube sk-cube3"></div>
		<div class="sk-cube sk-cube4"></div>
		<div class="sk-cube sk-cube5"></div>
		<div class="sk-cube sk-cube6"></div>
		<div class="sk-cube sk-cube7"></div>
		<div class="sk-cube sk-cube8"></div>
		<div class="sk-cube sk-cube9"></div>
	</div>
	-->
	<div class="sk-folding-cube">
		<div class="sk-cube1 sk-cube"></div>
		<div class="sk-cube2 sk-cube"></div>
		<div class="sk-cube4 sk-cube"></div>
		<div class="sk-cube3 sk-cube"></div>
	</div>
</template>

<style lang="scss">
@import '~vars';

/*
.sk-cube-grid {
	$size: 100px;
	width: $size;
	height: $size;
	margin-bottom: $size/2;
	.sk-cube {
		background-color: $primary;
	}
}
*/
.sk-folding-cube {
	$size: 100px;
	width: $size;
	height: $size;
	margin-bottom: 100px;
	.sk-cube {
		&:before {
			background-color: $primary;
		}
	}
}
</style>