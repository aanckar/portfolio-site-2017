<template>
	<aside class="sidebar section">
		<h1 class="title is-1">Andreas Anckar</h1>
		<hr>
		<h2 class="subtitle is-3">Web developer & designer</h2>
		<div class="info">
			<figure class="image is-128x128">
				<img src="assets/images/andreas-anckar.jpg">
			</figure>
			<p>Currently based in Mariehamn, Åland. Contact me at</p>
			<p class="is-size-4">andreas@anckar.fi</p>
		</div>
	</aside>
</template>

<style lang="scss">
@import '~vars';

.sidebar {
	padding: 1rem;
	color: $white;
	background-color: $secondary;
	background: none;
	.title, .subtitle {
		font-family: $family-secondary;
		text-transform: uppercase;
		line-height: 1;
		text-align: center;
	}
	.title {
		margin: 1rem 0;
		font-weight: 300;
		color: $white;
	}
	.subtitle {
		margin-bottom: 1rem;
		font-weight: 600;
		color: $white-bis;
	}
	hr {
		margin: 1rem 0;
	}
	.subtitle {
		color: $grey-light;
	}
	.info {
		p {
			margin-bottom: 0.75rem;
			text-align: center;
		}
	}
	.image {
		margin: 1.5rem auto;
		img {
			border-radius: 50%;
		}
	}

	@media screen and (max-width: $fullhd - 1px) {
		.site-container.has-open-modal & {
			display: none;
		}
	}

	@media screen and (min-width: $fullhd) {
		position: fixed;
		top: 0;
		left: 0;
		width: $sidebar-width;
		height: 100vh;
		.title, .subtitle {
			text-align: left;
		}
		.title {
			margin: 3rem 0 2rem;
		}
		.subtitle {
			margin-bottom: 4rem;
		}
		.info {
			position: absolute;
			bottom: 3rem;
		}
	}
}

.contact {

}
</style>