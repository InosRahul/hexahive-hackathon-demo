<template>
    <section class="section">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h2 class="title has-text-centered">View AJ Attendance</h2>
            
                    <div class="column is-9">
                    <h2 class="title">Users</h2>

                    <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Present</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="items in aj"
                                :key="items.date">
                                    <td>{{ items.student_id }}</td>
                                    <td>{{ items.present }}</td>
                                    <td>
                                        {{items.date}}
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                <h2 class="title has-text-centered">View DotNet Attendance</h2>
                <h2 class="title">Users</h2>
                <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Present</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="items in dotnet"
                                :key="items.date">
                                    <td>{{ items.student_id }}</td>
                                    <td>{{ items.present }}</td>
                                    <td>
                                        {{items.date}}
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                <h2 class="title has-text-centered">View WT Attendance</h2>
                <h2 class="title">Users</h2>
                <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Present</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="items in wt"
                                :key="items.date">
                                    <td>{{ items.student_id }}</td>
                                    <td>{{ items.present }}</td>
                                    <td>
                                        {{items.date}}
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        
            </div>
            <button @click="logout">Logout</button>
        
    </section>

    
</template>
>


<script>
import { VIEW_DATA_AJ } from '@/graphql'
import {VIEW_DATA} from '@/graphql'
import {VIEW_DATA_WT} from '@/graphql'
import firebase from 'firebase'
export default {
    name: 'ViewData',
    data: ()=>({
        student_id: null,
        date: '',
        present: null,
    }),
       apollo:{
           aj:{
               query: VIEW_DATA_AJ
           },
           dotnet:{
             query: VIEW_DATA
           },
           wt:{
             query: VIEW_DATA_WT
           }
       },
       methods:{
      logout: function(){
      firebase.auth().signOut().then(()=>{
        this.$router.replace('home')
      })
    }
       }

    }
    

</script>
