import {
  ApolloClient,
  ApolloCache,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

export type TApolloCache = ApolloCache<NormalizedCacheObject>;

const client = new ApolloClient({
  uri: 'http://lcoalhost:8080/graphql',
  cache: new InMemoryCache()
});

export default client;
