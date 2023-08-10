import { gql } from '../../__generated__/gql';

export const GET_ROOM = gql(`
    query GetRoom($roomId: ID!) {
        room(id: $roomId) {
            id
            messages {
                body
                id
                insertedAt
                user {
                    firstName
                    id
                    lastName
                }
            }
            name
            user {
                firstName
                lastName
            }
        }
    }
`);
