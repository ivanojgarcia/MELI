import { ApolloServer, gql } from 'apollo-server';
import {
    typeDefs,
    resolvers
} from './graphql';

// Init Server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Run the server
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});