import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faPhone,
  faEnvelope,
  faCheck,
  faMapMarkerAlt,
  faArrowLeft,
  faExternalLink
} from '@fortawesome/pro-light-svg-icons'
import {
  faLinkedin,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faBars,
  faPhone,
  faEnvelope,
  faCheck,
  faMapMarkerAlt,
  faLinkedin,
  faFacebookSquare,
  faArrowLeft,
  faExternalLink
)

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
