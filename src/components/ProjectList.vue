<template>
	<div>
		<div 
			class="cards columns is-desktop is-multiline has-animation-sequence" 
			:class="{'is-active': active}">
			<div class="column is-half-desktop animate animate-fade animate-in-from-bottom" v-for="(project, index) in projects" :key="project.name">
				<div 
					class="card" 
					:class="{'is-active': active === project.id}" 
					@click="openProject(project)">

					<div class="card-image">
						<figure 
							class="image is-16by9" 
							v-for="(image, index) in project.images" :key="image"
							:id="`${project.id}-img-${index+1}`"
							:style="active === project.id ? blockStyles[index] : {}">
							<img :src="`assets/images/${image}`">
						</figure>
					</div>

					<div 
						class="card-content" 
						:id="`${project.id}-desc`" 
						:style="active === project.id ? blockStyles[3] : {}">

						<p class="subtitle is-4">{{ project.subtitle }}</p>
						<h2 class="title is-3">{{ project.title }}</h2>

						<div class="content">
							<hr>
							<p class="card-desc">{{ project.description }}</p>
							<p class="tags">
								<span class="tag is-medium is-rounded" v-for="(tag, index) in project.tags" :key="`${project.name}_tag_${index}`">
									{{ tag }}
								</span>
							</p>
							<p><a class="button is-primary is-large" :href="project.url" v-if="project.url">Visit site</a></p>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div class="overlay" :class="{'is-active': active}"></div>
		<button class="close-overlay delete is-large" :class="{'is-visible': active}" @click="closeProject()"></button>
	</div>
</template>

<script>
import loadImage from 'image-promise'
import { mapGetters } from 'vuex'
import { getViewportDimensions, scrollTo } from '../utils'

export default {
	data() {
		return {
			blockStyles: []
		}
	},
	computed: {
		...mapGetters({
			projects: 'projects/available',
			active: 'projects/active'
		})
	},
	methods: {
		openProject(project) {
			if ( this.active === project.id ) { return }
			const self = this
			this.$store.commit('projects/open', project)
			if ( document.documentElement.clientWidth < 1008 ) { 
				setTimeout(() => {
					scrollTo(`${project.id}-img-1`, 60)
				}, 100)
				return 
			}
			setTimeout(() => {
				const img1 = document.getElementById(`${project.id}-img-3`)
				const imgSize = {
					width: img1.offsetWidth,
					height: img1.offsetHeight
				}
				self.blockStyles = [{},{},{},{ position: 'absolute', width: imgSize.width, height: imgSize.height }]

				setTimeout(() => {
					const blocks = [
						`${project.id}-img-3`,
						`${project.id}-img-2`,
						`${project.id}-img-1`,
						`${project.id}-desc`
					]

					self.blockStyles = blocks.map((block, index) => {
						const el = document.getElementById(block)
						const rect = el.getBoundingClientRect()
						const gap = 8
						const offsetY = index === 0 || index === 3 ?
							window.innerHeight/2 + gap - rect.top :
							window.innerHeight/2 - gap - rect.bottom
						const offsetX = index === 0 || index === 1 ?
							window.innerWidth/2 + gap - rect.left :
							window.innerWidth/2 - gap - rect.right
						const transform = `translate(${offsetX}px, ${offsetY}px)`
						//return { transform }
						return index < 3 ? { transform } : { transform, position: 'absolute', width: imgSize.width, height: imgSize.height }
					})
				}, 100)
			}, 360)
		},

		closeProject() {
			this.$store.commit('projects/close')
			this.blockStyles = []
		}
	},
	mounted() {
		const numItems = 6
		this.$store.commit('loader/setItemsToLoad', numItems*3)
		this.projects.slice(0, numItems).forEach(project => {
			const imgs = [
				`${project.id}-img-1`,
				`${project.id}-img-2`,
				`${project.id}-img-3`,
			]
			imgs.forEach(img => {
				const imgEl = document.getElementById(img).childNodes[0]
				loadImage(imgEl)
				.then(img => {
					this.$store.dispatch('loader/itemLoaded')
				})
				.catch(() => {
					this.$store.dispatch('loader/itemLoaded')
				})
			})
		})
	}
}
</script>

<style lang="scss">
@import '~vars';
$transition: all 0.35s ease-in-out;

