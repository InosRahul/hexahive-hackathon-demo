<template>
    <section class="section">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h2 class="title has-text-centered">View Dotnet Attendance</h2>
            
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
                </div>
            </div>
        </div>
    </section>

    
</template>
>


<script>
import { VIEW_DATA } from '@/graphql'
export default {
    name: 'ViewData',
    data: ()=>({
        student_id: null,
        date: '',
        present: null,
    }),
       apollo:{
           dotnet:{
               query: VIEW_DATA
           }
       }, 


    }
    

</script>
