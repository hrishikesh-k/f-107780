import Vue from 'vue'
import VueScrollactive from 'vue-scrollactive' // scroll to anchor
import Inview from 'vueinview' // in view
import VuePrlx from 'vue-prlx'

Vue.use(VueScrollactive)
Vue.use(Inview)
Vue.use(VuePrlx)

import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()