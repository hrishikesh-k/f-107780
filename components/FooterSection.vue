<template>
  <div class="bg-blue-dark py-3 self-end">
    <div class="container mx-auto">
      <p class="text-center text-white">
        <small>
          © {{ currentYear }} {{ company }} |
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
</template>
<script>
export default {
  name: 'FooterSection',
  props: {
    company: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>
