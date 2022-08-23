<template>
  <section id="tarieven">
    <div class="max-w-screen-lg mx-auto px-4 py-10 animate">
      <div class="bg-white shadow-xl p-10">
        <h1>
          Tarieven
        </h1>
        <br>
        <div class="flex flex-col sm:flex-row gap-6 sm:gap-10">
          <div class="w-full sm:w-1/2">
            <p>De dienstverlening is gevarieerd en niet altijd standaard. Voor tarieven en prijzen neemt u vrijblijvend contact met mij op. Alles kan wat nodig en mogelijk is. Wat er niet is wordt gemaakt of geregeld.</p>
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
        <contact-block :company-details="companyDetails" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TarievenSection',
  props: {
    services: {
      type: Array,
      default () {
        return []
      }
    },
    companyDetails: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
