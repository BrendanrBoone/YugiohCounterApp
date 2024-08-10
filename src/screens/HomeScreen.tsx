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
import { ArrowSelector } from "../components/ui/ArrowSelector";

export default function HomeScreen(props: IHomeScreenProps) {

    const defined_starting_LP = [4000, 8000];

    const duelButtonFunction = (): void => {
        functionLibrary.printLogScreen(route_names.HOME_SCREEN);
        props.navigation.navigate(route_names.BATTLE_SCREEN, {starting_LP: 4000});
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignSelf: 'center', marginTop: 0}}>
                <ArrowSelector itemLst={defined_starting_LP}/>
            </View>
            
            <View style={styles.duelView}>
                <DemoButton 
                key="Start Battle" 
                onPress={duelButtonFunction}
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
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0,
        borderColor: 'red'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    duelView: {
        height: 250,
        width: 185,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: '63%'
    }
});
