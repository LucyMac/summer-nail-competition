<template>
  <div class="grid-row">
    <li v-for="submission in submissions" class="thumbnail col-sm-3">
      <div class="grid-row">
        <img class="thumbnail__img col-xs-12" :src="submission.src" alt="nail picture" />
        <p class="submission__name col-xs-5">{{ submission.slack }}</p>
         <upvote :likes="submission.likes"></upvote>
      </div>
    </li>
  </div>
</template>

<script>

import upvote from './upvote.vue';

export default {
  name: 'thumbnail',
  components: {
    'upvote': upvote
  },
  props: ['submissions'],
  data () {
      return {

      }
    }
  }
</script>


<style lang="scss" scoped>
   @import '../scss/main.scss'
</style>
