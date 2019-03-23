import { gql} from 'apollo-server';

export const typeDef = gql`

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

type Query {
    users: [User!]!
    user(id: ID!): User!
    posts: [Post]!
}

input AddUser{
    firstName: String
    lastName: String
    age: Int
}

input AddPost{
    userId: ID!
    title: String!
    content: String
}

type Mutation {
    
    addUser(user: AddUser!): User!

    deleteUser(id: ID!): ID!

    updateUser(id: ID!, firstName: String, lastName: String, age: Int): ID!

    addPost(post: AddPost!): Post!

    deletePost(id: ID!): ID!
}
`;