.cards {
	transform: none;
	opacity: 1;
	transition: $transition;
	@media screen and (max-width: $fullhd - 1px) {
		//margin: 0 2.5rem;
		&.is-active {
			.card:not(.is-active) {
				display: none;
			}
		}
	}
	.site-container.is-loading & {
		opacity: 0;
		transform: translateY(2rem);
	}
}

.card {
	background: rgba(255,255,255,0.25);
	box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.25);
	&:not(.is-active) {
		cursor: pointer;
	}
	&, .media-content {
		text-align: center;
	}
}

.card-image {
	$hover-offset: 8rem;
	$hover-scale: 0.65;
	$active-scale: 1;

	position: relative;
	.image {
		width: 100%;
		overflow: hidden;		
		&:nth-child(1) {
			z-index: 3;
		}
		&:nth-child(2), &:nth-child(3) {
			position: absolute;
			top: 0;
			left: 0;
		}
		&:nth-child(2) { z-index: 2; }
		&:nth-child(3) { z-index: 1; }
		@media screen and (min-width: $desktop) {
			transition: $transition;
		}
	}
	.card:not(.is-active):hover & {
		.image {
			box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.25);
			&:nth-child(1) {
				transform: scale($hover-scale) translate($hover-offset, $hover-offset);
			}
			&:nth-child(2) {
				transform: scale($hover-scale);
			}
			&:nth-child(3) {
				transform: scale($hover-scale) translate(-1 * $hover-offset, -1 * $hover-offset);
			}
		}
	}
	.card.is-active & {
		.image {
			&:nth-child(1) {
				z-index: 23;
			}
			&:nth-child(2) {
				z-index: 22;
			}
			&:nth-child(3) {
				z-index: 21;
			}
			@media screen and (max-width: $desktop - 1px) {
				&:nth-child(2), &:nth-child(3) {
					position: relative;
					margin-top: 1rem;
				}
			}
			@media screen and (min-width: $fullhd) {				
				transform: scale(2);
				&:nth-child(1) {
					transform: scale($active-scale);
				}
				&:nth-child(2) {
					transform: scale($active-scale);
				}
				&:nth-child(3) {
					transform: scale($active-scale);
				}
			}
		}
	}
}

.card-content {
	padding: 1rem;
	transition: $transition;
	//height: 140px;
	font-size: 1.25rem;
	background-color: $grey-dark;

	.title {
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		line-height: 1;
		font-family: $family-secondary;
		font-weight: 300;
		color: $white;
	}
	.subtitle {
		color: $grey-light;
	}
	.content {
		display: none;
		p {
			margin-bottom: 0.5rem;
		}
	}
	hr {
		width: 10rem;
		margin: 0 auto 1rem;
		background-color: $red;
	}
	.tags {
		width: 100%;
		justify-content: center;
	}

	.card:not(.is-active):hover & {
		background-color: $primary;
	}

	.card.is-active & {
		position: relative;
		z-index: 21;
		margin-top: 1rem;
		background-color: #fff;
		//background-color: $secondary;
		//color: $white;
		a {
			//color: $teal-light;
		}
		.title {
			font-size: 2.25rem;
			color: $grey-darker;
			//color: $white;
		}
		//opacity: 0;
		.content {
			display: block;
		}
		&.is-active {
			//opacity: 1;
		}
		@media screen and (min-width: $fullhd) {
			margin-top: 0;
			.tags {
				margin: 0.75rem auto;
			}
		}
		@media screen and (min-width: $xlarge) {
			padding: 2rem;
			.title {
				font-size: 2.75rem;
			}
			.tags {
				margin: 1.25rem auto;
			}
		}
	}
}

.card-desc {
	@media screen and (min-width: $xlarge) {
		margin-top: 2.25rem;
		font-size: 1.5rem; 
	}
}

.overlay {
	display: none;
	&.is-active {
		display: block;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 20;
		//background-color: rgba(255,255,255,0.65);
		background-color: rgba(0,0,0,0.85);
	}
}

.close-overlay {
	display: none;
	transition: $transition;
	position: fixed;
	z-index: 25;
	top: 0.5rem;
	right: 0.5rem;
	background: $primary;
	&.is-visible {
		display: block;
	}
	&.is-large {
		$size: 3.5rem;
		height: $size;
		max-height: $size;
		max-width: $size;
		min-height: $size;
		min-width: $size;
		width: $size;
	}
	
	@media screen and (min-width: $fullhd) {
		top: 1.5rem;
		right: 1.5rem;
		border: 1px solid $primary;
		background: none;
		&:hover {
			background: $primary;
		}
	}
}
</style>