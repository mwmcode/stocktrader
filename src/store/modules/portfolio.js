const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCKS' (state, { id, price, quantity }) {
        const record = state.stocks.find( item => item.id == id );
        
        if (record) record.quantity += quantity;
        else state.stocks.push({id, quantity});

        state.funds -= price * quantity;
    },
    'SELL_STOCKS' (state, { id, price, quantity }) {
        const record = state.stocks.find( item => item.id == id );

        if (record.quantity > quantity) record.quantity -= quantity;
        else state.stocks.splice(state.stocks.indexOf(record));

        state.funds += price * quantity;
    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = (portfolio.stockPortfolio) ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    buyStocks: ({ commit }, order) => {
        commit('BUY_STOCKS', order);
    },
    sellStocks: ({ commit }, order) => {
        commit('SELL_STOCKS', order);
    }
};

const getters = {
    funds: state => state.funds,

    stockPortfolio: (state, getters) => { // the main $store.getters
        return state.stocks.map(stock => {
            const record = getters.stocks.find(item => item.id == stock.id);
            // for each stock in my personal stocks[] find its equivilant in the main
            // stocks[] and fetch name & price from it
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            };
        });
    }
}

export default { state, mutations, actions, getters };