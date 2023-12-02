<template>
  <footer>
    <ContactSection />
    <div class="bg-blue-dark py-3 self-end">
      <div class="container mx-auto">
        <p class="text-center text-white">
          <small>
            © {{ new Date().getFullYear() }} {{ companyDetails.company }} |
            Website door
            <NuxtLink
              to="https://www.designchap.nl"
              target="_blank"
              aria-label="Website van Designchap"
              class="underline"
            >
              Designchap
            </NuxtLink>
          </small>
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup>
const companyDetails = useAppConfig().companyDetails
</script>
