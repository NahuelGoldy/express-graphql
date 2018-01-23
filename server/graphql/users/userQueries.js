import {
  GraphQLList,
  GraphQLString
} from 'graphql';
import { getUsers, getUserByEmail } from '../resolvers/userResolver';
import User from './userType';

const userQueries = {
  users: {
    type: new GraphQLList(User),
    resolve: async () => getUsers(),
  },
  user: {
    type: User,
    args: {
      _email: {
        type: GraphQLString
      }
    },
    resolve: async (source, { _email }) => {
      const result = await getUserByEmail(_email);
      return result;
    }
  }
};

export {
  userQueries as default,
};
