/**
 * HomeScreen.tsx
 * 
 * Home Screen component.
 */
import { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    SafeAreaView
} from "react-native";
import { DemoButton } from "../components/ui/DemoButton";
import route_names, { IHomeScreenProps } from "../routes";
import defined_colors from "../components/ui/colors";
import functionLibrary from "../components/state/ScrnDepFuncLib";
import { ArrowSelector } from "../components/ui/arrowSelector";

export default function HomeScreen(props: IHomeScreenProps) {

    const duelButtonFunction = (): void => {
        functionLibrary.printLogScreen(route_names.HOME_SCREEN);
        props.navigation.navigate(route_names.BATTLE_SCREEN, {starting_LP: 4000});
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{height: 100, width: 185, alignContent: 'flex-start'}}>
                <ArrowSelector itemLst={[1000, 2000]}/>
            </View>
            <View style={{ height: 250, width: 185, justifyContent: 'center' }}>
                <DemoButton 
                key="Start Battle" 
                onPress={() => {duelButtonFunction()}}
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
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});
