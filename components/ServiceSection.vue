<template>
  <section id="service">
    <div class="max-w-screen-lg mx-auto px-4 py-10">
      <h3 class="animate">
        Post Mortem Support
      </h3>
      <br>
      <h1 class="animate">
        Met aandacht verzorgen
      </h1>
      <br>
      <div class="flex flex-col sm:flex-row gap-6 sm:gap-10">
        <div class="w-full sm:w-1/2">
          <p class="animate">
            Het is vanuit de stellige overtuiging dat een goed verzorgde opbaring
            bijdraagt aan een goede start van het afscheid nemen en het rouwproces. Door
            een goede verzorging, die met aandacht voor zowel de overledene als
            nabestaanden is uitgevoerd, is er vaak al meer rust voor de aanwezige
            nabestaanden. Het rouwen kan dan pas écht beginnen.
          </p>
          <br>
          <p class="animate">
            De verzorging kan thuis worden uitgevoerd, hiervoor worden alle
            benodigdheden meegenomen. Tevens kan de verzorging uitgevoerd worden in een
            ziekenhuis, hospice of afscheidshuis.
          </p>
          <br>
          <p class="animate">
            Met 24/7 bereikbaarheid kan altijd advies worden ingewonnen en hulp worden
            ingeroepen bij verzorging en opbaren. Naast wassen en aankleden kunnen
            implantaten, stoma, katheter en infusen verwijderd worden.
          </p>
        </div>
        <div class="w-full sm:w-1/2">
          <p class="animate">
            Gespecialiseerde overledenenzorg zoals gas- of vochtbehandeling,
            thanatopraxie (lichte balseming), balseming voor repatriëring, restauratie
            reconstructie of bodyseal en het overbrengen gebeurt in nauwe samenwerking
            met professionele partners die dezelfde kwaliteit van werken nastreven.
          </p>
          <br>
          <p class="animate">
            Neem vrijblijvend contact op met Butter Uitvaartservice, ik kom graag met u
            in contact.
          </p>
          <br>
          <contact-block :company-details="companyDetails" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ServiceSection',
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
