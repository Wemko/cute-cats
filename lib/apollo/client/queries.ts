import { gql } from "@apollo/client";

export const getCuteCats = gql`
  query getCuteCats {
    getCuteCats {
      id
      url
    }
  }
`;

