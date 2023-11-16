<template>
  <div
    class="grid grid-rows-[1fr,auto] min-h-screen w-screen bg-gray-lightest font-sans font-light text-base text-blue"
  >
    <main class="pt-[168px] sm:pt-[240px]">
      <div
        class="max-w-lg mx-auto px-4"
      >
        <NuxtLink
          class="!border-none cursor-pointer"
          aria-label="Home"
          to="/"
        >
          <Logo />
        </NuxtLink>
      </div>
      <div>
        <div class="max-w-screen-lg mx-auto px-4 py-32">
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
      </div>
    </main>
    <Footer />
  </div>
</template>
