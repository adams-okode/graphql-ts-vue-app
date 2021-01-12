import { buildSchema } from "type-graphql";
import { BookResolver } from "./book/book.resolver";

const schema = buildSchema({
    resolvers: [BookResolver]
})
export const Schema = schema