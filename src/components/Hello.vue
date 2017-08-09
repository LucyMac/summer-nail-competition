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
  props: ['submissions'],
  data () {
    return {
      //
    }
  },
  methods: {

  }
}
</script>


<style lang="scss" scoped>
   @import '../scss/main.scss'
</style>
