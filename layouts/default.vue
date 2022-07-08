<template>
  <div
    class="grid grid-cols-1 min-h-screen w-screen bg-gray-lightest font-sans font-light text-base text-blue"
  >
    <div class="fixed left-0 right-0 top-0 bg-white shadow-lg z-10">
      <div class="container max-w-md mx-auto">
        <client-only>
          <scrollactive
            :always-track="true"
            :duration="1200"
            :offset="220"
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
              :offset="220"
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
    <section>
      <div class="max-w-screen-lg mx-auto pt-10 pb-20">
        <rays class="w-64 mx-auto" />
      </div>
    </section>
    <section id="contact" class="flex-none bg-blue">
      <div class="max-w-screen-lg mx-auto px-4 py-10">
        <h1 class="text-left animate">
          Contact
        </h1>
        <br>
        <div class="flex flex-wrap sm:flex-nowrap items-top justify-center gap-10 p-2">
          <div class="w-full sm:w-1/3">
            <ul class="fa-ul font-sans text-white" style="--fa-li-margin: 1.5em;">
              <li class="animate">
                <h4 class="text-orange">
                  <span class="fa-li text-orange">
                    <font-awesome-icon :icon="['fal', 'map-marker-alt']" />
                  </span>
                  {{ companyDetails.company }}
                </h4>
                {{ companyDetails.address }}<br>
                {{ companyDetails.postcode }} {{ companyDetails.city }}<br>
              </li>
            </ul>
          </div>
          <div class="w-full sm:w-1/3">
            <ul class="fa-ul font-sans text-white" style="--fa-li-margin: 1.5em;">
              <li class="animate">
                <h4>
                  <span class="fa-li text-orange">
                    <font-awesome-icon :icon="['fal', 'phone']" />
                  </span>
                  <a
                    :href="`tel:${companyDetails.phoneLink}`"
                    class="underline decoration-orange text-white hover:text-orange transition-colors duration-300"
                    :aria-label="`Bel ${companyDetails.name}`"
                  >
                    {{ companyDetails.phone }}
                  </a>
                </h4>
              </li>
              <li>
                <br>
              </li>
              <li class="animate">
                <h4>
                  <span class="fa-li text-orange">
                    <font-awesome-icon :icon="['fal', 'envelope']" />
                  </span>
                  <a
                    :href="`mailto:${companyDetails.email}`"
                    class="underline decoration-orange text-white hover:text-orange transition-colors duration-300"
                    :aria-label="`Mail ${companyDetails.name}`"
                  >
                    {{ companyDetails.email }}
                  </a>
                </h4>
              </li>
            </ul>
          </div>
          <div class="w-full sm:w-1/3">
            <ul class="fa-ul flex space-x-4 font-sans text-white" style="--fa-li-margin: 1.5em;">
              <li>
                <a
                  href="https://www.linkedin.com/in/butteruitvaartservice/"
                  class="text-4xl hover:text-orange transition-colors duration-300 animate"
                  rel="noopener"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Butter-Uitvaartservice-Post-Mortem-Support-108482781491035"
                  class="text-4xl hover:text-orange transition-colors duration-300 animate"
                  rel="noopener"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <font-awesome-icon :icon="['fab', 'facebook-square']" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-blue-dark py-3 self-end">
      <div class="container mx-auto">
        <p class="text-center text-white">
          <small>
            © {{ currentYear }} {{ $store.state.companyDetails.company }} |
            <nuxt-link to="/cookies" aria-label="Cookie Verklaring" class="underline">
              Cookies
            </nuxt-link>
            | Website door
            <a
              href="https://www.designchap.nl"
              rel="noopener"
              target="_blank"
              aria-label="Website van DesignChap"
              class="underline"
            >
              DesignChap
            </a>
          </small>
        </p>
      </div>
    </div>
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
  computed: {
    currentYear () {
      return new Date().getFullYear()
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
