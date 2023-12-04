<template>
  <section id="contact" class="panel bg-blue">
    <div class="max-w-screen-lg mx-auto px-4 py-10">
      <h1 class="text-left animate">
        Contact
      </h1>
      <br>
      <div class="flex flex-wrap md:flex-nowrap items-top justify-center gap-10 p-2">
        <div class="w-full">
          <ul class="fa-ul font-sans text-white" style="--fa-li-margin: 1.5em;">
            <li class="animate">
              <h4 class="text-orange">
                <span class="fa-li text-orange">
                  <ClientOnly>
                    <font-awesome-icon :icon="['fal', 'map-marker-alt']" />
                  </ClientOnly>
                </span>
                {{ companyDetails.company }}
              </h4>
              {{ companyDetails.address }}<br>
              {{ companyDetails.postcode }} {{ companyDetails.city }}<br>
            </li>
          </ul>
        </div>
        <div class="w-full">
          <ul class="fa-ul font-sans text-white" style="--fa-li-margin: 1.5em;">
            <li class="animate">
              <h4>
                <span class="fa-li text-orange">
                  <ClientOnly>
                    <font-awesome-icon :icon="['fal', 'phone']" />
                  </ClientOnly>
                </span>
                <NuxtLink
                  :to="`tel:${companyDetails.phone}`"
                  class="underline decoration-orange text-white hover:text-orange transition-colors duration-300"
                  :aria-label="`Bel ${companyDetails.name}`"
                >
                  {{ companyDetails.phone }}
                </NuxtLink>
              </h4>
            </li>
            <li>
              <br>
            </li>
            <li class="animate">
              <h4>
                <span class="fa-li text-orange">
                  <ClientOnly>
                    <font-awesome-icon :icon="['fal', 'envelope']" />
                  </ClientOnly>
                </span>
                <NuxtLink
                  :to="`mailto:${companyDetails.email}`"
                  class="underline decoration-orange text-white hover:text-orange transition-colors duration-300"
                  :aria-label="`Mail ${companyDetails.name}`"
                >
                  {{ companyDetails.email }}
                </NuxtLink>
              </h4>
            </li>
          </ul>
        </div>
        <div class="w-full">
          <ul class="fa-ul flex space-x-4 font-sans text-white" style="--fa-li-margin: 1.5em;">
            <li v-for="item in companyDetails.socialMedia" :key="item.icon">
              <NuxtLink
                :to="`https://${item.url}`"
                class="text-4xl hover:text-orange transition-colors duration-300 animate"
                target="_blank"
                :aria-label="item.name"
              >
                <ClientOnly>
                  <font-awesome-icon :icon="['fab', item.icon]" />
                </ClientOnly>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const companyDetails = useAppConfig().companyDetails
</script>
