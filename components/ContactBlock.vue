<template>
  <div>
    <h4 class="animate">
      {{ companyDetails.name }}
    </h4>
    <br>
    <p class="animate">
      <span class="text-orange">
        <font-awesome-icon :icon="['fal', 'phone']" />
      </span>
      <a
        :href="`tel:${companyDetails.phoneLink}`"
        class="underline decoration-orange hover:text-orange transition-colors duration-300"
        :aria-label="`Bel ${companyDetails.name}`"
      >
        {{ companyDetails.phone }}
      </a>
    </p>
    <p class="animate">
      <span class="text-orange">
        <font-awesome-icon :icon="['fal', 'envelope']" />
      </span>
      <a
        :href="`mailto:${companyDetails.email}`"
        class="underline decoration-orange hover:text-orange transition-colors duration-300"
        :aria-label="`Mail ${companyDetails.name}`"
      >
        {{ companyDetails.email }}
      </a>
    </p>
  </div>
</template>
<script>
export default {
  name: 'ContactBlock',
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
