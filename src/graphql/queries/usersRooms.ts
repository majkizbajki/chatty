import { gql } from '../../__generated__/gql';

export const GET_USERS_ROOMS = gql(`
    query GetUsersRooms {
        usersRooms {
            rooms {
                id
            }
        }
    }
`);
