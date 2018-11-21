import gql from "graphql-tag";

const loginMutation = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        authenticationToken
      }
    }
  }
`;

export { loginMutation };
