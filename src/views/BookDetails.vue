<template>
  <section v-if="book" class="book-details-cmp">
    <section class="book-details flex space-between">
      <section class="book-img flex">
        <img :src="book.thumbnail" alt="" />
        <span v-if="book.listPrice.isOnSale" class="on-sale-banner"
          >On sale</span
        >
      </section>
      <book-details-info :book="book" />
      <section class="book-details-btns flex column space-between">
        <section class="action-btns flex column">
          <button>
            <router-link class="clean-link" :to="`/book`">Back</router-link>
          </button>
          <button @click="removeBook">Remove</button>
        </section>
        <section class="next-prev-btns flex column">
          <button @click="nextPrevBook(-1)">Previuos Book</button>
          <button @click="nextPrevBook(1)">Next Book</button>
        </section>
      </section>
    </section>
    <book-review :bookReviews="book.reviews" @addReview="addReview" />
  </section>
</template>

<script>
import LongTxt from '@/cmps/LongTxt.vue'
import BookDetailsInfo from '@/cmps/BookDetailsInfo.vue'
import BookReview from '@/cmps/BookReview.vue'

export default {
  data() {
    return {
      book: null,
      nextBookId: null,
      prevBookId: null,
    }
  },
  async created() {
    const bookId = this.$route.params.id
    this.getBook(bookId)
    this.getNextPrevBookId(bookId)
  },
  components: {
    LongTxt,
    BookDetailsInfo,
    BookReview,
  },
  methods: {
    async removeBook() {
      await this.$store.dispatch({
        type: 'removeBook',
        id: this.book._id,
        title: this.book.title,
      })
      this.$router.push('/book')
    },
    async addReview(review) {
      const bookToSave = { ...this.book }
      bookToSave.reviews.push(review)
      await this.$store.dispatch({
        type: 'saveBook',
        book: bookToSave,
        comment: 'reviewAdded',
      })
      // this.getBook()
    },
    async getBook(bookId) {
      this.book = await this.$store.dispatch({
        type: 'getBookById',
        id: bookId,
      })
    },
    getNextPrevBookId(bookId) {
      ;[this.prevBookId, this.nextBookId] = this.$store.getters.nextPrevBookId(
        bookId
      )
    },
    nextPrevBook(diff) {
      const nextPrevBookId = diff > 0 ? this.nextBookId : this.prevBookId
      this.$router.push(`/book/${nextPrevBookId}`)
    },
  },
  watch: {
    $route(oldVal, newVal) {
      const bookId = this.$route.params.id
      this.getBook(bookId)
      this.getNextPrevBookId(bookId)
    },
  },
}
</script>