/**
 * ArrowSelector.tsx
 * 
 * Thing to scroll selections. Needs a <view> wrapper to determine size,
 * same with DemoButton
 */
import React from 'react';
import { 
    StyleSheet,
    Text,
    Pressable,
    ViewStyle,
    TextStyle,
    View
 } from 'react-native';
 import defined_colors from './colors';

 type ArrowSelectorProps<P = unknown> = P & {
    itemLst: number[];
 }

 /**
  * specifically designed to choose predetermined list of LP values
  * for Yugioh game => 4000, 8000, etc
  * @param itemLst list of numbers 
  * @returns React.JSX.Element of arrow selector 
  */
export function ArrowSelector({itemLst}: ArrowSelectorProps) {

    

    return (
        <View style={styles.container}>
            <Pressable style={[styles.triangle, styles.arrowLeft]}
            onPress={() => console.log("this works")} />
            <Text style={styles.text}>
                Something here!
            </Text>
            <Pressable style={[styles.triangle, styles.arrowRight]} />
        </View>
    )
}

interface Styles {
    container: ViewStyle;
    triangle: ViewStyle;
    arrowLeft: ViewStyle;
    arrowRight: ViewStyle;
    text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        maxWidth: 200,
        maxHeight: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: defined_colors.sienna
      },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid'
    },
    arrowLeft: {
        borderTopWidth: 30,
        borderRightWidth: 30,
        borderBottomWidth: 30,
        borderLeftWidth: 0,
        borderTopColor: 'transparent',
        borderRightColor: "tomato",
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent'
    },
    arrowRight: {
        borderTopWidth: 30,
        borderRightWidth: 0,
        borderBottomWidth: 30,
        borderLeftWidth: 30,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: "tomato"
    },
    text: {
        textAlign: 'center',
        color: defined_colors.bright_orange,
        fontSize: 15
    }
});
