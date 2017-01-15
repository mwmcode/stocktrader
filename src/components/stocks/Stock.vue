<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>Price: {{ stock.price }}</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        v-model="quantity"
                        :class="{ danger: insufficientFunds }"
                        type="number" class='form-control' placeholder="Quantity"
                    >
                </div>
                <div class="pull-right">
                    <button 
                        @click="buy"
                        :disabled="insufficientFunds || quantity < 1 || !Number.isInteger(quantity)"
                        class="btn " 
                        :class="[insufficientFunds ? 'btn-danger' : 'btn-success']"
                    >
                        {{ insufficientFunds ? 'No can do' : 'Buy' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        props: ['stock'],
        
        data() {
            return {
                quantity: 0
            };
        },
        computed: {
            ...mapGetters(['funds']),
            insufficientFunds() {
                return (this.quantity * this.stock.price) > this.funds;
            }
        },
        methods: {
            buy() {
                const order = {
                    id: this.stock.id,
                    price: this.stock.price,
                    quantity: this.quantity
                };
                
                this.$store.dispatch('buyStocks', order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>