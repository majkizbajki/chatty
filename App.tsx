import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/navigation';
import { ThemeProvider } from './src/context/ThemeContext';
import { ApolloProvider } from '@apollo/client';
import './src/i18n/i18n';
import { client } from './src/graphql';
import dayjs from 'dayjs';
import 'dayjs/plugin/relativeTime';
import 'dayjs/plugin/isToday';
import { UserProvider } from './src/context/UserContext';

function App(): JSX.Element {
    var relativeTime = require('dayjs/plugin/relativeTime');
    var isToday = require('dayjs/plugin/isToday');

    dayjs.extend(relativeTime);
    dayjs.extend(isToday);

    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <ApolloProvider client={client}>
                    <UserProvider>
                        <Navigation />
                    </UserProvider>
                </ApolloProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

export default App;
