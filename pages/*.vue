<template>
  <div class="pt-32 sm:pt-56">
    <section>
      <div class="max-w-screen-lg mx-auto px-4 py-10">
        <h1 class="font-serif text-5xl text-orange">
          Niet gevonden
        </h1>
        <br>
        <p class="text-center">
          Helaas, de pagina die u probeert te bezoeken bestaat niet.
        </p>
        <br>
        <p class="text-center">
          <nuxt-link class="bg-orange text-white shadow-md rounded-sm p-3" to="/#home">
            <font-awesome-icon :icon="['fal', 'arrow-left']" /> Terug naar homepage
          </nuxt-link>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
  head () {
    return {
      title: 'Pagina niet gevonden',
      description: ''
    }
  }
}
</script>
