<template>
  <section class="long-txt">
    <section class="book-desc flex column">
      {{ descToShow }}
    </section>
    <section class="longTxt-btn">
      <button v-if="desc.length > 100" @click="toggleBtnTxt">
        {{ btnTxt }}
      </button>
    </section>
  </section>
</template>

<script>
export default {
  props: ['desc'],
  data() {
    return {
      isReadMore: true,
    }
  },
  computed: {
    btnTxt() {
      const btnTxt = this.isReadMore ? 'Read More' : 'Read Less'
      return btnTxt
    },
    descToShow() {
      let textToShow = this.desc
      if (this.isReadMore && this.desc.length > 100)
        textToShow = textToShow.slice(0, 99) + '...'
      return textToShow
    },
  },
  methods: {
    toggleBtnTxt() {
      this.isReadMore = !this.isReadMore
    },
  },
}
</script>