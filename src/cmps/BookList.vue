<template>
  <section class="book-list-sec">
    <h3>Library</h3>
    <ul class="book-list clean-list books-grid">
        <book-preview  v-for="currBook in books" :key="currBook._id"
         :book="currBook" @click.native="onBookClick(currBook._id)"/>
    </ul>
  </section>
</template>

<script>
import BookPreview from "@/cmps/BookPreview.vue";

export default {
  props: ["books"],
  methods:{
    onBookClick(bookId){
      this.$emit('onBook', bookId)
    }
  },
  components: {
      BookPreview,
  }
};
</script>