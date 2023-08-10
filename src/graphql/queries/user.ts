import { gql } from '../../__generated__/gql';

export const GET_USER = gql(`
    query GetUser {
        user {
            email
            firstName
            id
            lastName
            role
        }
    }
`);
