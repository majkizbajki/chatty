import { gql } from '../../__generated__/gql';

export const GET_ROOM = gql(`
    query GetRoom($roomId: ID!) {
        room(id: $roomId) {
            id
            messages {
                body
                insertedAt
                user {
                    firstName
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
