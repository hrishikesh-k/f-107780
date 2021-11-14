<template>
	<div id="app" class="bg-gray-lightest font-sans font-normal text-normal text-blue leading-7">
		<div class="fixed w-screen bg-white shadow-lg z-10">
			<div class="container max-w-md mx-auto px-4">
				<client-only>
					<scrollactive active-class="current" :alwaysTrack="true" :duration="1200" :offset="220" @itemchanged="onItemChanged">
						<nuxt-link to="/#home" class="scrollactive-item" aria-label="Home">
							<div class="px-2 pt-3 pb-3 sm:pb-10">
								<Logo></Logo>
							</div>
						</nuxt-link>
					</scrollactive>
				</client-only>
				<button class="absolute right-4 top-4 text-2xl text-blue sm:hidden" aria-label="Open navigatie" @click="showNav = !showNav">
					<transition name="rotateFade" mode="out-in">
						<font-awesome-icon v-if="showNav === false" :icon="['fal', 'bars']" fixed-width key="bars" />
						<font-awesome-icon v-if="showNav === true" :icon="['fal', 'times']" fixed-width key="times" />
					</transition>
				</button>
				<div class="overflow-hidden sm:overflow-auto transition-all duration-500 sm:max-h-full" :class="[showNav ? 'max-h-96' : 'max-h-0']">
					<client-only>
						<scrollactive active-class="text-orange" :always-track="true" :duration="1200" :offset="220" @itemchanged="onItemChanged">
							<ul class="flex flex-col sm:flex-row items-center justify-between gap-2">
								<li>
									<nuxt-link to="/#service" class="scrollactive-item w-full block p-2 text-center hover:text-orange border-b-4 border-transparent hover:border-orange transition-all duration-200" aria-label="Service">De service</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/#voorstellen" class="scrollactive-item w-full block p-2 text-center hover:text-orange border-b-4 border-transparent hover:border-orange transition-all duration-200" aria-label="Even voorstellen">Even voorstellen</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/#tarieven" class="scrollactive-item w-full block p-2 text-center hover:text-orange border-b-4 border-transparent hover:border-orange transition-all duration-200" aria-label="Tarieven">Tarieven</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/#contact" class="scrollactive-item w-full block p-2 text-center hover:text-orange border-b-4 border-transparent hover:border-orange transition-all duration-200" aria-label="Contact">Contact</nuxt-link>
								</li>
							</ul>
						</scrollactive>
					</client-only>
				</div>
			</div>
		</div>
		<div class="flex flex-col">
			<nuxt class="w-screen" />
			<div class="w-screen bg-blue-dark py-3 self-end">
				<div class="container mx-auto">
					<p class="text-center text-white">
						<small>© {{ currentYear }} Butter Uitvaartservice | <nuxt-link to="/cookies" aria-label="Cookie Verklaring">Cookies</nuxt-link> | Website door <a href="https://www.designchap.nl" rel="noopener" target="_blank" aria-label="Website van DesignChap">DesignChap</a></small>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "app",
	data() {
		return {
			showNav: false,
		};
	},
	mounted() {
		window.addEventListener("scroll", this.updateScroll);
		window.addEventListener("load", () => {
			// After document is loaded add className 'loaded' to body
			document.body.className = "";
		});
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
</style>
