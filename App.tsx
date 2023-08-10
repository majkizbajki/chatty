import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/navigation';
import { ThemeProvider } from './src/context/ThemeContext';
import { ApolloProvider } from '@apollo/client';
import './src/i18n/i18n';
import { client } from './src/graphql';
import dayjs from 'dayjs';
import 'dayjs/plugin/relativeTime';

function App(): JSX.Element {
    var relativeTime = require('dayjs/plugin/relativeTime');
    dayjs.extend(relativeTime);

    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <ApolloProvider client={client}>
                    <Navigation />
                </ApolloProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

export default App;
