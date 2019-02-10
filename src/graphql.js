import gql from 'graphql-tag';

//export const SIGNUP_MUTATION = gql `
//mutation SignupMutation($username: String!, $email: String!, $password: String!) {
  //  createUser(
    //    username: $username,
      //  email: $email,
       // password: $password
    //) {
      //  id
       // username
       // email
    //}

  

  export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    insert_students_new(objects: [{
        email: $email,
        password: $password
    }]
    )
}
`;
export const ADD_ATTENDANCE_MUTATION = gql`
mutation addAttendance($date: date!, $present: Int!, $student_id: Int!){
    insert_dotnet(objects: [{
        date: $date,
        present: $present,
        student_id: $student_id
    }]){
        affected_rows
    }
    
    
}
`;

export const VIEW_DATA = gql `
query {
    dotnet{
        student_id
        date
        present

    }
}
`;
export const ADD_ATTENDANCE_MUTATION_AJ = gql`
mutation addAttendance($date: date!, $present: Int!, $student_id: Int!){
    insert_aj(objects: [{
        date: $date,
        present: $present,
        student_id: $student_id
    }]){
        affected_rows
    }
    
    
}
`;

export const VIEW_DATA_AJ = gql `
query {
    aj{
        student_id
        date
        present

    }
}
`;
export const ADD_ATTENDANCE_MUTATION_WT = gql`
mutation addAttendance($date: date!, $present: Int!, $student_id: Int!){
    insert_wt(objects: [{
        date: $date,
        present: $present,
        student_id: $student_id
    }]){
        affected_rows
    }
    
    
}
`;

export const VIEW_DATA_WT = gql `
query {
    wt{
        student_id
        date
        present

    }
}
`;

export const AVG_DATA_DOTNET= gql `
query{
    dotnet_aggregate( where: {date: {_lte:"2019-10-17" _gte:"2019-10-10" },student_id:{_eq: 1}}){
      aggregate{
        count
       avg{
        present
      }
      }
      
    }
    
  }
  `;
  export const AVG_DATA_DOTNET_2= gql `
query{
    dotnet_aggregate( where: {date: {_lte:"2019-10-17" _gte:"2019-10-10" },student_id:{_eq: 2}}){
      aggregate{
        count
       avg{
        present
      }
      }
    }
}`;
export const AVG_DATA_DOTNET_3 = gql `
query{
    dotnet_aggregate( where: {date: {_lte:"2019-10-17" _gte:"2019-10-10" },student_id:{_eq: 3}}){
      aggregate{
        count
       avg{
        present
      }
      }
    }}`;

  export const AVG_DATA_AJ_1 = gql `
query{
    aj_aggregate( where: {date: {_lte:"2019-10-19" _gte:"2019-10-11" },student_id:{_eq: 1}}){
      aggregate{
        count
       avg{
        present
      }
      }
      
    }
    
  }
  `;
  export const AVG_DATA_AJ_2 = gql `
  query{
      aj_aggregate( where: {date: {_lte:"2019-10-19" _gte:"2019-10-11" },student_id:{_eq: 2}}){
        aggregate{
          count
         avg{
          present
        }
        }
        
      }
      
    }
    `;
    export const AVG_DATA_AJ_3 = gql `
    query{
        aj_aggregate( where: {date: {_lte:"2019-10-19" _gte:"2019-10-11" },student_id:{_eq: 3}}){
          aggregate{
            count
           avg{
            present
          }
          }
          
        }
        
      }
      `;
    
  
    export const AVG_DATA_WT_1 = gql `
    query{
        wt_aggregate( where: {date: {_lte:"2019-10-19" _gte:"2019-10-11" },student_id:{_eq: 1}}){
          aggregate{
            count
           avg{
            present
          }
          }
          
        }
        
      }
      `;
 export const AVG_DATA_WT_2 = gql `
query{
    wt_aggregate( where: {date: {_lte:"2019-10-19" _gte:"2019-10-11" },student_id:{_eq: 2}}){
      aggregate{
        count
       avg{
        present
      }
      }
      
    }
    
  }
  `;
  export const AVG_DATA_WT_3 = gql `
      query{
          wt_aggregate( where: {date: {_lte:"2019-10-19" _gte:"2019-10-11" },student_id:{_eq: 3}}){
            aggregate{
              count
             avg{
              present
            }
            }
            
          }
          
        }
        `;
      
