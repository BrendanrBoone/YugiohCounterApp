/**
 * ArrowSelector.tsx
 * 
 * 
 */
import React, { useState } from 'react';
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
    currentItem: (currentLP: number) => void;
 }

 /**
  * specifically designed to choose predetermined list of LP values
  * for Yugioh game => 4000, 8000, etc
  * @param itemLst list of numbers 
  * @returns React.JSX.Element of arrow selector 
  */
export function ArrowSelector({itemLst, currentItem}: ArrowSelectorProps) {

    const [index, setIndex] = useState(0);
    const [item, setItem] = useState(itemLst[0]);

    const cycleLeft = (): void => {
        let i = index;
        if (i == 0) {
            i = itemLst.length - 1;
        } else {
            i -= 1;
        }
        setIndex(i);
        setItem(itemLst[i]);
        currentItem(itemLst[i]);
    }

    const cycleRight = (): void => {
        let i = index;
        if (i == itemLst.length - 1) {
            i = 0;
        } else {
            i += 1;
        }
        setIndex(i);
        setItem(itemLst[i]);
        currentItem(itemLst[i]);
    }

    return (
        <View style={styles.container}>
            <Pressable style={({pressed}) => [
                styles.triangle, styles.arrowLeft, 
                {borderRightColor: pressed ? defined_colors.dark_blue : defined_colors.blue}]}
            onPress={cycleLeft} />
            <Text style={styles.text}>
                {item}
            </Text>
            <Pressable style={({pressed}) => [
                styles.triangle, styles.arrowRight, 
                {borderLeftColor: pressed ? defined_colors.dark_red : defined_colors.red}]}
            onPress={cycleRight} />
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
        height: 60,
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        borderTopWidth: 20,
        borderRightWidth: 30,
        borderBottomWidth: 20,
        borderLeftWidth: 0,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent'
    },
    arrowRight: {
        borderTopWidth: 20,
        borderRightWidth: 0,
        borderBottomWidth: 20,
        borderLeftWidth: 30,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: "red"
    },
    text: {
        textAlign: 'center',
        color: defined_colors.bright_orange,
        fontSize: 25
    }
});
