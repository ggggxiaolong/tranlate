import { gql} from 'apollo-server';

export const typeDef = gql`
type Query {
    users: [User!]!
    user(id: ID): User!
}

type Mutation {
    addUser(firstName: String, lastName: String, age: Int): User!

    deleteUser(id: ID!): User!

    updateUser(id: ID!, firstName: String, lastName: String, age: Int): User!
}

type User {
    id: ID!
    firstName: String
    lastName: String
    age: Int
}
`;