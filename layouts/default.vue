<template>
	<div id="app">
		<div id="navbar">
			<div class="full">
				<client-only>
					<scrollactive active-class="current" :alwaysTrack="true" :duration="1200" :offset="220" @itemchanged="onItemChanged">
						<nuxt-link to="/#home" class="scrollactive-item" aria-label="Home">
							<div id="nav-logo">
								<Logo></Logo>
							</div>
						</nuxt-link>
					</scrollactive>
				</client-only>
			</div>
			<button id="nav-toggle" aria-label="Open navigatie" v-on:click="showNav = !showNav">
				<transition name="rotateFade" mode="out-in">
					<font-awesome-icon v-if="showNav === false" :icon="['fal', 'bars']" fixed-width key="bars" />
					<font-awesome-icon v-if="showNav === true" :icon="['fal', 'times']" fixed-width key="times" />
				</transition>
			</button>
			<div id="nav-container" v-bind:class="{ open: showNav }">
				<client-only>
					<scrollactive active-class="current" :alwaysTrack="true" :duration="1200" :offset="220" @itemchanged="onItemChanged" class="nav">
						<nuxt-link to="/#service" class="scrollactive-item" aria-label="Service">De service</nuxt-link>
						<nuxt-link to="/#voorstellen" class="scrollactive-item" aria-label="Even voorstellen">Even voorstellen</nuxt-link>
						<nuxt-link to="/#tarieven" class="scrollactive-item" aria-label="Tarieven">Tarieven</nuxt-link>
						<nuxt-link to="/#contact" class="scrollactive-item" aria-label="Contact">Contact</nuxt-link>
					</scrollactive>
				</client-only>
			</div>
		</div>
		<!-- start content -->
		<nuxt></nuxt>
		<!-- end content -->
		<div class="dark-blue">
			<div class="full">
				<p style="text-align: center">
					<small>© {{ currentYear }} Butter Uitvaartservice | <nuxt-link to="/cookies" aria-label="Cookie Verklaring">Cookies</nuxt-link> | Website door <a href="https://www.designchap.nl" rel="noopener" target="_blank" aria-label="Website van DesignChap">DesignChap</a></small>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
import "@/assets/Reset.css";
import "@/assets/Stylesheet.less";
import Logo from "@/components/Logo.vue";

export default {
	name: "app",
	components: {
		Logo,
	},
	data() {
		return {
			showNav: false,
		};
	},
	created() {
		if (process.client) {
			// because of Nuxt we need to do this
			window.addEventListener("scroll", this.updateScroll);
			window.addEventListener("load", () => {
				// After document is loaded add className 'loaded' to body
				document.body.className = "";
			});
		}
	},
	computed: {
		currentYear() {
			var date = new Date();
			return date.getFullYear();
		},
	},
	watch: {
		// After route change close navigation
		$route() {
			this.showNav = false;
		},
	},
	methods: {
		onItemChanged() {
			this.showNav = false;
		},
		updateScroll() {
			// On scroll change header class
			if (window.scrollY > 160) {
				document.body.className = "scroll";
			} else {
				document.body.className = "";
			}
		},
	},
};
</script>
<style>
.slide-up-fade-enter-active {
	transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.slide-up-fade-leave-active {
	transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.slide-up-fade-enter,
.slide-up-fade-leave-to {
	transform: translate3d(0, 10px, 0);
	opacity: 0;
}

.rotateFade-enter-active,
.rotateFade-leave-active {
	transition: all 0.3s ease;
}

.rotateFade-leave-to {
	transform: rotate(45deg);
	opacity: 0;
}

.rotateFade-enter {
	transform: scaleY(0);
}
</style>
