<template>
  <div class="w-full h-full bg-white">
    <div class="pt-12 text-center">
      <img src="/images/og-logo.png" class="m-auto" width="800" />
    </div>
    <div class="text-center p-8">
      <h1 class="m-auto" style="font-size: 42px; font-weight: normal; color: #888888">
        {{ subtitle }}
      </h1>
    </div>
    <div class="absolute left-0 bottom-0 text-center w-full p-16" style="background: #2e2e59">
      <h2 class="m-auto" style="font-size: 54px; font-weight: normal; color: #ed7f03">
        {{ title }}
      </h2>
    </div>
  </div>
</template>
<script setup lang="ts">
// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false,
})

defineProps({
  subtitle: String,
  title: String,
})
</script>
