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

/**
 * The First Screen the user sees
 * ArrowSelector at the top to choose starting LP
 * DemoButton in the middle to start the LP counter
 * 
 * @param props 
 * @returns 
 */
export default function HomeScreen(props: IHomeScreenProps) {

    //allows usage of context values from AppState.tsx
    const ctx = useAppContext();

    //defined choice LP values
    const defined_starting_LP = [8000, 4000];
    const [currentLP, setCurrentLP] = useState(defined_starting_LP[0]);

    //wrapper function for ArrowSelector
    const handleCurrentLP = (LP: number) => {
        setCurrentLP(LP);
    };

    //Initial call of this function. Gives each player their name and starting LP
    const updatePlayerLP = (player: IPlayer, newLP: number) => {
        const playerName: string = (player == ctx.player1) ? "Player1" : "Player2";
        const updatePlayer: IPlayer = {
            ...player,
            name: playerName,
            countLP: newLP
        };
        (player == ctx.player1) ? ctx.updatePlayer1(updatePlayer) : ctx.updatePlayer2(updatePlayer);
    };

    //onPress function for DemoButton. Defines Players LP and moves to Battle Screen
    const duelButtonFunction = (): void => {
        functionLibrary.printLogScreen(route_names.HOME_SCREEN);
        updatePlayerLP(ctx.player1, currentLP);
        updatePlayerLP(ctx.player2, currentLP);
        props.navigation.navigate(route_names.BATTLE_SCREEN);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignSelf: 'center', marginTop: 0}}>
                <ArrowSelector itemLst={defined_starting_LP} currentLP={handleCurrentLP} />
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
