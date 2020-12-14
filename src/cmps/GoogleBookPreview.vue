<template>
    <section class="google-book-preview">
        {{book.volumeInfo.title}}
        <button @click="addBook">+</button>
    </section>
</template>

<script>
export default {
    props: ['book'],
    methods: {
        addBook(){
            this.$emit('addBook',this.book)
        }
    }
}
</script>