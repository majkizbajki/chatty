import { gql } from '../../__generated__/gql';

export const SEND_MESSAGE = gql(`
    mutation SendMessage($body: String!, $roomId: String!) {
        sendMessage(body: $body, roomId: $roomId) {
            id
        }
    }
`);
