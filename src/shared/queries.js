import { gql } from "@apollo/client";

export const GET_PARAMETERS = gql`
  query GetParameters {
    parameters {
      id
      parameter
      parameterDescription
      parameterOrder
    }
  }
`;
