<template>
  <div
    class="fixed bottom-0 flex w-full bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl transition-transform duration-300 z-[2200000000]"
    :style="!popupOpen ? 'transform: translateY(100%)' : ''"
  >
    <div class="max-w-screen-lg m-auto p-6">
      <h2>Cookies</h2>
      <p>Mogen we cookies plaatsen? Deze cookies worden geplaatst door Google Analytics om het gebruik van de website te onderzoeken.</p>
      <div class="flex flex-row gap-3 pt-3">
        <div class="w-full">
          <button @click="grantConsent(), popupOpen = false" class="cursor-pointer w-full block bg-blue text-xl text-white hover:bg-opacity-80 transition-colors duration-300 px-6 py-3">
            Ja, dat mag
          </button>
        </div>
        <div class="w-full">
          <button @click="popupOpen = false" class="cursor-pointer block w-full border border-orange text-rose-700 text-xl hover:bg-opacity-80 transition-colors duration-300 px-6 py-3">
            Nee, bedankt
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { grantConsent } = useGtag()
const popupOpen = ref(true)
</script>
