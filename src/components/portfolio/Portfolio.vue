<template>
    <div>
        <Stock v-for="stock in stocks" :stock="stock"> </Stock>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Stock from './Stock.vue';

    export default {
        components: {
            Stock
        },

        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        } 
    }
</script>

<style scoped>

</style>    