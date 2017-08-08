<template>
  <div>
    <section class="hero">
      <h2>Summer party competition</h2>
      <img src="https://s-media-cache-ak0.pinimg.com/736x/21/bd/25/21bd2530ce5deb787f79f2fbf66a944b--beach-illustration-freepik.jpg">
      
      <photouploader :submissions="submissions"></photouploader>
  
    </section>

    <entrygrid></entrygrid>

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
      //
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: palevioletred;
    text-decoration: none;
  }

  button {
    background: #fff;
    padding: 5px 10px;
    border: 2px solid palevioletred;
    border-radius: 2px;
    color: palevioletred;
    font-size: 14px;
  }
</style>
