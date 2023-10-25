<template>
  <div class="pt-[140px] sm:pt-[270px]">
    <section
      id="home"
      :style="{ backgroundImage: `url('/images/haven-hoorn.jpg')` }"
      class="bg-image-container mx-4 aspect-video bg-cover bg-no-repeat"
    />
    <ServiceSection id="service" />
    <RaysSection />
    <IntroSection id="voorstellen" />
    <section
      id="rouwauto"
      :style="{ backgroundImage: `url('/images/chrysler-pacifica.jpg')` }"
      class="bg-image-container mx-4 aspect-video bg-cover bg-no-repeat"
    />
    <TransportSection />
    <RaysSection />
    <TarievenSection id="tarieven" />
    <RaysSection />
    <section
      :style="{ backgroundImage: `url('/images/trees.jpg')` }"
      class="bg-image-container mx-4 aspect-video bg-cover bg-no-repeat"
    />
    <PartnersSection id="partners" />
    <div
      id="domloading-overlay"
      class="fixed left-0 right-0 top-0 bottom-0 bg-white pointer-events-none"
    />
  </div>
</template>
<script setup>
const route = useRoute()
const baseURL = useRuntimeConfig().public.baseURL
const title = 'Butter Uitvaart - Post Mortem Support'
const description = 'Met aandacht verzorgd opbaren in de omgeving Noord Holland, West Friesland, Amsterdam, Zaandam, Zaanstreek, Purmerend, Volendam, Waterland, Noordkop, Hollands Kroon, Alkmaar, Haarlem. Het is vanuit de stellige overtuiging dat wanneer een goed verzorgde opbaring het rouwproces voor nabestaande pas écht begint. De eerste uren na het overlijden is het voor de nabestaanden chaos en weet men soms niet wat hen is overkomen en hoe nu verder. Door een goede verzorging die met aandacht voor zowel de overledene en nabestaanden is uitgevoerd, is er vaak al meer rust voor de aanwezige nabestaanden. Het rouwen kan dan pas écht beginnen.'
useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  // twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  // ogImage: `${baseURL}/og-image.png`,
  // twitterImage: `${baseURL}/og-image.png`,
  ogUrl: `${baseURL}${route.path}`
})
useHead({
  title: title,
  meta: [
    { hid: 'description', name: 'description', content: description },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${baseURL}${route.path}`
    }
  ]
})

const { gsap, ScrollTrigger } = useGsap()
onMounted(() => {
  gsap.defaults({ ease: 'sine.inOut' })

  gsap.to('#domloading-overlay', { opacity: 0, duration: 1 })

  // Animate elements in view
  gsap.set('.animate', { y: 10, opacity: 0 })
  ScrollTrigger.batch('.animate', {
    once: true,
    onEnter: (elements) => {
      gsap.to(elements, { y: 0, opacity: 1, duration: 1 })
    }
  })
  gsap.set('.animate-stagger', { y: 30, opacity: 0 })
  ScrollTrigger.batch('.animate-stagger', {
    // once: true,
    onEnter: (elements) => {
      gsap.to(elements, { y: 0, opacity: 1, stagger: 0.4, ease: 'back.out(2)' })
    }
  })

  // Animate background image on scroll
  const bigImageContainers = gsap.utils.toArray('.bg-image-container')
  bigImageContainers.forEach((bigImage) => {
    gsap.to(bigImage, {
      backgroundPositionY: '50%',
      scrollTrigger: {
        trigger: bigImage,
        scrub: 1
      }
    })
  })
})
</script>
