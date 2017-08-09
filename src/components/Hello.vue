<template>
  <div>
    <section class="hero">
      <h2>Summer party competition</h2>
      <img src="https://s-media-cache-ak0.pinimg.com/736x/21/bd/25/21bd2530ce5deb787f79f2fbf66a944b--beach-illustration-freepik.jpg">
      
      <div class="grid-container">
        <div class="grid-row">
          <photouploader :submissions="submissions"></photouploader>
        </div>
      </div>
  
    </section>

      <div class="grid-container">
        <div class="grid-row">
          <entrygrid :submissions="submissions"></entrygrid>
        </div>
      </div>

  </div>
</template>

<script>

import photouploader from './photouploader.vue';
import entrygrid from './entrygrid.vue';

export default {
  name: 'hello',
  components: {
    'photouploader': photouploader,
    'entrygrid': entrygrid
  },
  data () {
    return {
        submissions: [
          {
              id: 0,
              src: 'https://s-media-cache-ak0.pinimg.com/736x/c3/0a/14/c30a14b4a62c2a5c640b693d9d589f09--summer-nail-designs-hue.jpg',
              slack: '@username', 
              likes: 0
          },
          {
              id: 1,
              src: 'https://s-media-cache-ak0.pinimg.com/736x/e8/67/47/e867479240baba528a609c5196663aca--nail-ideas-for-summer-summer-nail-art.jpg',
              slack: '@username',                    
              likes: 5
          },
          {
              id: 2,
              src: 'http://stayglam.com/wp-content/uploads/2015/05/928482_636096789801621_1293490820_n.jpg',
              slack: '@username',                    
              likes: 3
          },
          {
              id: 3,
              src: 'https://s-media-cache-ak0.pinimg.com/736x/bc/79/a6/bc79a607697a3efbe588ebd92f8ad779--pink-yellow-pink-and-gold.jpg',
              slack: '@username',                    
              likes: 7
          },
          {
              id: 4,
              src: 'https://s-media-cache-ak0.pinimg.com/736x/2b/87/d9/2b87d9342c5fa59340d758aa9d6b5f2e--beach-pedicure-ideas-toenails-toe-nails-ideas.jpg',
              slack: '@username',                    
              likes: 0
          },
          {
              id: 5,
              src: 'https://s-media-cache-ak0.pinimg.com/736x/c8/6a/81/c86a81f7db00fb890cb733237095ac5b--beach-vacation-nails-beach-vacations.jpg',
              slack: '@username',                    
              likes: 1
          }
      ]
    }
  },
  mounted: function () {
    // bus.$on('register', function () {
    //   alert('event was heard');
    // })
  },
  methods: {

  }
}
</script>


<style lang="scss" scoped>
   @import '../scss/main.scss'
</style>
