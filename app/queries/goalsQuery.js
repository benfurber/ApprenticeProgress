import gql from "graphql-tag";

const goalsQuery = gql`
  {
    goals {
      id
      actions
      description
      evidence
      score
      tag
      title
    }
  }
`;

export { goalsQuery };
