<template>
  <section id="partners">
    <div class="max-w-screen-lg mx-auto px-4 py-10">
      <h1 class="animate">
        Partners
      </h1>
      <br>
      <div class="flex flex-col gap-6 sm:gap-10">
        <div v-for="partner in partners" :key="partner.name" class="flex flex-col sm:flex-row gap-6 bg-white shadow-xl p-10 animate">
          <div class="w-full sm:w-2/3">
            <h2>
              {{ partner.name }}
            </h2>
            <br>
            <p>
              {{ partner.description }}
            </p>
            <br>
            <a
              class="inline-block bg-orange text-white shadow-md rounded-sm p-3"
              :href="partner.url"
              target="_blank"
              rel="noopener"
            >
              Bezoek de website <font-awesome-icon :icon="['fal', 'external-link']" />
            </a>
          </div>
          <div class="w-full sm:w-1/3">
            <a
              :href="partner.url"
              target="_blank"
              rel="noopener"
            >
              <img
                :src="`/images/partners/${partner.imageName}`"
                :alt="partner.name"
                width="600"
                height="600"
                class="w-full"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'PartnersSection',
  props: {
    partners: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
