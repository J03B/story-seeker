const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

    // GET request queries to retrieve user and book information
    Query: {
        users: async () => {
            return User.find().populate('savedBooks');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('savedBooks');
        },
        books: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Book.find(params);
        },
        book: async (parent, { bookId }) => {
            return Book.findOne({ _id: bookId });
        },
    },

    // POST requests to add users, start login sessions, and books
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addBook: async (parent, { description }, context) => {
            if (context.user) {
                const book = await Book.create({
                    description,
                    author: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { books: book._id } }
                );

                return book;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        // DELETE request to remove books from the User's favorites list
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const book = await Book.findOneAndDelete({
                    _id: bookId,
                    author: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { books: book._id } }
                );

                return book;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;