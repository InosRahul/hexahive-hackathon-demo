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
                                <th>Count</th>
                                <th>AVg Present</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="items in aj_aggregate"
                                :key="items.count">
                                    <td>{{ items.count }}</td>
                                    <td>{{ items.avg }}</td>
                                   
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

import { AVG_DATA_AJ_1} from '@/graphql'
import { AVG_DATA_AJ_2} from '@/graphql'
import { AVG_DATA_AJ_3} from '@/graphql'



export default {
    name: 'ajavg',
    data: ()=>({
        count: null,
        avg: null,
        
        
    }),
       apollo:{
           aj_aggregate:{
               prefetch: true,
               query: AVG_DATA_AJ_1,
              
           },
           
          
       }, 


    }
    

</script>
