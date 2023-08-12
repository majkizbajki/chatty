import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import Config from 'react-native-config';
import { setContext } from '@apollo/client/link/context';
import EncryptedStorage from 'react-native-encrypted-storage';

const httpLink = new HttpLink({
    headers: {
        Authorization: `Bearer ${Config.TOKEN}`
    },
    uri: Config.API_URL
});

const authLink = setContext(async (_, { headers }) => {
    const token = await EncryptedStorage.getItem('user_token');
    return {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
    };
});

const wsLink = new GraphQLWsLink(
    createClient({
        url: Config.WS_URL
    })
);

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    authLink.concat(httpLink)
);

export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});
