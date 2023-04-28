const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

    // GET request queries to retrieve user and book information
    Query: {
        // REFACTOR TO USE THE me QUERY
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select(
                  '-__v -password'
                );
                return userData;
            }
            throw new AuthenticationError('Not logged in.');
        },
        
        // users: async () => {
        //     return User.find().populate('books');
        // },
        // user: async (parent, { username }) => {
        //     return User.findOne({ username }).populate('books');
        // },
        // books: async (parent, { username }) => {
        //     const params = username ? { username } : {};
        //     return Book.find(params);
        // },
        // book: async (parent, { bookId }) => {
        //     return Book.findOne({ _id: bookId });
        // },
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
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { books: description } },
                    { new: true, runValidators: true }
                );

                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        // DELETE request to remove books from the User's favorites list
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { books: { bookId: bookId } } },
                    { new: true }
                );

                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;