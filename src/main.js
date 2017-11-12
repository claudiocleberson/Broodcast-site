// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './locale/locale'

Vue.use(VueI18n);
Vue.use(Vuetify);

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'pt-BR',
  messages,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
