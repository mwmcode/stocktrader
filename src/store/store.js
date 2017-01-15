import Vuex from 'vuex';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

import * as actions from './actions';


export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
});