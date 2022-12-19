<template>
  <section>
    <div class="max-w-screen-lg mx-auto px-4 py-10">
      <h1>
        Rouwauto
      </h1>
      <br>
      <div class="flex flex-col sm:flex-row gap-6 sm:gap-10">
        <div class="w-full sm:w-1/2">
          <p>Tegenwoordig is er ruime keus in soorten en kleuren om uw overleden dierbare te vervoeren. Voor het overbrengen en het naar de laatste rustplaats vervoeren maken wij gebruik van een mooie luxe blauwe Chrysler Pacifica. Vooral wanneer de zon erop schijnt doet het denken aan een prachtige sterrenhemel. Kort na overlijden komen wij voorrijden zonder de traditionele vlaggen. Discreet en niet zichtbaar waarom we voor het woonhuis staan. De vlaggen worden in principe alleen gebruikt tijdens het vervoer van de overledene. Desgewenst kunnen deze hier ook weggelaten worden.</p>
        </div>
        <div class="w-full sm:w-1/2">
          <p>Wanneer er na de verzorging en opbaring ook de laatste rit wordt gevraagd dan zien de nabestaanden de hele week het zelfde vertrouwde gezicht, persoonlijker kan het bijna niet.</p>
          <br>
          <ContactBlock :company-details="companyDetails" />
        </div>
      </div>
      <div class="flex flex-row gap-3 md:gap-6 pt-12">
        <div v-for="n in 3" class="w-full sm:w-1/3 animate-stagger" :key="n">
          <nuxt-img :src="`/images/rouwauto-${n}.jpg`" alt="Rouwauto" width="600" height="600" class="w-full rounded-md md:rounded-xl shadow-md md:shadow-2xl" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
    name: "TransportSection",
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
