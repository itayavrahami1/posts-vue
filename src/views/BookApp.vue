<template>
  <!-- <div v-if="!bookToShow.length" class="loading flex justify-center align-center">
    <img src="@/assets/img/loading.svg" />
  </div> -->
  <section class="book-app">
    <book-filter @filtered="setFilter" />
    <book-list :books="booksToShow" @onBook="chooseBook" />
  </section>
</template>

<script>
import { bookService } from '@/services/bookService.js'
import BookList from '@/cmps/BookList.vue'
import BookFilter from '@/cmps/BookFilter.vue'

export default {
  async created() {
    this.loadBooks()
  },
  methods: {
    async loadBooks() {
      this.$store.dispatch({ type: 'getBooks' })
    },
    setFilter(filterBy) {
      this.$store.commit({type:'setBooksFilterBy', filterBy})
    },
    chooseBook(bookId) {
      this.$router.push(`/book/${bookId}`)
    },
  },
  computed: {
    booksToShow() {
      return this.$store.getters.booksToShow
    },
  },
  components: {
    BookList,
    BookFilter,
  },
}
</script>