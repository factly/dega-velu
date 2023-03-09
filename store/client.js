import { ApolloClient, InMemoryCache } from '@apollo/client';
//import 'isomorphic-unfetch';
import getConfig from 'next/config';


export const client = new ApolloClient({
  uri: 'https://stag-dega-api.factly.in/query',
  headers: {
    'X-Dega-API-Key': process.env.DEGA_API_KEY,
    'X-Space': parseInt(process.env.SPACE_ID),
  },
  cache: new InMemoryCache(),
});
