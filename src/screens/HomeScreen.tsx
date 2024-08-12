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
import { IPlayer } from "../components/state/IBattleDocument";
import useAppContext from "../components/hooks/useAppContext";

export default function HomeScreen(props: IHomeScreenProps) {

    const ctx = useAppContext();
    const defined_starting_LP = [4000, 8000];
    const [currentLP, setCurrentLP] = useState(defined_starting_LP[0]);

    const handleCurrentLP = (LP: number) => {
        setCurrentLP(LP);
    };

    const updatePlayerLP = (player: IPlayer, newLP: number) => {
        const playerName: string = (player == ctx.player1) ? "Player1" : "Player2";
        const updatePlayer: IPlayer = {
            ...player,
            name: playerName,
            countLP: newLP
        };
        (player == ctx.player1) ? ctx.updatePlayer1(updatePlayer) : ctx.updatePlayer2(updatePlayer);
    };

    const duelButtonFunction = (): void => {
        functionLibrary.printLogScreen(route_names.HOME_SCREEN);
        updatePlayerLP(ctx.player1, currentLP);
        updatePlayerLP(ctx.player2, currentLP);
        props.navigation.navigate(route_names.BATTLE_SCREEN);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignSelf: 'center', marginTop: 0}}>
                <ArrowSelector itemLst={defined_starting_LP} currentItem={handleCurrentLP} />
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
