import { createApp } from 'vue'
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/open-sans";
// fontawesome
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar, faSpinner} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'

library.add(regularStar, solidStar, faSpinner);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app")

