import { DocumentNode, gql } from "@apollo/client"

const schema: DocumentNode = gql(`
    type Cat {
        id: String
        url: String
        width: Int
        height: Int
    }

    type Query {
        getCuteCats: [Cat]!
    }
`);

export default schema;