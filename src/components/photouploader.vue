<template>
  <div>
    <section class="photo-uploader">
       <h2>Upload your nails for your chance to win</h2>
      <input v-model="newEntry.name" type="text" placeholder="name">
      <input v-model="newEntry.email" type="email" placeholder="email">
      <p>Please use your Beamly email</p>
       <input type="file"> 
      <button v-on:click="register">Enter the competition!</button> 
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
        name: "",
        email: "",
        photo: "",
        likes: 0
      }
    }
  },
  computed: {

  },
  methods: {
    register: function() {
      this.submissions.push({
        id: this.submissions.length + 1,
        src: this.newEntry.photo,
        name: this.newEntry.name,
        email: this.newEntry.email,
        likes: this.newEntry.likes
      });
      bus.$emit('register');
      this.newEntry = {};
      localStorage.setItem('submissions', JSON.stringify(this.submissions)); 
    }
  },
  events: {

  }
}
</script>
