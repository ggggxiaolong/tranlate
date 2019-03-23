import "reflect-metadata";
import {createConnection} from "typeorm";
import {ApolloServer} from 'apollo-server';
import {resoler} from './resolvers';
import {typeDef} from './schema';

const server = new ApolloServer({typeDefs : typeDef, resolvers: resoler});

createConnection().then(async connection => {
    server.listen()
    .then(({url}) => console.log(`🚀 Server ready at ${url}`))
    .catch(error => console.log(error));

}).catch(error => console.log(error));
