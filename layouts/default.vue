<template>
  <div
    class="grid grid-cols-1 min-h-screen w-screen bg-gray-lightest font-sans font-light text-base text-blue"
  >
    <nav class="fixed left-0 right-0 top-0 bg-white shadow-xl z-10">
      <div class="relative container max-w-xl mx-auto">
        <div
          id="logo_container"
          class="m-auto transition-all duration-500 px-4 pt-3 pb-3 md:pb-10"
          :class="isScrolling ? 'small' : ''"
        >
          <NuxtLink
            class="!border-none cursor-pointer"
            aria-label="Home"
            @click="navigateOrScroll('#home')"
          >
            <Logo />
          </NuxtLink>
        </div>
        <button
          class="absolute right-4 top-4 text-2xl text-blue sm:hidden"
          aria-label="Open navigatie"
          @click="showNav = !showNav"
        >
          <ClientOnly>
            <Transition name="rotate-fade" mode="out-in">
              <font-awesome-icon
                v-if="showNav"
                key="xmark"
                :icon="['fal', 'xmark']"
                fixed-width
              />
              <font-awesome-icon
                v-else
                key="bars"
                :icon="['fal', 'bars']"
                fixed-width
              />
            </Transition>
          </ClientOnly>
        </button>
        <div
          class="overflow-hidden sm:overflow-auto transition-all duration-500 sm:max-h-full"
          :class="[showNav ? 'max-h-96' : 'max-h-0']"
        >
          <ul class="flex flex-col sm:flex-row items-center justify-between gap-2">
            <li v-for="navItem in navItems" :key="navItem.name">
              <button
                @click="navigateOrScroll(navItem.hash), showNav = false"
                :data-hash="navItem.hash"
                class="navItem scrollactive-item cursor-pointer"
                :aria-label="navItem.name"
              >
                {{ navItem.name }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <NuxtPage />
    <ContactSection id="contact" />
    <FooterSection />
    <div
      id="domloading-overlay"
      class="fixed inset-0 bg-white pointer-events-none z-50"
    />
  </div>
</template>
<script setup>
defineOgImage({component: 'Example', title: 'Met aandacht verzorgen', subtitle: 'Post Mortem Support' })

const { gsap, ScrollTrigger } = useGsap()
const navItems = useAppConfig().pages
const showNav = ref(false)
const isScrolling = ref(false)

const updateScroll = () => {
  if (window.scrollY > 80) {
    isScrolling.value = true
  } else {
    isScrolling.value = false
  }
}

const route = useRoute()
const router = useRouter()
const navigateOrScroll = (id) => {
  if (route.path !== '/') {
    router.push({ path: '/', hash: id })
    setTimeout(() => {
      // Wait for DOM ready
      scrollPanels()
    }, 900)
  } else {
    let y = 0
    if (id) {
      y = id
    }
    const logoHeight = document.getElementById('butteruitvaartservice-logo').clientHeight + 80
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: y,
        offsetY: logoHeight
      },
      ease: 'expo.inOut'
    })
  }
}

const scrollPanels = () => {
  const navItems = gsap.utils.toArray('.navItem')
  const panels = gsap.utils.toArray('.panel')
  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      bottom: 'top-=80px',
      onEnter: () => {
        navItems.forEach((e) => {
          e.classList.remove('current')
        })
        navItems[i].classList.add('current')
      },
      onEnterBack: () => {
        navItems.forEach((e) => {
          e.classList.remove('current')
        })
        navItems[i].classList.add('current')
      }
    })
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
  scrollPanels()
  setTimeout(() => {
    gsap.to('#domloading-overlay', { opacity: 0, duration: 1 })
  }, 600)
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>
