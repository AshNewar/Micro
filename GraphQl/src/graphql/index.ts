import { ApolloServer } from "@apollo/server";
import { prismaClient } from "../lib/prismaClient";
import {User}from "./user";

const createAppoloGraphqlServer = async () => {
    const gqlServer = new ApolloServer({
        typeDefs:`
        type Query {
            name: String
        }
        type Mutation {
            ${User.mutation}
            
        }`,
        resolvers:{
            Query: {
                ...User.resolvers.queries,
            },
            Mutation: {
                ...User.resolvers.mutations,
            }
        },
    });
    await gqlServer.start();
    return gqlServer;
}
export default createAppoloGraphqlServer;