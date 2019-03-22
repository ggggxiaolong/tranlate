import { gql} from 'apollo-server';

export const typeDef = gql`
type Query {
    users: [User!]!
    user(id: ID): User!
}

type User {
    id: ID!
    firstName: String
    lastName: String
    age: Int
}
`;