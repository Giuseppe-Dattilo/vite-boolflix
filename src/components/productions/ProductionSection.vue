<script>
import productionCard from './productionCard.vue';
import { store } from '../../data/store';
export default {
    name: 'ProductionSection',
    props: {
        title: String,
        collection: String
    },
    components: { productionCard },
    data() {
        return { store }
    }
};
</script>

<template>
    <section :id="collection">
        <h2> {{ title }}</h2>
        <production-card v-for="production in store[collection]" :key="production.id"
            :element="production"></production-card>
    </section>
</template>

<style>

</style>