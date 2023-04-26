// Import the Apollo Client
import { gql } from '@apollo/client';

// Apollo GET query for a user logging in
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;