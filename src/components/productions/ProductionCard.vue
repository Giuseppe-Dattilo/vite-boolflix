<script>
export default {
    name: 'ProductionCard',
    props: {
        element: Object
    },
    computed: {
        hasFlag() {
            const flags = ['it', 'en']
            return flags.includes(this.element.original_language);
        },
        flagSrc() {
            const url = new URL(`../../assets/img/${this.element.original_language}.png`, import.meta.url)
            return url.href;
        },
        vote() {
            return Math.ceil(this.element.vote_average / 2)
        }
    }
};

</script>

<template>
    <div class="card">
        <div class="movie-poster">
            <img class="img-fluid" v-if="element.poster_path"
                :src="`https://image.tmdb.org/t/p/w342${element.poster_path}`" :alt="element.title">
            <div v-else>
                <img :src="`https://www.altavod.com/assets/images/poster-placeholder.png`" :alt="element.title">
            </div>
        </div>
        <!-- features  -->
        <ul class="list-group text-center">
            <li class="list-group-item">Titolo: {{ element.title || element.name }}</li>
            <li class="list-group-item">Titolo Originale: {{ element.original_title || element.original_name }}</li>
            <li class="list-group-item prod-flag"><img v-if="hasFlag" class="img fluid" :src="flagSrc"
                    :alt="element.original_language">
                <div v-else>{{ element.original_language }}</div>
            </li>
            <li class="list-group-item">
                <font-awesome-icon v-for="n in 5" :icon="n <= vote ? 'fa-solid' : 'fa-regular'"
                    class="fa-star"></font-awesome-icon>
            </li>
        </ul>
    </div>

</template>

<style lang="scss" scoped>
.card {
    height: 450px;
    background-color: black;

    position: relative;

    img {
        height: 100%;
        width: auto;
    }
}

.movie-poster {
    height: 100%;

    position: absolute;
    z-index: 1;

}

ul {
    height: 100%;
    width: auto;

    li {
        color: white;
        background-color: black;
        color: white;
    }
}

.prod-flag {
    img {
        height: 80px;
        width: auto;
    }
}
</style>