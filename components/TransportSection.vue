<template>
  <section class="panel">
    <div class="max-w-screen-lg mx-auto px-4 py-10">
      <h1>
        Rouwauto
      </h1>
      <br>
      <div class="flex flex-col md:flex-row gap-6 md:gap-10">
        <div class="w-full">
          <p>Tegenwoordig is er ruime keus in soorten en kleuren om uw overleden dierbare te vervoeren. Voor het overbrengen en het naar de laatste rustplaats vervoeren maken wij gebruik van een mooie luxe blauwe Chrysler Pacifica. Vooral wanneer de zon erop schijnt doet het denken aan een prachtige sterrenhemel. Kort na overlijden komen wij voorrijden zonder de traditionele vlaggen. Discreet en niet zichtbaar waarom we voor het woonhuis staan. De vlaggen worden in principe alleen gebruikt tijdens het vervoer van de overledene. Desgewenst kunnen deze hier ook weggelaten worden.</p>
        </div>
        <div class="w-full">
          <p>Wanneer er na de verzorging en opbaring ook de laatste rit wordt gevraagd dan zien de nabestaanden de hele week het zelfde vertrouwde gezicht, persoonlijker kan het bijna niet.</p>
          <br>
          <ContactBlock />
        </div>
      </div>
      <div class="flex flex-row gap-3 md:gap-6 pt-12">
        <div v-for="n in 3" class="w-full shadow-md md:shadow-2xl overflow-hidden animate-stagger" :key="n">
          <NuxtImg :src="`/images/rouwauto-${n}.jpg`" alt="Rouwauto" width="600" height="600" class="w-full hover:-translate-y-2 hover:scale-125 duration-700" />
        </div>
      </div>
    </div>
  </section>
</template>
