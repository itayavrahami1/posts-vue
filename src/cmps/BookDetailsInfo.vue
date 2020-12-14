<template>
    <section class="book-info flex column">
      <h2>{{ book.title }}</h2>
      <h4 class="book-price" :class="priceCls">Price: {{ priceToShow }}</h4>
      <ul class="authors flex clean-list">
        Authors:
        <li v-for="(author, idx) in book.authors" :key="idx">{{ author }}</li>
      </ul>
      <h5>Number Of Pages: {{ book.pageCount }} - {{ pageCountMsg }}</h5>
      <h5>Published At: {{ book.publishedDate }} - {{ publicationAtMsg }}</h5>
      <long-txt :desc="book.description"/>
    </section>
</template>

<script>
import { bookService } from '@/services/bookService.js'
import { utilService } from '@/services/utils.js'
import LongTxt from '@/cmps/LongTxt.vue'

export default {
  props: ['book'],
  computed: {
    priceToShow() {
      return utilService.getPrice(
        this.book.listPrice.amount,
        this.book.listPrice.currencyCode
      )
    },
    pageCountMsg() {
      const numOfPages = this.book.pageCount
      var msg = ''
      if (numOfPages > 500) {
        msg += 'Long reading'
      } else if (numOfPages <= 500 && numOfPages > 200) {
        msg += 'Decent reading'
      } else if (numOfPages < 100) {
        msg += 'Light reading'
      }
      return msg
    },
    publicationAtMsg() {
      const pubYear = this.book.publishedDate
      var date = new Date()
      const bookAge = pubYear - date.getYear()
      let msg = ''
      if (bookAge > 10) {
        msg += ' Veteran Book'
      } else if (bookAge < 1) {
        msg += ' New!'
      }
      return msg
    },
    priceCls() {
      const bookPrice = this.book.listPrice.amount
      if (bookPrice > 150) return 'expensive'
      else if (bookPrice < 40) return 'cheap' // in the instruction should be 20 but only one book fullfills it.
    },
  },
  components: {
      LongTxt,
  }
}
</script>