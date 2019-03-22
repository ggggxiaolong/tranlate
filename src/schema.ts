import { gql} from 'apollo-server';

export const typeDef = gql`
type Query {
    users: [User!]!
    user(id: ID!): User!
    posts: [Post]!
}

type Mutation {
    addUser(firstName: String, lastName: String, age: Int): User!

    deleteUser(id: ID!): User!

    updateUser(id: ID!, firstName: String, lastName: String, age: Int): ID!

    addPost(userId: ID, title: String!, content: String): Post!

    deletePost(id: ID!): ID!
}

type User {
    id: ID!
    firstName: String
    lastName: String
    age: Int
    posts: [Post!]
}

type Post {
    id: ID!
    title: String!
    content: String
}
`;