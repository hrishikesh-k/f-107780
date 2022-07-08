<template>
  <div class="pt-32 sm:pt-56">
    <section id="home">
      <div class="max-w-screen-lg mx-auto px-4 py-10">
        <h3 class="animate-1">
          Post Mortem Support
        </h3>
        <br>
        <h1 class="animate-1">
          Met aandacht verzorgen
        </h1>
      </div>
    </section>
    <section
      :style="{ backgroundImage: `url(${require('~/assets/images/haven-hoorn.jpg')})` }"
      class="bg-image-container py-40 mx-4 sm:py-72 bg-cover bg-no-repeat"
    />
    <section id="service">
      <div class="max-w-screen-lg mx-auto px-4 py-10">
        <h2 class="animate">
          Met aandacht verzorgd opbaren
        </h2>
        <br>
        <div class="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-10">
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
            <p>
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
    <section id="voorstellen" class="relative">
      <div
        style="grid-template-rows: 7rem"
        class="grid relative max-w-screen-lg mx-auto px-4 pb-10 pt-32 animate"
      >
        <img
          class="relative h-60 w-60 shadow-lg border-2 border-white rounded-full mx-auto"
          src="~/assets/images/josbutter.jpg"
          width="520"
          height="520"
          :alt="companyDetails.name"
        >
        <div class="col-start-1 row-start-2 bg-blue p-10 pt-36 text-white">
          <h2>Even voorstellen</h2>
          <br>
          <div class="columns-1 sm:columns-2 gap-6 sm:gap-10">
            <p class="mb-6">
              Van huis uit ben ik opgegroeid in Purmerend en woon sinds 2018 in Hoorn
              samen met mijn vrouw Ellie en twee stoere knapen, Stan en Yaniek. Als 8
              jarig jongentje liep ik al achter de fanfare aan en is mijn passie voor
              muziek voor het leven verankerd. In mijn vrije tijd ben ik een enthousiast
              trompettist bij coverband Eleven20one, een negen koppige band waar ik met
              soulmates muziek kan maken.
            </p>
            <p class="mb-6">
              Als mensen-mens help en ontzorg ik graag anderen. Ik wil graag iets voor een
              ander kunnen betekenen, hierin vind ik voldoening. De waardering die
              daarvoor terugkomt is voor mij onbetaalbaar. Na de beslissing om na 20 jaar
              het roer om te gooien ben ik op zoek gegaan naar werkzaamheden die vooral te
              maken hebben met ontzorgen en helpen van anderen. Dat ik deze elementen
              direct terugvind in de uitvaartbranche vind ik zelf niet gek. De interesse
              voor de uitvaart is door de eigen ervaringen in mijn omgeving verder
              aangewakkerd.
            </p>
            <p class="mb-6">
              Door kennis te maken met veel mensen in het werkveld van de uitvaart, heb ik
              ontdekt dat het verzorgen van overledenen heel goed bij mij past. Een goede
              verzorging en opbaring uitvoeren is de eerste aanzet voor nabestaanden om
              het rouwproces te kunnen aanvangen. Het afscheid nemen kan dan écht
              beginnen. Om het vak Overledenenverzorging en opbaren goed te kunnen
              uitvoeren heb ik verschillende opleidingen, cursussen en stages gevolgd. De
              opgedane kennis en vaardigheden kan ik nu gebruiken om andere mensen te
              helpen na het overlijden van hun dierbare.
            </p>
            <p class="mb-6">
              Als vrijwilliger ben ik werkzaam bij Inloophuis PISA in Hoorn. PISA staat
              voor Praten Informatie Steun en Aandacht. Het is dankbaar werk om er te
              kunnen zijn voor de mensen die met kanker in aanraking zijn gekomen of zijn
              geweest. Vaak is alleen al luisteren naar hun verhaal een grote steun. Hier
              zet ik mij met alle liefde voor in.
            </p>
            <p class="mb-6">
              Ik kom graag bij u langs of nodig u uit om in Hoorn eens kennis met elkaar
              te maken. Tijd voor een kop koffie of thee is er altijd, en een afspraak is
              zo gemaakt. Ik kijk er naar uit!
            </p>
            <contact-block :company-details="companyDetails" />
          </div>
        </div>
      </div>
    </section>
    <section
      class="bg-image-container py-40 mx-4 sm:py-96 bg-cover bg-no-repeat"
      :style="{ backgroundImage: `url(${require('~/assets/images/trees.jpg')})` }"
    />
    <section id="tarieven">
      <div class="max-w-screen-lg mx-auto px-4 py-10 animate">
        <div class="bg-white shadow-md p-10">
          <h2>Tarieven {{ currentYear }}</h2>
          <br>
          <div class="flex flex-wrap sm:flex-nowrap gap-10">
            <div class="w-full sm:w-1/2">
              <table class="table-fixed -mt-3">
                <tbody>
                  <tr v-for="(service, index) in services" :key="`service_${index}`">
                    <td class="border-b border-gray-light pb-3 pt-3 align-top">
                      <strong>{{ service.name }}</strong><br>
                      <em v-if="service.description">{{ service.description }}</em>
                    </td>
                    <td
                      class="w-1/4 text-right border-b border-gray-light pb-3 pt-3 align-top"
                    >
                      € {{ service.price }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="w-full sm:w-1/2">
              <p>De dienstverlening bestaat verder uit:</p>
              <ul class="fa-ul" style="--fa-li-margin: 1.5em">
                <li>
                  <span class="fa-li text-orange">
                    <font-awesome-icon :icon="['fal', 'check']" />
                  </span>
                  verwijderen van implantaten<br>
                  <em>(pacemaker, ICD, katheter, neurostimulatoren)</em>
                </li>
                <li>
                  <span class="fa-li text-orange">
                    <font-awesome-icon :icon="['fal', 'check']" />
                  </span>
                  aangifte van overlijden
                </li>
                <li>
                  <span class="fa-li text-orange">
                    <font-awesome-icon :icon="['fal', 'check']" />
                  </span>
                  collegiale hulp voor facilitaire dienstverleners
                </li>
              </ul>
              <br>
              <p>In samenwerking met professionele partners:</p>
              <ul class="fa-ul" style="--fa-li-margin: 1.5em">
                <li>
                  <span class="fa-li text-orange">
                    <font-awesome-icon :icon="['fal', 'check']" />
                  </span>
                  gespecialiseerde overledenenzorg
                </li>
                <li>
                  <span class="fa-li text-orange">
                    <font-awesome-icon :icon="['fal', 'check']" />
                  </span>
                  overbrenging
                </li>
              </ul>
              <br>
              <p>Een uitgebreide tarievenlijst stuur ik u graag per e-mail.</p>
              <br>
              <contact-block :company-details="companyDetails" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      id="domloading-overlay"
      class="fixed left-0 right-0 top-0 bottom-0 bg-white pointer-events-none"
    />
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data () {
    return {
      companyDetails: this.$store.state.companyDetails,
      services: this.$store.state.services
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  },
  mounted () {
    this.$gsap.defaults({ ease: 'sine.inOut' })

    this.$gsap.to('#domloading-overlay', { opacity: 0, duration: 1 })

    this.$gsap.fromTo(
      '.animate-1',
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.6, delay: 1.6, duration: 1 }
    )

    // Animate elements in view
    this.$gsap.set('.animate', { y: 10, opacity: 0 })
    this.$ScrollTrigger.batch('.animate', {
      once: true,
      onEnter: (elements) => {
        this.$gsap.to(elements, { y: 0, opacity: 1, duration: 1 })
      }
    })

    // Animate background image on scroll
    const bigImageContainers = this.$gsap.utils.toArray('.bg-image-container')
    bigImageContainers.forEach((bigImage) => {
      this.$gsap.to(bigImage, {
        backgroundPositionY: '50%',
        scrollTrigger: {
          trigger: bigImage,
          scrub: 1
        }
      })
    })

    // Force to scroll to top because of hash scrolling
    // Scrollbehavior doesnt work properly
    this.$nextTick(() => {
      window.scrollTo({
        top: 0
      })
    })
  }
}
</script>
