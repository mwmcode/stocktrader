import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);

window.Vue = Vue;
window.axios = axios;


window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};
