<template>
  <div>
    <section class="photo-uploader col-xs-12">
      <div class="grid-row">
        <div class="col-md-5">
          <h2>Upload your nails for your chance to win</h2>
          <input v-model="newEntry.slack" type="text" placeholder="Slack handle">
          <p>Please use your Beamly Slack username</p>
          <input type="file">
        </div>

        <div class="col-md-5">
          <button v-on:click="register">Enter the competition!</button> 
        </div>        
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'photouploader',
  props: ['submissions'],
  data () {
    return {
      newEntry: {
        slack: "",
        photo: "",
        likes: 0
      }
    }
  },
  computed: {

  },
  methods: {
    register: function() {
      console.log('register method fired');
      this.submissions.push({
        id: this.submissions.length + 1,
        src: this.newEntry.photo,
        slack: this.newEntry.slack,
        likes: this.newEntry.likes
      });
      console.log(this.newEntry);
      this.newEntry = {};
      localStorage.setItem('submissions', JSON.stringify(this.submissions));
    }
  },
  events: {

  }
}
</script>


<style lang="scss" scoped>
   @import '../scss/main.scss'
</style>

