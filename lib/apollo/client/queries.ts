import { gql } from "@apollo/client";

export const getCuteCats = gql`
  query getCuteCats {
    getCuteCats {
      id
      url
    }
  }
`;

export const getCuteCat = gql`
  query getCuteCat($id: String!) {
    getCuteCat (id: $id) {
      id
      url
    }
  }
`;

