<template>
    <section class="section">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h2 class="title has-text-centered">Login</h2>

                <form method="POST" @submit.prevent="login">
                    <div class="field">
                        <label class="label">E-Mail Address</label>

                        <p class="control">
                            <input
                                type="email"
                                class="input"
                                v-model="email">
                        </p>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>

                        <p class="control">
                            <input
                                type="password"
                                class="input"
                                v-model="password">
                        </p>
                    </div>
                    <div class="field">
                        <label class="label">Enrollment Number</label>

                        <p class="control">
                            <input
                                type="password"
                                class="input"
                                v-model="enroll_no">
                        </p>
                    </div>

                    <p class="control">
                        <button class="button is-primary is-fullwidth is-uppercase">Login</button>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'LoginTeacher',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
                (user) => {
                    this.$router.replace('teacherhome')
                },
                function(err){
                    alert('OOPS' +err.message)
                }
            );

        } 
    }
}
</script>