import { gql } from '../../__generated__/gql';

export const LOGIN_USER = gql(`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                email
                firstName
                id
                lastName
                role
            }
        }
    }
`);
