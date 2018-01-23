import {
  GraphQLNonNull,
} from 'graphql';
import isEmail from 'validator/lib/isEmail';

import User from './userType';
import UserInput from './userInputType';
import {createUser, findAndUpdateUser} from '../resolvers/userResolver';

const userMutations = {
  createUser: {
    type: User,
    args: {
      input: {
        type: new GraphQLNonNull(UserInput),
      },
    },
    resolve: async (rootValue, { input }) => {
      return createUser(input);
    }
  },
  updateUser: {
    type: User,
    args: {
      input: {
        type: new GraphQLNonNull(UserInput),
      },
    },
    resolve: async (rootValue, { input }) => {
      return findAndUpdateUser(input);
    }
  }
};

export {
  userMutations as default,
};
