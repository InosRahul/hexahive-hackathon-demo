import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql `
mutation Signupmutation($firstname: String!,$lastname: String!, $enroll_no: Int!, $email: String!, $password: String!){
    insert_students_new(objects: [{
      firstname: $firstname,
      lastname: $lastname,
      enroll_no: $enroll_no,
      email: $email,
      password: $password
    }]){
      returning{
        firstname
        lastname
        enroll_no
        email
      }
    }
  }
  `;

  export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    insert_students_new(objects: [{
        email: $email,
        password: $password
    }]
    )
}
`;     