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
import route_names, { ICalculationScreenProps } from "../routes";
import useAppContext from "../components/hooks/useAppContext";
import defined_colors from "../components/ui/colors";
import { IPlayer } from "../components/state/IBattleDocument";
import functionLibrary from "../components/state/ScrnDepFuncLib";

export default function CalculationScreen(props: ICalculationScreenProps) {

    const ctx = useAppContext();

    const [lP, setLP] = useState(props.route.params.player.countLP);
    const flipped = props.route.params.flipped;

    const updatePlayerLP = (player: IPlayer, newLP: number) => {
        const updatePlayer: IPlayer = {
            ...player,
            countLP: newLP
        };
        (player == ctx.player1) ? ctx.updatePlayer1(updatePlayer) : ctx.updatePlayer2(updatePlayer);
    };

    const handleCalculate = () => {
        const newLP = lP + 1;
        updatePlayerLP(props.route.params.player, newLP);
        functionLibrary.printLogScreen(route_names.CALCULATION_SCREEN);
        props.navigation.navigate(route_names.BATTLE_SCREEN);
    };

    return (
        <View style={flipped ? styles.flippedContainer : styles.container}>
            <DemoButton
            key="Process Image"
            onPress={handleCalculate}
            color={defined_colors.white}
            color_pressed={defined_colors.dark_grey}
            flipped={flipped}>
                {"DUEL!"}
            </DemoButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        flex: 1
    },
    flippedContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{scaleY: -1}]
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});
