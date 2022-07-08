<template>
  <div class="pt-32 sm:pt-56">
    <section>
      <div class="max-w-screen-lg mx-auto px-4 py-10">
        <h1 class="font-serif text-5xl text-orange">
          Cookie Verklaring
        </h1>
        <br>
        <p>
          Deze website maakt gebruik van zogeheten session cookies. Session cookies zijn
          functionele cookies, bedoeld om de website goed te laten werken. Voor het
          gebruik van session cookies is het niet vereist om de internetgebruiker eerst om
          toestemming te vragen. Deze cookies bevatten elke keer dat je de website bezoekt
          een ander, tijdelijk nummer. De session cookies worden na het afsluiten van je
          browser verwijderd.
        </p>
        <p>
          Voor geanonimiseerd volgen van gebruikersgedrag wordt gebruik gemaakt van Google
          Analytics. Gegevens die worden verzameld door Google zijn:
        </p>
        <ul class="fa-ul" style="--fa-li-margin: 1.5em">
          <li>
            <span class="fa-li text-orange">
              <font-awesome-icon :icon="['fal', 'check']" />
            </span>
            cookies;
          </li>
          <li>
            <span class="fa-li text-orange">
              <font-awesome-icon :icon="['fal', 'check']" />
            </span>
            IP-adres (gemaskeerd);
          </li>
          <li>
            <span class="fa-li text-orange">
              <font-awesome-icon :icon="['fal', 'check']" />
            </span>
            user agents (browsers, operating system);
          </li>
          <li>
            <span class="fa-li text-orange">
              <font-awesome-icon :icon="['fal', 'check']" />
            </span>
            gebruikte zoektermen om via externe zoekmachines op onze website te komen;
          </li>
          <li>
            <span class="fa-li text-orange">
              <font-awesome-icon :icon="['fal', 'check']" />
            </span>
            gebruikte links binnen de website;
          </li>
          <li>
            <span class="fa-li text-orange">
              <font-awesome-icon :icon="['fal', 'check']" />
            </span>
            gebruikte links om op onze website te komen
          </li>
        </ul>
        <br>
        <p>
          Gegevens worden door Google voor een periode van 14 maanden bewaard en hierna
          verwijderd.<br>
          Lees het
          <a
            href="https://policies.google.com/privacy"
            class="underline"
            target="_blank"
            rel="noopener"
          >
            privacybeleid van Google
          </a> voor meer informatie, alsook het
          <a
            href="https://support.google.com/analytics/answer/6004245"
            class="underline"
            target="_blank"
            rel="noopener"
          >
            specifieke privacybeleid van Google Analytics
          </a>.
        </p>
        <p>U kunt via browserinstellingen het volgen met cookies uitzetten.</p>
        <br>
        <nuxt-link class="bg-orange text-white shadow-md rounded-sm p-3" to="/#home">
          <font-awesome-icon :icon="['fal', 'arrow-left']" /> Terug naar homepage
        </nuxt-link>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'CookiesPage',
  head () {
    return {
      title: 'Cookie Verklaring - Butter Uitvaartservice',
      description: ''
    }
  },
  mounted () {
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
