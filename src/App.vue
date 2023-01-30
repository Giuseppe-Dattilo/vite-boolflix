<script>
import { api } from './data';
import axios from 'axios';
import { store } from './data/store';
import SearchBar from './components/SearchBar.vue';
import Loader from './components/Loader.vue';
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'Boolflix',
  components: { SearchBar, Loader, AppMain, AppHeader },
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
  <app-header @update-title="updateTitleFilter" @search-title="searchProductions"></app-header>
  <app-main></app-main>
</template>
 


<style lang="scss">
@use './assets/scss/style.scss';
</style>