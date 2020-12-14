<template>
    <section class="add-book">
        <input type="text" v-model="bookTitle" placeholder="Search a book..." @input="getGoogleBooks">
        <google-book-list v-if="googleBooks" :books="googleBooks"/>
    </section>
</template>

<script>
import { bookService } from '@/services/bookService.js'
import GoogleBookList from '@/cmps/GoogleBookList.vue'

export default {
    data(){
        return {
            bookTitle:'',
            googleBooks: null
        }
    },
    methods: {
        async getGoogleBooks(){
            this.googleBooks = await bookService.getGooglsBookByTitle(this.bookTitle)
            // this.$store.dispatch({type: 'getGoogleBooks', title: this.bookTitle})
        }
    },
    components: {
        GoogleBookList
    }
}
</script>