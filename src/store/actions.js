export const fetchData = ({ commit }) => {
    axios.get('https://stock-trader-58055.firebaseio.com/data.json')
            .then(response => {
                if (response.data) {
                    const { stocks, funds, stockPortfolio } = response.data;

                    const portfolio = {
                        stockPortfolio,
                        funds
                    };

                    commit('SET_STOCKS', stocks);
                    commit('SET_PORTFOLIO', portfolio);
                }
            })
}