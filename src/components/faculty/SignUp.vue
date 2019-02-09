<template>
    <section class="section">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h2 class="title has-text-centered">Signup</h2>

                <form method="POST" @submit.prevent="signup">
                    <div class="field">
                        <label class="label">First Name</label>
                        

                        <p class="control">
                            <input
                                type="text"
                                class="input"
                                v-model="firstname">
                        <label class="label">Last Name</label>
                            <input
                                type="text"
                                class="input"
                                v-model="lastname">
                         <label class="label">Enrollment Number</label>
                            <input
                                type="number"
                                class="input"
                                v-model="enroll_no">
                        </p>
                    </div>

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

                    <p class="control">
                        <button class="button is-primary is-fullwidth is-uppercase">SignUp</button>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { SIGNUP_MUTATION } from '@/graphql'

export default {
    name: 'SignUp',
    data () {
        return {
            firstname: '',
            lastname: '',
            enroll_no: null,
            email: '',
            password: ''
        }
    },
    methods: {
        signup () {
            this.$apollo
                .mutate({
                    mutation: SIGNUP_MUTATION,
                    variables: {
                        firstname: this.firstname,
                        lastname: this.lastname,
                        enroll_no: this.enroll_no,
                        email: this.email,
                        password: this.password
                    }
                })
                .then(response => {
                    // redirect to login page
                    this.$router.replace('/login')
                })
            }
        }
    }
</script>