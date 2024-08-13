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
import route_names, { IBattleScreenProps } from "../routes";
import functionLibrary from "../components/state/ScrnDepFuncLib";
import defined_colors from "../components/ui/colors";
import { PlayerButton } from "../components/ui/PlayerButton";
import useAppContext from "../components/hooks/useAppContext";
import { IPlayer } from "../components/state/IBattleDocument";

export default function BattleScreen(props: IBattleScreenProps) {

    const ctx = useAppContext();

    useEffect(() => {
        if (ctx.player1.countLP == 0) {
            setTimeout(() => {
                console.log("delayed action");
                handleGameEnd();
            }, 2000)
        }
        if (ctx.player2.countLP == 0) {
            setTimeout(() => {
                console.log("delayed action");
                handleGameEnd();
            }, 2000)
        }
    })

    const handleGameEnd = (): void => {
        functionLibrary.printLogScreen(route_names.BATTLE_SCREEN);
        props.navigation.navigate(route_names.HOME_SCREEN);
    };

    const goToCalculation = (player: IPlayer, flipped: boolean) => {
        functionLibrary.printLogScreen(route_names.BATTLE_SCREEN);
        props.navigation.navigate(route_names.CALCULATION_SCREEN, {
            player: player,
            flipped: flipped
        });
    };

    const handleP1 = (): void => {
        goToCalculation(ctx.player1, false);
    }

    const handleP2 = (): void => {
        goToCalculation(ctx.player2, true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.p2Half}>
                <PlayerButton 
                key="p2"
                onPress={handleP2}
                color={defined_colors.blue}
                color_pressed={defined_colors.dark_blue}
                flipped={true}>
                    {ctx.player2.countLP}
                </PlayerButton>
            </View>
            <View style={styles.p1Half}>
                <PlayerButton 
                key="p1"
                onPress={handleP1}
                color={defined_colors.red}
                color_pressed={defined_colors.dark_red}>
                    {ctx.player1.countLP}
                </PlayerButton>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    p1Half: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    p2Half: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
