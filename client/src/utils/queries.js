// Import the Apollo Client
import { gql } from '@apollo/client';

// Apollo GET query for a user logging in
export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`;