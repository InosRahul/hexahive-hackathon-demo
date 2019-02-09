<template>
    <section class="section">
         
        <div class="columns">
            
            <div class="column is-4 is-offset-4">
                <img alt="Vue logo" src="../assets/VueLogo.png" style="padding-bottom:20px; margin-bottom:20px;">
                
                
                <router-link class="button is-primary" style="margin-left:10px; margin-top:10px;" :to="'loginstudent'">Login as Student</router-link>
                <br>
                
                <router-link class="button is-primary" style="margin-left:10px; margin-top:10px;" :to="'signupstudent'">Sign Up as Student</router-link>
                <br>
                
                <router-link class="button is-primary" style="margin-left:10px; margin-top:10px;" to="/loginteacher">Login as Teacher</router-link>
               <br>
                <router-link class="button is-primary" style="margin-left:10px; margin-top:10px;" to="/signupteacher">Sign Up as Teacher</router-link>
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

<style scoped>
h2{
    text-align: center;
}
columns{
    align-content: center;
}
section{
    align-content: center;
}
</style>


