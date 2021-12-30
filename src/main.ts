import Vue from 'vue';
import AtgFromBuilder from '@atg/vue-form-builder';
import App from './App.vue';
import i18n from './i18n';
import vuetify from './vuetify';

Vue.use(AtgFromBuilder);

Vue.config.productionTip = false;

new Vue({
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
