
import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyparser from 'body-parser';
import cors from 'cors';
import { schema } from './data/schema';


const port = 9000;

const app = express();
app.use(cors(), bodyparser.json());
app.use('/graphql', graphqlExpress({ schema: schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Express Graphql Server is running on ${port}`)
})