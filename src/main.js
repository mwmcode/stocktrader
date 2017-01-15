import './bootstrap';

import store from './store/store';
import router from './routes';

import App from './App.vue';

// Global filter
Vue.filter('currency', value => '$' + value.toLocaleString());


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
