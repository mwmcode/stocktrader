import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';

const routes =  [
    { path: '/', component: Home},
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks }
];

export default new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active'
});