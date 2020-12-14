<template>
  <section class="book-review-cmp flex column space-between">
    <section class="reviews-title">
      <h2>Reviews</h2>
    </section>
    <section v-if="newReview" class="all-reviews flex space-between">
      <ul v-if="reviews" class="book-reviews clean-list">
        <review-preview
          v-for="(currReview, idx) in reviews"
          :key="idx"
          :review="currReview"
        />
      </ul>
      <form autocomplete="off" @submit.prevent="saveReview" class="add-review flex column">
        <label>Name: </label>
        <input
          v-model="newReview.name"
          ref="review-name"
          type="text"
          name="name"
          placeholder="Reader's Name"
        />
        <label>Rate: </label>
        <star-rating :star-size="30" v-model.number="newReview.rate"/>
        <label>Read At: </label>
        <input v-model="newReview.readAt" type="date" name="date" />
        <label>Review: </label>
        <textarea
          v-model="newReview.freeTxt"
          type="text"
          rows="5"
          name="freeTxt"
        />
        <button>Save</button>
      </form>
    </section>
  </section>
</template>

<script>
import { bookService } from '@/services/bookService.js'
import { utilService } from '@/services/utils.js'
import ReviewPreview from '@/cmps/ReviewPreview.vue'
import StarRating from 'vue-star-rating'


export default {
  props: ['bookReviews'],
  data() {
    return {
      reviews: this.bookReviews,
      newReview: null,
    }
  },
  created() {
    this.newReview = this.getEmptyReview()
  },
  mounted() {
    this.$refs['review-name'].focus()
  },
  methods: {
    getEmptyReview() {
      return { name: '', rate: 0, readAt: '', freeTxt: '' }
    },
    saveReview() {
      this.newReview.name = this.newReview.name || `Book's Reader`
      this.newReview.rate = this.newReview.rate || `No Rate`
      this.newReview.readAt = utilService.getDate(this.newReview.readAt) || utilService.getDate()
      this.$emit('addReview', { ...this.newReview })
      this.newReview = this.getEmptyReview()
      this.$refs['review-name'].focus()
    },
  },
  components: {
    ReviewPreview,
    StarRating
  },
}
</script>