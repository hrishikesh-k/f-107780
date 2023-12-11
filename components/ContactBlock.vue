<template>
  <div>
    <h4 class="animate">
      {{ companyDetails.name }}
    </h4>
    <br>
    <p class="animate">
      <NuxtLink
        :to="`tel:${companyDetails.phone}`"
        class="underline decoration-orange hover:text-orange transition-colors duration-300"
        :aria-label="`Bel ${companyDetails.name}`"
      >
        {{ companyDetails.phone }}
      </NuxtLink>
    </p>
    <p class="animate">
      <NuxtLink
        :to="`mailto:${companyDetails.email}`"
        class="underline decoration-orange hover:text-orange transition-colors duration-300"
        :aria-label="`Mail ${companyDetails.name}`"
      >
        {{ companyDetails.email }}
      </NuxtLink>
    </p>
  </div>
</template>
<script setup>
const companyDetails = useAppConfig().companyDetails
</script>
