<template>
  <div
    class="grid grid-rows-[auto,1fr,auto] min-h-screen w-screen bg-gray-lightest font-sans font-light text-base text-blue"
  >
    <NuxtPage />
    <Footer />
    <CookieConsent />
    <Header />
  </div>
</template>
<script setup>
defineOgImage({component: 'Example', title: 'Met aandacht verzorgen', subtitle: 'Post Mortem Support' })
</script>
