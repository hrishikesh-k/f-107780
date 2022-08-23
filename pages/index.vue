<template>
  <div class="pt-[168px] sm:pt-[240px]">
    <section
      :style="{ backgroundImage: `url(${require('~/assets/images/haven-hoorn.jpg')})` }"
      class="bg-image-container py-40 mx-4 sm:py-72 bg-cover bg-no-repeat"
    />
    <service-section :company-details="companyDetails" />
    <rays-section />
    <voorstellen-section :company-details="companyDetails" />
    <section
      :style="{ backgroundImage: `url(${require('~/assets/images/trees.jpg')})` }"
      class="bg-image-container py-40 mx-4 sm:py-96 bg-cover bg-no-repeat"
    />
    <tarieven-section :services="services" :company-details="companyDetails" />
    <rays-section />
    <partners-section :partners="partners" />
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
