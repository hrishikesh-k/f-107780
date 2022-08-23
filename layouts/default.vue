<template>
  <div
    class="grid grid-cols-1 min-h-screen w-screen bg-gray-lightest font-sans font-light text-base text-blue"
  >
    <div class="fixed left-0 right-0 top-0 bg-white shadow-xl z-10">
      <div class="container max-w-lg mx-auto">
        <client-only>
          <scrollactive
            :always-track="true"
            :duration="1200"
            :offset="240"
            @itemchanged="onItemChanged"
          >
            <nuxt-link to="/#home" class="scrollactive-item" aria-label="Home">
              <div class="px-4 pt-3 pb-3 sm:pb-10">
                <logo />
              </div>
            </nuxt-link>
          </scrollactive>
        </client-only>
        <button
          class="absolute right-4 top-4 text-2xl text-blue sm:hidden"
          aria-label="Open navigatie"
          @click="showNav = !showNav"
        >
          <transition name="rotateFade" mode="out-in">
            <font-awesome-icon
              v-if="showNav"
              key="times"
              :icon="['fal', 'times']"
              fixed-width
            />
            <font-awesome-icon v-else key="bars" :icon="['fal', 'bars']" fixed-width />
          </transition>
        </button>
        <div
          class="overflow-hidden sm:overflow-auto transition-all duration-500 sm:max-h-full"
          :class="[showNav ? 'max-h-96' : 'max-h-0']"
        >
          <client-only>
            <scrollactive
              active-class="text-orange"
              :always-track="true"
              :duration="1200"
              :offset="240"
              @itemchanged="onItemChanged"
            >
              <ul class="flex flex-col sm:flex-row items-center justify-between gap-2">
                <li v-for="page in pages" :key="page.name">
                  <nuxt-link
                    :to="page.url"
                    class="scrollactive-item"
                    :aria-label="page.name"
                  >
                    {{ page.name }}
                  </nuxt-link>
                </li>
              </ul>
            </scrollactive>
          </client-only>
        </div>
      </div>
    </div>
    <nuxt />
    <rays-section />
    <contact-section :company-details="companyDetails" />
    <footer-section :company="companyDetails.company" />
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      showNav: false,
      pages: this.$store.state.pages,
      companyDetails: this.$store.state.companyDetails
    }
  },
  watch: {
    // After route change close navigation
    $route () {
      this.showNav = false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    onItemChanged () {
      this.showNav = false
    },
    updateScroll () {
      // On scroll change header class
      if (window.scrollY > 160) {
        document.body.className = 'scroll'
      } else {
        document.body.className = ''
      }
    }
  }
}
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
