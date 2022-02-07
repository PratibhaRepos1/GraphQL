const { ApolloServer, gql } = require("apollo-server");
//GraphQL scaler type String, Int, Float, Boolean
const typeDefs = gql`
    type Query{
        hello:String
        numberOfPen: Int
        price: Float
        isCool: Boolean
    }
`

const resolvers = {
    Query: {
        hello: () => {
            return "World! Welcome"
        },
        numberOfPen: () => {
            return 55
        },
        price: () => {
            return 1.9 + 2.2
        },
        isCool: () => false
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});


server.listen().then(({ url }) => {
    console.log("Server is ready at " + url);
});