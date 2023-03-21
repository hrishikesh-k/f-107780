<template>
  <div class="pt-[140px] sm:pt-[270px]">
    <section
      id="home"
      :style="{ backgroundImage: `url('/images/haven-hoorn.jpg')` }"
      class="bg-image-container mx-4 aspect-video bg-cover bg-no-repeat"
    />
    <ServiceSection id="service" :company-details="companyDetails" />
    <RaysSection />
    <IntroSection id="voorstellen" :company-details="companyDetails" />
    <section
      id="rouwauto"
      :style="{ backgroundImage: `url('/images/chrysler-pacifica.jpg')` }"
      class="bg-image-container mx-4 aspect-video bg-cover bg-no-repeat"
    />
    <TransportSection :services="services" :company-details="companyDetails" />
    <RaysSection />
    <TarievenSection id="tarieven" :services="services" :company-details="companyDetails" />
    <RaysSection />
    <section
      :style="{ backgroundImage: `url('/images/trees.jpg')` }"
      class="bg-image-container mx-4 aspect-video bg-cover bg-no-repeat"
    />
    <PartnersSection id="partners" :partners="partners" class="pt-6" />
    <div
      id="domloading-overlay"
      class="fixed left-0 right-0 top-0 bottom-0 bg-white pointer-events-none"
    />
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data () {
    return {
      companyDetails: this.$store.state.companyDetails,
      services: this.$store.state.services,
      partners: this.$store.state.partners
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  },
  mounted () {
    this.$gsap.defaults({ ease: 'sine.inOut' })

    this.$gsap.to('#domloading-overlay', { opacity: 0, duration: 1 })

    // Animate elements in view
    this.$gsap.set('.animate', { y: 10, opacity: 0 })
    this.$ScrollTrigger.batch('.animate', {
      once: true,
      onEnter: (elements) => {
        this.$gsap.to(elements, { y: 0, opacity: 1, duration: 1 })
      }
    })
    this.$gsap.set('.animate-stagger', { y: 30, opacity: 0 })
    this.$ScrollTrigger.batch('.animate-stagger', {
      // once: true,
      onEnter: (elements) => {
        this.$gsap.to(elements, { y: 0, opacity: 1, stagger: 0.3, ease: 'back.out(6)' })
      }
    })

    // Animate background image on scroll
    const bigImageContainers = this.$gsap.utils.toArray('.bg-image-container')
    bigImageContainers.forEach((bigImage) => {
      this.$gsap.to(bigImage, {
        backgroundPositionY: '50%',
        scrollTrigger: {
          trigger: bigImage,
          scrub: 1
        }
      })
    })

    // Force to scroll to top because of hash scrolling
    // Scrollbehavior doesnt work properly
    this.$nextTick(() => {
      window.scrollTo({
        top: 0
      })
    })
  }
}
</script>
