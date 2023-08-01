import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: () => {
      return prisma.users.findMany()
    }
  },
};

const typeDefs = gql`
  type User {
    id: ID
    firstname: String
    lastname: String
  }

  type Query {
    users: [User!]!
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server);