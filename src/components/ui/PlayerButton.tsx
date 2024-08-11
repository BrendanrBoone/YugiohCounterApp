import React from 'react';
import { 
    StyleSheet,
    Text,
    Pressable,
    ViewStyle,
    TextStyle
 } from 'react-native';
 import defined_colors from './colors';

interface Props {
    onPress: () => void;
    flipped?: boolean;
}

type PlayerButtonProps<P = unknown> = P & {
    children?: React.ReactNode | undefined;
    color?: string | undefined;
    color_pressed?: string | undefined;
}

export function PlayerButton({onPress, children, color, color_pressed, flipped}: PlayerButtonProps<Props>) {
    return (
        <Pressable
        onPress={onPress}
        style={({pressed}) => [
            {backgroundColor: pressed ? color_pressed : color},
            flipped ? styles.flippedContainer : styles.container
        ]}>
            <Text style={flipped ? styles.flippedText : styles.text}>
                {children}
            </Text>
        </Pressable>
    )
}

interface Styles {
    container: ViewStyle;
    flippedContainer: ViewStyle;
    text: TextStyle;
    flippedText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    flippedContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        transform: [{scaleY: -1}]
    },
    text: {
        textAlign: 'center',
        color: defined_colors.white,
        fontSize: 100
    },
    flippedText: {
        textAlign: 'center',
        color: defined_colors.white,
        fontSize: 100,
        transform: [{scaleX: -1}]
    }
});
