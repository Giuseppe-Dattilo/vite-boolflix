<script>
import ProductionSection from './productions/ProductionSection.vue';
export default {
    name: 'AppMain',
    components: { ProductionSection }
}
</script>

<template>
    <main class="container">
        <production-section collection="movies" title="Movies"></production-section>
        <production-section collection="movies" title="Series"></production-section>
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-top: 150px;
    color: white;
}
</style>