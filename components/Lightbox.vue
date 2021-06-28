<template>
	<div :class="{ lightbox: !resetstyles }">
		<h1 v-if="title">{{ title }}</h1>
		<ul>
			<li v-for="(image, index) in images" :key="index">
				<img :src="require(`~/assets/images/${image.thumb}`)" alt="" @click="clickImage(index)" />
			</li>
		</ul>
		<transition name="fade" mode="out-in">
			<div class="lightbox-overlay" v-if="overlayActive" @click.self="closeOverlay" aria-label="Sluiten">
				<div class="holder" key="holder">
					<transition name="slide-fade" mode="out-in">
						<img :src="require(`~/assets/images/${images[currentImage].large}`)" :alt="images[currentImage].caption" :key="currentImage" />
					</transition>
					<div class="nav" v-if="nav">
						<a class="close" nohref @click="closeOverlay" aria-label="Sluiten">
							<span>
								<font-awesome-icon :icon="['fal', 'times']" size="2x" fixed-width />
							</span>
						</a>
						<a class="prev" nohref @click="prevImage" aria-label="Vorige">
							<span>
								<font-awesome-icon :icon="['fal', 'chevron-left']" size="2x" fixed-width />
							</span>
						</a>
						<a class="next" nohref @click="nextImage" aria-label="Volgende">
							<span>
								<font-awesome-icon :icon="['fal', 'chevron-right']" size="2x" fixed-width />
							</span>
						</a>
					</div>
					<p v-if="caption && images[currentImage].caption">{{ images[currentImage].caption }}</p>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		resetstyles: {
			default: false,
			type: Boolean,
		},
		title: {
			type: String,
		},
		images: {
			type: Array,
		},
		loop: {
			default: true,
			type: Boolean,
		},
		nav: {
			default: true,
			type: Boolean,
		},
		caption: {
			default: true,
			type: Boolean,
		},
	},
	data() {
		return {
			currentImage: null,
			overlayActive: false,
		};
	},
	mounted() {
		const self = this;
		window.addEventListener("keydown", (e) => {
			self.handleGlobalKeyDown(e);
		});
	},
	methods: {
		clickImage(index) {
			this.currentImage = index;
			this.overlayActive = true;
		},
		nextImage() {
			if (this.currentImage === this.images.length - 1) {
				if (this.loop) {
					this.currentImage = 0;
				}
			} else {
				this.currentImage += 1;
			}
		},
		prevImage() {
			if (this.currentImage === 0) {
				if (this.loop) {
					this.currentImage = this.images.length - 1;
				}
			} else {
				this.currentImage -= 1;
			}
		},
		closeOverlay() {
			this.overlayActive = false;
		},
		handleGlobalKeyDown(e) {
			switch (e.keyCode) {
				case 37:
					this.prevImage();
					break;
				case 39:
					this.nextImage();
					break;
				case 27:
					this.closeOverlay();
					break;
				default:
					break;
			}
		},
	},
};
</script>

<style scoped lang="less">
.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
	transform: translate3d(10px, 0, 0);
	opacity: 0;
}

.lightbox ul {
	list-style: none;
	margin: 0 auto;
	padding: 0;
	display: flex;
	flex-wrap: wrap;

	li {
		box-sizing: border-box;
		flex-basis: 25%;
		padding: 20px;

		img {
			display: block;
			margin: 0;
			width: 100%;
			max-width: 100%;
			cursor: pointer;
			transition: all 0.3s ease;

			&:hover {
				transform: scale3d(1.04, 1.04, 1.04);
				box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
			}
		}
	}
}

@media screen and (max-width: 768px) {
	.lightbox ul li {
		flex-basis: 50%;
	}
}

@media screen and (max-width: 480px) {
	.lightbox ul li {
		flex-basis: 100%;
	}
}

.lightbox-overlay {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.9);
	text-align: center;
	box-sizing: border-box;
	z-index: 9999;

	.holder {
		max-width: 1200px;
		margin: 0 auto;
		position: relative;

		img {
			margin: 0 auto;
			width: auto;
			height: auto;
			max-width: 100%;
			max-height: 100vh;
			cursor: pointer;
			box-sizing: border-box;
			display: block;
		}

		p {
			color: #ffffff;
			margin: 0;
			background-color: rgba(0, 0, 0, 0.4);
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			box-sizing: border-box;
			padding: 10px;
		}
		.nav {
			position: initial;
			max-width: 1200px;
			margin: 0 auto;
			font-size: 14px;

			a {
				color: white;
				opacity: 0.7;
				-webkit-user-select: none;
				cursor: pointer;

				&:hover {
					opacity: 1;
				}
			}

			.next,
			.prev {
				position: absolute;
				top: 0;
				bottom: 0;
				padding: 10px;
				width: 50%;
				box-sizing: border-box;
				font-size: 40px;

				span {
					top: 50%;
					transform: translateY(50%);
					position: relative;
				}
			}

			.next {
				right: 0;
				text-align: right;
			}

			.prev {
				left: 0;
				text-align: left;
			}
			.close {
				right: 10px;
				top: 0;
				font-size: 30px;
				opacity: 0.6;
				z-index: 1;
				position: absolute;
				text-align: left;
				box-sizing: border-box;

				&:hover {
					opacity: 1;
				}
			}
		}
	}
}
</style>
