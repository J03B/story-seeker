const express = require('express');

// Adding Apollo Server to the project's server
const { ApolloServer } = require('apollo-server-express');

const path = require('path');

// Replace routes with Mongo schemas and new middleware
const { authMiddleware } = require('./utils/auth');

// const routes = require('./routes');
const {typeDefs, resolvers} = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Defining Apollo Server features
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Replace the routes using with redirector to prd build html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Replacing the old express listening port with the new Apollo Server GraphQL schema
const storySeekerApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};
  
// Call the async function to start the server
storySeekerApolloServer(typeDefs, resolvers);
