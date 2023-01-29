<script>

export default {
    nome: 'SearchBar',
    data() {
        return {
            userSearch: ''
        }
    },
    props: {
        placeholder: String,
        buttonLabel: String,
    },
    emits: ['form-submit', 'term-change']
};
</script>

<template>
    <!-- Input -->
    <div class="container">
        <form @submit.prevent="$emit('form-submit')" class="input-group my-5">
            <input v-model.trim="userSearch" @keyup="$emit('term-change', userSearch)" type="text"
                :placeholder="placeholder || 'cerca'" class="form-control">
            <button @click="onSearch" class="btn btn-danger">{{ buttonLabel || 'cerca' }}</button>
        </form>
    </div>
</template>

<style>

</style>