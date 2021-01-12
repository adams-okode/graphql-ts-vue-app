import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { Schema } from "./graphql/resolvers";

async function main() {
    const connection = await createConnection({
        type: "sqlite",
        database: "./db.sqlite3",
        entities: [
            "./src/entities/*.ts"
        ],
        synchronize: true
    })
    const schema = await Schema
    const server = new ApolloServer({ schema })
    await server.listen(4000)
}


main()
    .then(() => {
        console.log("Server has started!")
    }).catch((err) => {
        console.log(err)
    })