import { gql } from "@apollo/client/core";

export const GET_PRODUCTS = gql`
  query {
    products {
      totalItems
      items {
        id
        name
        slug
        description
        featuredAsset {
          id
          preview
        }
      }
    }
  }
`;
