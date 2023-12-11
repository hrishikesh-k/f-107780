<template>
  <section class="panel">
    <ContainerWhite class="px-4 py-10">
      <h1>
        Tarieven
      </h1>
      <br>
      <div class="flex flex-col md:flex-row gap-6 md:gap-10">
        <div class="w-full">
          <p>De dienstverlening is gevarieerd en niet altijd standaard. Voor tarieven en prijzen neemt u vrijblijvend contact met mij op. Alles kan wat nodig en mogelijk is. Wat er niet is wordt gemaakt of geregeld.</p>
          <br/>
          <p>
            <NuxtLink
              class="inline-block bg-orange text-white shadow-md rounded-sm p-3"
              to="/downloads/butteruitvaart-kistenboek-2023.pdf"
              target="_blank"
              rel="noopener"
              aria-label="Download het Kistenboek"
            >
              Download het Kistenboek
            </NuxtLink>
          </p>
        </div>
        <div class="w-full">
          <p>Bij Butter Uitvaartservice krijgen uitvaartondernemers en/of families:</p>
          <ul class="fa-ul" style="--fa-li-margin: 1.5em">
            <li
              v-for="service in services"
              :key="service"
            >
              {{ service }}
            </li>
          </ul>
          <br>
        </div>
      </div>
      <ContactBlock />
    </ContainerWhite>
  </section>
</template>
<script setup>
const services = useAppConfig().services
</script>
