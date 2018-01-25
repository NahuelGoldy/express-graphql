import {
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLList,
    GraphQLNonNull,
} from 'graphql';
import User from '../users/userType';

const ProfesionType = new GraphQLObjectType({
    name: 'Profesion',
    description: 'Profesion type definition',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        nombre: {
            type: new GraphQLNonNull(GraphQLString),
        },
        profesionales: {
            type: new GraphQLList(User),
        }
    }),
});

export {
    ProfesionType as default,
};