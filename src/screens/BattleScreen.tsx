/**
 * BattleScreen.tsx
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
import route_names, { IBattleScreenProps } from "../routes";
import functionLibrary from "../components/state/ScrnDepFuncLib";
import defined_colors from "../components/ui/colors";

export default function BattleScreen(props: IBattleScreenProps) {

    const battleButtonFunction = (): void => {
        functionLibrary.printLogScreen(route_names.BATTLE_SCREEN);
        props.navigation.navigate(route_names.HOME_SCREEN);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: 250, width: 185 }}>
                <DemoButton 
                key="Battle button" 
                onPress={() => battleButtonFunction()}
                color={defined_colors.duel_blue}
                color_pressed={defined_colors.black}>
                    {"DUEL!!"}
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
