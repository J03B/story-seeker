const { gql } = require('apollo-server-express');

// Defining our types for each Apollo request type we'll be doing
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    books: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(newBook: BookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;