<script>
import SearchBar from './SearchBar.vue';
import { store } from '../data/store'

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
    components: { SearchBar },
    emits: ['update-title', 'search-title'],
}
</script>

<template>
    <header class="d-flex align-item-center">
        <!-- Navbar -->
        <nav class="container d-flex align-item-center justify-content-between">

            <!-- left Navbar -->
            <div class="left-navbar">
                <h1 class="mt-5"><a href="#">BOOLFLIX</a></h1>
            </div>

            <!-- right Navbar -->
            <div class="right-navbar d-flex align-item-center">
                <search-bar placeholder="cerca..." @term-change="$emit('update-title', $event)"
                    @form-submit="$emit('search-title', $event)"></search-bar>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 150px;
    background-color: black;

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 5;

    a {
        text-decoration: none;
        color: red;
    }
}
</style>