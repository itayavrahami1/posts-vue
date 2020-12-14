<template>
  <section class="book-filter">
    <label>Title:</label>
    <input
      autocomplete="off"
      type="text"
      name="title"
      v-model="filterBy.title"
      @input="setFilter"
      placeholder="Search a book.."
    />
    <label>Price:</label>
    <input
      autocomplete="off"
      type="number"
      name="min"
      v-model.number="filterBy.min"
      @input="setFilter"
      placeholder="Min"
    />
    <span>-</span>
    <input
      autocomplete="off"
      type="number"
      name="max"
      v-model.number="filterBy.max"
      @input="setFilter"
      placeholder="Max"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        title: '',
        min: '',
        max: Infinity,
      },
    }
  },
  methods: {
    setFilter() {
      // const filterToReturn = this.filterBy
      this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)))
    },
  },
}
</script>