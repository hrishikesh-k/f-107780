<template>
  <section>
    <ContainerWhite class="px-4 py-10">
      <h1>
        Tarieven
      </h1>
      <br>
      <div class="flex flex-col sm:flex-row gap-6 sm:gap-10">
        <div class="w-full sm:w-1/2">
          <p>De dienstverlening is gevarieerd en niet altijd standaard. Voor tarieven en prijzen neemt u vrijblijvend contact met mij op. Alles kan wat nodig en mogelijk is. Wat er niet is wordt gemaakt of geregeld.</p>
          <br/>
          <p>
            <a
                class="inline-block bg-orange text-white shadow-md rounded-sm p-3"
                href="/downloads/butteruitvaart-kistenboek-2023.pdf"
                target="_blank"
                rel="noopener"
                aria-label="Download het Kistenboek"
              >
              Download het Kistenboek
              <font-awesome-icon :icon="['fal', 'download']" fixed-width />
            </a>
          </p>
        </div>
        <div class="w-full sm:w-1/2">
          <p>Bij Butter Uitvaartservice krijgen uitvaartondernemers en/of families:</p>
          <ul class="fa-ul" style="--fa-li-margin: 1.5em">
            <li
              v-for="service in services"
              :key="service"
            >
              <span class="fa-li text-orange">
                <font-awesome-icon :icon="['fal', 'check']" />
              </span>
              {{ service }}
            </li>
          </ul>
          <br>
        </div>
      </div>
      <ContactBlock :company-details="companyDetails" />
    </ContainerWhite>
  </section>
</template>
<script>

export default {
    name: "TarievenSection",
    props: {
        services: {
            type: Array,
            default() {
                return [];
            }
        },
        companyDetails: {
            type: Object,
            default() {
                return {};
            }
        }
    },
}
</script>
