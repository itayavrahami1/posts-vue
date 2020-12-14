<template>
  <li class="book-preview flex column">
    <section class="book-img full">
      <img :src="book.thumbnail" alt="" />
      <span v-if="book.listPrice.isOnSale" class="on-sale-banner">On sale</span>
    </section>
    <section class="book-info">
      <h3>{{ book.title }}</h3>
      <h4>Price: {{ priceToShow }}</h4>
    </section>
  </li>
  <!-- OPTION WITH ROUTE -->
  <!-- <router-link class="clean-link" :to="`/book/${book._id}`">
      <article className="book-preview">
        <img :src="book.thumbnail" alt="" />
        <h3>{{ book.title }}</h3>
        <h4>Price: {{ priceToShow }}</h4>
      </article>
    </router-link> -->
</template>

<script>
import { utilService } from '@/services/utils.js'
export default {
  props: ['book'],
  computed: {
    priceToShow() {
      return utilService.getPrice(
        this.book.listPrice.amount,
        this.book.listPrice.currencyCode
      )
    },
  },
}
</script>