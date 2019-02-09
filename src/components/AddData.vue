<template>
    <section class="section">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h2 class="title has-text-centered">Add Dotnet Attendance</h2>
                

                <form method="POST" @submit.prevent="signup">
                    <div class="field">
                        <label class="label">Enrollment Number</label>
                        

                        <p class="control">
                            <input
                                type="number"
                                class="input"
                                v-model="student_id">
                        <label class="label">Present</label>
                            <input
                                type="number"
                                class="input"
                                v-model="present">
                         <label class="label">Date</label>
                            <input
                                type="date"
                                class="input"
                                v-model="date">
                        </p>
                    </div>

                   
                    <p class="control">
                        <button class="button is-primary is-fullwidth is-uppercase">Add Attendance</button>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { ADD_ATTENDANCE_MUTATION } from '@/graphql'

export default {
    name: 'AddData',
    data () {
        return {
           
            student_id: null,
            date: '',
            present: null
        }
    },
    methods: {
        signup () {
            this.$apollo
                .mutate({
                    mutation: ADD_ATTENDANCE_MUTATION,
                    variables: {
                       
                        student_id: this.student_id,
                        date: this.date,
                        present: this.present
                    }
                })
                
            }
        }
    }
</script>