// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Parallax from 'vue-parallaxy'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  components: {
    Parallax
  }
}

// Add the specific imported icons
library.add(faEnvelope)
library.add(faUser)
library.add(faFacebook)
library.add(faInstagram)
library.add(faGithub)
library.add(faStackOverflow)
library.add(faLinkedin)

// Enable the FontAwesomeIcon component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
