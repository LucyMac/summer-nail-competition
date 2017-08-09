

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDLaBTFyS18X0XkPDRMNu2OyOkOI8yiEgc",
    authDomain: "nail-competition.firebaseapp.com",
    databaseURL: "https://nail-competition.firebaseio.com",
    projectId: "nail-competition",
    storageBucket: "nail-competition.appspot.com",
    messagingSenderId: "58552732689"
  };
  
let app = Firebase.initializeApp(config)
let db = app.database()
let submissionsRef = db.ref('submissions')

export default {
  name: 'app',
  firebase: {
    submissions: submissionsRef
  }
}


</script>


<style lang="scss" scoped>
   @import 'scss/main.scss'
</style>

