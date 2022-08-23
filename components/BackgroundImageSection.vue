<template>
  <section
    :class="`bg-image-container py-40 mx-4 sm:py-${paddingY} bg-cover bg-no-repeat`"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  />
</template>
<script>
export default {
  name: 'BackgroundImageSection',
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    paddingY: {
      type: Number,
      default: 0
    }
  }
}
</script>
