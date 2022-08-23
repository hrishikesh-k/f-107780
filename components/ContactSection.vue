<template>
  <section id="contact" class="bg-blue">
    <div class="max-w-screen-lg mx-auto px-4 py-10">
      <h1 class="text-left animate">
        Contact
      </h1>
      <br>
      <div class="flex flex-wrap sm:flex-nowrap items-top justify-center gap-10 p-2">
        <div class="w-full sm:w-1/3">
          <ul class="fa-ul font-sans text-white" style="--fa-li-margin: 1.5em;">
            <li class="animate">
              <h4 class="text-orange">
                <span class="fa-li text-orange">
                  <font-awesome-icon :icon="['fal', 'map-marker-alt']" />
                </span>
                {{ companyDetails.company }}
              </h4>
              {{ companyDetails.address }}<br>
              {{ companyDetails.postcode }} {{ companyDetails.city }}<br>
            </li>
          </ul>
        </div>
        <div class="w-full sm:w-1/3">
          <ul class="fa-ul font-sans text-white" style="--fa-li-margin: 1.5em;">
            <li class="animate">
              <h4>
                <span class="fa-li text-orange">
                  <font-awesome-icon :icon="['fal', 'phone']" />
                </span>
                <a
                  :href="`tel:${companyDetails.phoneLink}`"
                  class="underline decoration-orange text-white hover:text-orange transition-colors duration-300"
                  :aria-label="`Bel ${companyDetails.name}`"
                >
                  {{ companyDetails.phone }}
                </a>
              </h4>
            </li>
            <li>
              <br>
            </li>
            <li class="animate">
              <h4>
                <span class="fa-li text-orange">
                  <font-awesome-icon :icon="['fal', 'envelope']" />
                </span>
                <a
                  :href="`mailto:${companyDetails.email}`"
                  class="underline decoration-orange text-white hover:text-orange transition-colors duration-300"
                  :aria-label="`Mail ${companyDetails.name}`"
                >
                  {{ companyDetails.email }}
                </a>
              </h4>
            </li>
          </ul>
        </div>
        <div class="w-full sm:w-1/3">
          <ul class="fa-ul flex space-x-4 font-sans text-white" style="--fa-li-margin: 1.5em;">
            <li v-for="item in companyDetails.socialMedia" :key="item.icon">
              <a
                :href="item.url"
                class="text-4xl hover:text-orange transition-colors duration-300 animate"
                rel="noopener"
                target="_blank"
                :aria-label="item.name"
              >
                <font-awesome-icon :icon="['fab', item.icon]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ContactSection',
  props: {
    companyDetails: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
