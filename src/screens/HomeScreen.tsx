/**
 * HomeScreen.tsx
 * 
 * Home Screen component.
 */
import { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView
} from "react-native";
import { DemoButton } from "../components/ui/DemoButton";
import route_names, { IHomeScreenProps } from "../routes";
import defined_colors from "../components/ui/colors";
import functionLibrary from "../components/state/ScrnDepFuncLib";

export default function HomeScreen(props: IHomeScreenProps) {

    const duelButtonFunction = (): void => {
        functionLibrary.printLogScreen(route_names.HOME_SCREEN);
        props.navigation.navigate(route_names.BATTLE_SCREEN);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: 250, width: 185 }}>
                <DemoButton 
                key="Start Battle" 
                onPress={() => duelButtonFunction}
                color={defined_colors.dark_grey}
                color_pressed={defined_colors.black}>
                    {"DUEL!"}
                </DemoButton>
            </View>
        </SafeAreaView>
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
