// import React from 'react';
// import { View, StyleSheet, ViewStyle } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withRepeat } from 'react-native-reanimated';
// import { useAppTheme, useMount } from '../../hooks';
// import { CustomColors } from '../../theme/types';

// interface SkeletonProps {
//     height: number;
//     width: number;
//     styleProps?: ViewStyle;
// }

// const Skeleton = ({ height, width, styleProps }: SkeletonProps) => {
//     const { colors } = useAppTheme();
//     const style = styles(colors, height, width);

//     const animatedValue = useSharedValue(0);

//     useMount(() => {
//         animatedValue.value = withRepeat(
//             withTiming(1, {
//                 duration: 1000,
//                 easing: Easing.linear
//             }),
//             -1,
//             true
//         );
//     });

//     const animatedStyle = useAnimatedStyle(() => {
//         const translateX = -width * 3 + animatedValue.value * width * 4;
//         return {
//             transform: [{ translateX }]
//         };
//     });

//     return (
//         <View style={{ ...style.container, ...styleProps }}>
//             <Animated.View style={[StyleSheet.absoluteFill, animatedStyle]}>
//                 <LinearGradient
//                     colors={['transparent', 'rgba(0,0,0,0.15)', 'transparent']}
//                     start={{ x: 0, y: 0 }}
//                     end={{ x: 1, y: 1 }}
//                     style={StyleSheet.absoluteFill}
//                 />
//             </Animated.View>
//         </View>
//     );
// };

// const styles = (colors: CustomColors, height: number, width: number) =>
//     StyleSheet.create({
//         container: {
//             backgroundColor: colors.lightGrey,
//             height: height,
//             width: width
//         }
//     });

// export default Skeleton;

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withRepeat } from 'react-native-reanimated';
import { useAppTheme, useMount } from '../../hooks';
import { CustomColors } from '../../theme/types';

interface SkeletonProps {
    height: number;
    width: number;
    styleProps?: ViewStyle;
}

const Skeleton = ({ height, width, styleProps }: SkeletonProps) => {
    const { colors } = useAppTheme();
    const style = styles(colors, height, width);

    const animatedValue = useSharedValue(0);

    useMount(() => {
        animatedValue.value = withRepeat(
            withTiming(1, {
                duration: 1000,
                easing: Easing.linear
            }),
            -1,
            true
        );
    });

    const animatedStyle = useAnimatedStyle(() => {
        const translateX = -width + animatedValue.value * width * 2;
        return {
            transform: [{ translateX }]
        };
    });

    return (
        <View style={{ ...style.container, ...styleProps }}>
            <Animated.View style={[style.gradientContainer, animatedStyle]}>
                <LinearGradient
                    colors={['transparent', 'rgba(0, 0, 0, 0.12)', 'transparent']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    locations={[0, 0.5, 1]}
                    style={style.gradient}
                />
            </Animated.View>
        </View>
    );
};

const styles = (colors: CustomColors, height: number, width: number) =>
    StyleSheet.create({
        container: {
            backgroundColor: colors.lightGrey,
            height: height,
            width: width,
            overflow: 'hidden'
        },
        gradientContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: height,
            width: width * 3
        },
        gradient: {
            flex: 1,
            width: '100%'
        }
    });

export default Skeleton;
