import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'apollo-server-express';

import bodyParser from 'body-parser';
import schema from './graphql/schema';

const app = express();
const PORT = 3000;

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT, () => {
  console.info(`\n\nExpress listen at http://localhost:${PORT} \n`);
});
