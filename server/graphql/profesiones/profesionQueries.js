import {
    GraphQLList
} from 'graphql';
import Profesion from './profesionType';

const profesionQueries = {
    profesiones: {
        type: new GraphQLList(Profesion),
        resolve: async () => getProfesiones(),
    },
}

export {
    profesionQueries as default,
};