/**
 * BattleScreen.tsx
 * 
 * Home Screen component.
 */
import { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    SafeAreaView,
    Modal
} from "react-native";
import route_names, { IBattleScreenProps } from "../routes";
import functionLibrary from "../components/state/ScrnDepFuncLib";
import defined_colors from "../components/ui/colors";
import { PlayerButton } from "../components/ui/PlayerButton";
import useAppContext from "../components/hooks/useAppContext";
import { IPlayer } from "../components/state/IBattleDocument";

export default function BattleScreen(props: IBattleScreenProps) {

    const ctx = useAppContext();

    const [winDow_visibility, setWinDow_visibility] = useState(false);

    useEffect(() => {
        if (!winDow_visibility && (ctx.player1.countLP === 0 || ctx.player2.countLP === 0)) {
            setTimeout(() => {
                console.log("delayed action!");
                setWinDow_visibility(true);
            }, 2000);
        }
    }, [ctx.player1.countLP, ctx.player2.countLP, winDow_visibility])

    const handleGameEnd = (): void => {
        functionLibrary.printLogScreen(route_names.BATTLE_SCREEN);
        props.navigation.navigate(route_names.HOME_SCREEN);
    }

    const goToCalculation = (player: IPlayer, flipped: boolean) => {
        functionLibrary.printLogScreen(route_names.BATTLE_SCREEN);
        props.navigation.navigate(route_names.CALCULATION_SCREEN, {
            player: player,
            flipped: flipped
        });
    }

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
            <Modal
            animationType="fade"
            transparent={true}
            visible={winDow_visibility}
            onRequestClose={handleGameEnd}>
                <View style={ctx.player1.countLP == 0 ? styles.win_dow : styles.win_dow_flipped}>
                    <PlayerButton onPress={() => console.log("modal window opened")}>
                        SOMETHING HERE
                    </PlayerButton>
                </View>
            </Modal>
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
    },
    win_dow: {
        flex: 1,
        backgroundColor: "red"
    },
    win_dow_flipped: {
        flex: 1,
        backgroundColor: "red",
        transform: [{rotate: "180deg"}]
    }
});
