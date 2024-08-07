/**
 * CalculationScreen.tsx
 * 
 * Home Screen component.
 */
import { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View
} from "react-native";
import { DemoButton } from "../components/ui/DemoButton";
import { ICalculationScreenProps } from "../routes";

export default function CalculationScreen(props: ICalculationScreenProps) {


    return (
        <View style={styles.container}>
            <View style={{height: 60}}>
                <DemoButton key="Process Image" onPress={() => console.log("HelloWorld!")}>
                    {"DUEL!"}
                </DemoButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});
