import { FlatList, Platform, StyleSheet, View } from 'react-native';
import { GetRoomQuery } from '../../__generated__/graphql';
import { AvoidSoftInput, useSoftInputHeightChanged } from 'react-native-avoid-softinput';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BottomBar, Message } from '../atoms';
import { Edges, SafeAreaView } from 'react-native-safe-area-context';
import { ChildTopBar } from '../organism';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { useAppTheme } from '../../hooks';
import { ChatBottomBarContent, ChatTopBarContent } from '../molecules';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../graphql/queries';

interface ChatProps {
    data?: GetRoomQuery;
}

export const Chat = ({ data }: ChatProps) => {
    const [edgesList, setEdgesList] = useState(['bottom', 'left', 'right', 'top']);

    const { colors } = useAppTheme();
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const { data: userData } = useQuery(GET_USER);

    const buttonContainerPaddingValue = useSharedValue(0);

    const buttonContainerAnimatedStyle = useAnimatedStyle(() => {
        return {
            paddingBottom: buttonContainerPaddingValue.value
        };
    });

    const onFocusEffect = useCallback(() => {
        AvoidSoftInput.setShouldMimicIOSBehavior(true);

        return () => {
            AvoidSoftInput.setShouldMimicIOSBehavior(false);
        };
    }, []);

    useFocusEffect(onFocusEffect);

    useSoftInputHeightChanged(({ softInputHeight }) => {
        if (Platform.OS === 'ios') {
            if (softInputHeight !== 0) {
                setEdgesList(['left', 'right', 'top']);
            } else {
                setEdgesList(['bottom', 'left', 'right', 'top']);
            }
        }
        buttonContainerPaddingValue.value = withTiming(softInputHeight);
    });

    return (
        <SafeAreaView edges={edgesList as Edges} style={{ flex: 1, backgroundColor: colors.mediumBlue }}>
            <View style={{ flex: 1, backgroundColor: colors.lightBlue }}>
                <ChildTopBar handleNavigation={() => navigate('RoomsScreen')}>
                    <ChatTopBarContent activeAt="Active now" name={data?.room?.name!} />
                </ChildTopBar>
                <View style={styles.scrollWrapper}>
                    <FlatList
                        data={data?.room?.messages}
                        inverted
                        renderItem={({ item }) => (
                            <Message message={item?.body} sentByUser={item?.user?.id === userData?.user?.id} />
                        )}
                        contentContainerStyle={styles.scrollContainer}
                        contentInsetAdjustmentBehavior="always"
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <Animated.View style={[buttonContainerAnimatedStyle, styles.ctaButtonWrapper]}>
                    <BottomBar>
                        <ChatBottomBarContent roomId={data?.room?.id!} />
                    </BottomBar>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    ctaButtonContainer: {
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 10,
        borderWidth: 1
    },
    ctaButtonWrapper: {
        alignSelf: 'stretch'
    },
    scrollContainer: {
        alignSelf: 'stretch',
        flexGrow: 1,
        justifyContent: 'flex-start',
        marginHorizontal: 16
    },
    scrollWrapper: {
        alignSelf: 'stretch',
        flex: 1
    }
});
