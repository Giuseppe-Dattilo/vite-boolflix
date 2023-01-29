<script>
import { api } from './data';
import axios from 'axios';
import { store } from './data/store';
import SearchBar from './components/SearchBar.vue';
import ProductionCard from './components/productions/productionCard.vue';
import Loader from './components/Loader.vue';
export default {
  name: 'Boolflix',
  components: { SearchBar, ProductionCard, Loader },
  data() {
    return {
      store,
      titleFilter: ''
    }
  },
  computed: {
    axiosConfig() {
      const { key, language } = api;
      return {
        params: {
          language: language,
          api_key: key,
          query: this.titleFilter
        }
      }
    }
  },
  methods: {
    updateTitleFilter(term) {
      this.titleFilter = term
    },

    searchProductions() {
      if (!this.titleFilter) {
        store.movies = [];
        store.series = [];
        return;
      }

      this.fetchApi('search/movie', 'movies');
      this.fetchApi('search/tv', 'series');
    },

    fetchApi(endpoint, collection) {
      axios.get(`${api.baseUri}/${endpoint}`, this.axiosConfig)
        .then(res => {
          store[collection] = res.data.results;
        }).catch(error => {
          console.error(error)
        });
    }
  }
};
</script>

<template>
  <loader v-if="store.isLoading"></loader>
  <header>
    <search-bar placeholder="cerca..." @term-change="updateTitleFilter" @form-submit="searchProductions"></search-bar>
  </header>

  <main>

    <!-- Movies features  -->
    <section>
      <production-card v-for="movie in store.movies" :key="movie.id" :element="movie"></production-card>
    </section>

    <!-- Series features  -->
    <section>
      <production-card v-for="serie in store.series" :key="serie.id" :element="serie"></production-card>
      <!-- <font-awesome-icon icon="fa-solid fa-star" />
      <font-awesome-icon icon="fa-regular fa-star" /> -->
    </section>
  </main>

</template>
 


<style lang="scss">
@use './assets/scss/style.scss';
</style>