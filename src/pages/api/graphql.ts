// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import resolvers from 'lib/apollo/server/resolvers'
import schema from 'lib/apollo/server/schema'

const apolloServer: ApolloServer = new ApolloServer({ typeDefs: schema, resolvers: resolvers })

export default startServerAndCreateNextHandler(apolloServer);
