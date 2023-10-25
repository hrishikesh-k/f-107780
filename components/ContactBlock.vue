<template>
  <div>
    <h4 class="animate">
      {{ companyDetails.name }}
    </h4>
    <br>
    <p class="animate">
      <span class="text-orange mr-1">
        <ClientOnly>
          <font-awesome-icon :icon="['fal', 'phone']" />
        </ClientOnly>
      </span>
      <NuxtLink
        :href="`tel:${companyDetails.phoneLink}`"
        class="underline decoration-orange hover:text-orange transition-colors duration-300"
        :aria-label="`Bel ${companyDetails.name}`"
      >
        {{ companyDetails.phone }}
      </NuxtLink>
    </p>
    <p class="animate">
      <span class="text-orange mr-1">
        <ClientOnly>
          <font-awesome-icon :icon="['fal', 'envelope']" />
        </ClientOnly>
      </span>
      <NuxtLink
        :href="`mailto:${companyDetails.email}`"
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
