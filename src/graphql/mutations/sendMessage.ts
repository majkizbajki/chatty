import { gql } from '../../__generated__/gql';

export const POST_SEND_MESSAGE = gql(`
    query SendMessage($body: String!, $roomId: String!) {
        sendMessage($body: String!, $roomId: String!) {
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