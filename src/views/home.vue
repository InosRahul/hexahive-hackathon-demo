<template>
    <section class="section">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h2 class="title has-text-centered">Login</h2>
                
                <router-link class="navbar-item" :to="'loginstudent'">Login as Student</router-link>
                
                
                <router-link class="navbar-item" :to="'signupstudent'">Sign Up as Student</router-link>
                
                <router-link class="navbar-item" to="/loginteacher">Login as Teacher</router-link>
               
                <router-link class="navbar-item" to="/signupteacher">Sign Up as Teacher</router-link>
            </div>
        </div>
    </section>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'home',
     methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('home')
      })
    }
  }
}
</script>
>

