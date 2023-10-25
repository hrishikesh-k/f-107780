<template>
  <div class="pt-[168px] sm:pt-[240px]">
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
          <NuxtLink class="bg-orange text-white shadow-md rounded-sm p-3" to="/#home">
            <ClientOnly>
              <font-awesome-icon :icon="['fal', 'arrow-left']" />
            </ClientOnly>
            Terug naar homepage
          </NuxtLink>
        </p>
      </div>
    </section>
  </div>
</template>
