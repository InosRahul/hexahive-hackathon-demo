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