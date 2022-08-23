<template>
  <section id="voorstellen" class="relative">
    <div
      style="grid-template-rows: 7rem"
      class="grid relative max-w-screen-lg mx-auto px-4 pb-10 pt-6 animate"
    >
      <img
        class="relative h-60 w-60 shadow-lg border-2 border-white rounded-full mx-auto"
        src="@/assets/images/josbutter.jpg"
        width="520"
        height="520"
        :alt="companyDetails.name"
      >
      <div class="col-start-1 row-start-2 bg-blue p-10 pt-36 text-white">
        <h1 class="animate">
          Even voorstellen
        </h1>
        <br>
        <div class="columns-1 sm:columns-2 gap-6 sm:gap-10">
          <p class="mb-6 animate">
            Van huis uit ben ik opgegroeid in Purmerend en woon sinds 2018 in Hoorn
            samen met mijn vrouw Ellie en twee stoere knapen, Stan en Yaniek. Als 8
            jarig jongentje liep ik al achter de fanfare aan en is mijn passie voor
            muziek voor het leven verankerd. In mijn vrije tijd ben ik een enthousiast
            trompettist bij coverband Eleven20one, een negen koppige band waar ik met
            soulmates muziek kan maken.
          </p>
          <p class="mb-6 animate">
            Als mensen-mens help en ontzorg ik graag anderen. Ik wil graag iets voor een
            ander kunnen betekenen, hierin vind ik voldoening. De waardering die
            daarvoor terugkomt is voor mij onbetaalbaar. Na de beslissing om na 20 jaar
            het roer om te gooien ben ik op zoek gegaan naar werkzaamheden die vooral te
            maken hebben met ontzorgen en helpen van anderen. Dat ik deze elementen
            direct terugvind in de uitvaartbranche vind ik zelf niet gek. De interesse
            voor de uitvaart is door de eigen ervaringen in mijn omgeving verder
            aangewakkerd.
          </p>
          <p class="mb-6 animate">
            Door kennis te maken met veel mensen in het werkveld van de uitvaart, heb ik
            ontdekt dat het verzorgen van overledenen heel goed bij mij past. Een goede
            verzorging en opbaring uitvoeren is de eerste aanzet voor nabestaanden om
            het rouwproces te kunnen aanvangen. Het afscheid nemen kan dan écht
            beginnen. Om het vak Overledenenverzorging en opbaren goed te kunnen
            uitvoeren heb ik verschillende opleidingen, cursussen en stages gevolgd. De
            opgedane kennis en vaardigheden kan ik nu gebruiken om andere mensen te
            helpen na het overlijden van hun dierbare.
          </p>
          <p class="mb-6 animate">
            Als vrijwilliger ben ik werkzaam bij Inloophuis PISA in Hoorn. PISA staat
            voor Praten Informatie Steun en Aandacht. Het is dankbaar werk om er te
            kunnen zijn voor de mensen die met kanker in aanraking zijn gekomen of zijn
            geweest. Vaak is alleen al luisteren naar hun verhaal een grote steun. Hier
            zet ik mij met alle liefde voor in.
          </p>
          <p class="mb-6 animate">
            Ik kom graag bij u langs of nodig u uit om in Hoorn eens kennis met elkaar
            te maken. Tijd voor een kop koffie of thee is er altijd, en een afspraak is
            zo gemaakt. Ik kijk er naar uit!
          </p>
          <contact-block :company-details="companyDetails" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'VoorstellenSection',
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
