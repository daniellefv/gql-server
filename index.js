const { ApolloServer } = require("apollo-server");
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { addResolversToSchema } = require("@graphql-tools/schema");
const resolvers = require("./resolvers/index");

const SCHEMA_PATH = "./schema/**/*.graphql";

const schema = loadSchemaSync(SCHEMA_PATH, {
  loaders: [new GraphQLFileLoader()],
});

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

const server = new ApolloServer({
  schema: schemaWithResolvers,
});

server.listen().then(({ url }) => {
  console.log(`Running on port ${url}`);
});
