/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation loginUser($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n            token\n            user {\n                email\n                firstName\n                id\n                lastName\n                role\n            }\n        }\n    }\n": types.LoginUserDocument,
    "\n    mutation SendMessage($body: String!, $roomId: String!) {\n        sendMessage(body: $body, roomId: $roomId) {\n            id\n        }\n    }\n": types.SendMessageDocument,
    "\n    query GetRoom($roomId: ID!) {\n        room(id: $roomId) {\n            id\n            messages {\n                body\n                id\n                insertedAt\n                user {\n                    firstName\n                    id\n                    lastName\n                }\n            }\n            name\n            user {\n                firstName\n                lastName\n            }\n        }\n    }\n": types.GetRoomDocument,
    "\n    query GetUser {\n        user {\n            email\n            firstName\n            id\n            lastName\n            role\n        }\n    }\n": types.GetUserDocument,
    "\n    query GetUsersRooms {\n        usersRooms {\n            rooms {\n                id\n            }\n        }\n    }\n": types.GetUsersRoomsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation loginUser($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n            token\n            user {\n                email\n                firstName\n                id\n                lastName\n                role\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation loginUser($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n            token\n            user {\n                email\n                firstName\n                id\n                lastName\n                role\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation SendMessage($body: String!, $roomId: String!) {\n        sendMessage(body: $body, roomId: $roomId) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation SendMessage($body: String!, $roomId: String!) {\n        sendMessage(body: $body, roomId: $roomId) {\n            id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetRoom($roomId: ID!) {\n        room(id: $roomId) {\n            id\n            messages {\n                body\n                id\n                insertedAt\n                user {\n                    firstName\n                    id\n                    lastName\n                }\n            }\n            name\n            user {\n                firstName\n                lastName\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetRoom($roomId: ID!) {\n        room(id: $roomId) {\n            id\n            messages {\n                body\n                id\n                insertedAt\n                user {\n                    firstName\n                    id\n                    lastName\n                }\n            }\n            name\n            user {\n                firstName\n                lastName\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetUser {\n        user {\n            email\n            firstName\n            id\n            lastName\n            role\n        }\n    }\n"): (typeof documents)["\n    query GetUser {\n        user {\n            email\n            firstName\n            id\n            lastName\n            role\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetUsersRooms {\n        usersRooms {\n            rooms {\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetUsersRooms {\n        usersRooms {\n            rooms {\n                id\n            }\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;