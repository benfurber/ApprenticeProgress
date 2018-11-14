import gql from "graphql-tag";

import { client } from "utils";

const GETTOKEN = "auth/getToken";

const addToken = userToken => ({
  type: GETTOKEN,
  payload: userToken,
});

const query = userData => {
  const { email, password } = userData;

  return {
    query: gql`
      mutation {
        loginUser(email: ${email}, password: ${password}) {
          user {
            id
            authenticationToken
          }
        }
      }
    `,
  };
};

const fetchToken = (dispatch, userData) => {
  return client.query(query(userData)).then(result => {
    const token = result.data.loginUser.authenticationToken;
    dispatch(addToken(token));
  });
};

export { addToken, fetchToken };
