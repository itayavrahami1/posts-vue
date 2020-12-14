<template>
    <section class="google-book-list-cmp">
        <google-book-preview v-for="(currBook,idx) in books" :key="idx" 
        :book="currBook" @addBook="addGoogleBook"/>
    </section>
</template>

<script>
import GoogleBookPreview from '@/cmps/GoogleBookPreview.vue'

export default {
    props: ['books'],
    methods: {
        async addGoogleBook(book){
            await this.$store.dispatch({type: 'saveBook', book: book})
            
        }
    },
    components: {
        GoogleBookPreview,
    }
}
</script>