import Vue from 'vue'
import VueScrollactive from 'vue-scrollactive' // scroll to anchor

Vue.use(VueScrollactive)

import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()