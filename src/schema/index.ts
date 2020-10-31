import "graphql-import-node";
import { addResolversToSchema, loadSchemaSync } from "graphql-tools";
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import resolvers from "../resolvers/resolverMap";
import { join } from "path";

// const schema5 = await loadSchema('./src/**/*.gql', { // load from multiple files using glob
// loaders: [
// new GraphQLFileLoader()
// ]
// });

const schema = loadSchemaSync(join(__dirname, '/**/*.gql'), {
    loaders: [new GraphQLFileLoader()]
});

const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
});

export default schemaWithResolvers
