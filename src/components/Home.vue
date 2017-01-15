<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <h6>You may Save and Load your Data</h6>
        <h6>Click on 'End Day' to begin a New Day!</h6>
        <hr>
        <p>Your Funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters(['funds'])
        }
    }
</script>

<style scoped>

</style>