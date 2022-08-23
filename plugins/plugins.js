import Vue from 'vue'
import VueScrollactive from 'vue-scrollactive'

import smoothscroll from 'smoothscroll-polyfill' // scroll to anchor

Vue.use(VueScrollactive)

smoothscroll.polyfill()
