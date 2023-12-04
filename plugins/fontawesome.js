import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faXmark,
  faBars,
  faPhone,
  faEnvelope,
  faCheck,
  faMapMarkerAlt,
  faArrowLeft,
  faExternalLink,
  faDownload,
} from '@fortawesome/pro-light-svg-icons'
import {
  faLinkedinIn,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faXmark,
  faBars,
  faPhone,
  faEnvelope,
  faCheck,
  faMapMarkerAlt,
  faLinkedinIn,
  faFacebookF,
  faArrowLeft,
  faExternalLink,
  faDownload,
)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
