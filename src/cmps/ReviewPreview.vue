<template>
    <li class="review-preview flex column">
        <h3 class="review-title">{{review.name}}</h3>
        <star-rating :star-size="20" :show-rating=false :rating="review.rate" :read-only=true></star-rating >
        <h4>{{review.readAt}}</h4>
        <h5>{{review.freeTxt}}</h5>
    </li>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    props: ['review'],
    components: {
        StarRating
    }
}
</script>