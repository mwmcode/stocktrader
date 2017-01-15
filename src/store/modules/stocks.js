import stocks from '../../_data';

const state = {
    stocks: []
};

// reducers
const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * ( 1 + Math.random() - .5));
        });
    }
};

// commit the mutations (call reducers)
// will be called as this.$store.dispatch("actionName");
const actions = {
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => state.stocks
};

export default { state, mutations, actions, getters };