<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>Price: {{ stock.price }} | {{ stock.quantity }} </small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        v-model="quantity"
                        type="number" class='form-control' placeholder="Quantity"
                        :class="{ danger: insufficientQuantity }"
                    >
                </div>
                <div class="pull-right">
                    <button 
                        @click="sell"
                        :disabled="insufficientQuantity || quantity < 1 || !Number.isInteger(quantity)"
                        class ="btn"
                        :class="[insufficientQuantity ? 'btn-danger' : 'btn-success']"
                    >
                        {{ insufficientQuantity ? 'No can do' : 'Sell' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: ['stock'],
        
        data() {
            return {
                quantity: 0
            };
        },
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions([
                'sellStocks'
            ]),
            sell() {
                const order = {
                    id: this.stock.id,
                    price: this.stock.price,
                    quantity: this.quantity,
                };
                this.sellStocks(order);
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