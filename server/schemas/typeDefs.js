const { gql } = require('apollo-server-express');

// Defining our types for each Apollo request type we'll be doing
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    books: [Book]!
  }

  type Book {
    _id: ID
    authors: String
    description: String
    bookId: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(description: String): [Book]
    book(bookId: ID!): Book
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(description: String!): Book
    removeBook(bookId: ID!): Book
  }
`;

module.exports = typeDefs;