/**
 * LpChooser.tsx
 * 
 * 
 */
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import defined_colors from './colors';
import Feather from 'react-native-vector-icons/Feather'

type LpChooserProps<P = unknown> = P & {
    dialPadContent: (string | number)[];
    pinLength: number;
    dialPadSize: number;
    dialPadTextSize: number;
}

/**
 * Module to choose what amount of LP is lossed or gained
 * @param itemLst list of numbers 
 * @returns React.JSX.Element of arrow selector 
 */
export function LpChooser(
    { dialPadContent, pinLength, dialPadSize, dialPadTextSize }: LpChooserProps) {
    return (
        <FlatList
        data={dialPadContent}
        numColumns={3}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity disabled={item === ""}>
                    <View style={[{
                    backgroundColor: item === "" ? "transparent" : "#fff",
                    width: dialPadSize,
                    height: dialPadSize,
                    }, styles.dialPadContainer]}>
                        {item === "X" ? (
                            <Feather name="delete" size={24} color="#3F1D38" />
                        ) : (
                            <Text style={[{ fontSize: dialPadTextSize }, styles.dialPadText]}>
                                {item}
                            </Text>
                        )}
                    </View>
                </TouchableOpacity>
            );
        }}
        />
    );
}

const styles = StyleSheet.create({
    dialPadContainer: {
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: 10,
        borderRadius: 50,
        borderColor: "transparent",
    },
    dialPadText: {
        color: "#3F1D38",
    },
});
