<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Attendance Tracker"/>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  methods:{
    logout: function(){
      firebase.auth().signOut().then(()=>{
        this.$router.replace('home')
      })
    }
  }
}
</script>
>
