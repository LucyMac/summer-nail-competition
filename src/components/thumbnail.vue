<template>
  <div>
    <li v-for="submission in submissions" class="thumbnail">
        <img class="thumbnail__img" :src="submission.src" alt="nail picture" />
        <p class="submission__name">{{ submission.name }}</p>
         <upvote :likes="submission.likes"></upvote>
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
      //
    }
  }
</script>


<style>

.thumbnail {
  float: left;
  width: 20%;
  margin: 20px;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 2px;
}

.thumbnail__img {
  width: 100%;
}

</style>