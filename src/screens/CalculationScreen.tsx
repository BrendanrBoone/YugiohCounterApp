/**
 * CalculationScreen.tsx
 * 
 * Home Screen component.
 */
import { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions
} from "react-native";
import route_names, { ICalculationScreenProps } from "../routes";
import useAppContext from "../components/hooks/useAppContext";
import defined_colors from "../components/ui/colors";
import { IPlayer } from "../components/state/IBattleDocument";
import functionLibrary from "../components/state/ScrnDepFuncLib";
import { LpChooser } from "../components/ui/LpChooser";
import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get("window");

const dialPadContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "X"];

const dialPadSize = width * 0.2;
const dialPadTextSize = dialPadSize * 0.4;

const pinLength = 6;

const horizontalMargin_calculationButtons = 20;

export default function CalculationScreen(props: ICalculationScreenProps) {

    const ctx = useAppContext();

    const playerLP = props.route.params.player.countLP;
    const [lpChange, setLpChange] = useState(0);
    const [playerLpResultGained, setPlayerLpResultGained] = useState(playerLP);
    const [playerLpResultReceived, setPlayerLpResultReceived] = useState(playerLP);
    const flipped = props.route.params.flipped;

    useEffect(() => {
        setPlayerLpResultGained(playerLP + lpChange);
        setPlayerLpResultReceived(playerLP - lpChange);
    })

    const updatePlayerLP = (player: IPlayer, newLP: number) => {
        const updatePlayer: IPlayer = {
            ...player,
            countLP: newLP
        };
        (player == ctx.player1) ? 
            ctx.updatePlayer1(updatePlayer) : ctx.updatePlayer2(updatePlayer);
    };

    const handleCalculate = () => {
        const newLP = lpChange + 1;
        updatePlayerLP(props.route.params.player, newLP);
        functionLibrary.printLogScreen(route_names.CALCULATION_SCREEN);
        props.navigation.navigate(route_names.BATTLE_SCREEN);
    };

    return (
        <SafeAreaView style={flipped ? styles.flippedContainer : styles.container}>
            <View style={{width: width, alignItems: "center"}}>
                <Text style={{fontSize: 40, color: defined_colors.slightlybrown_darkgrey}}>
                    LP CALCULATOR
                </Text>
                <Text style={{fontSize: 20, color: defined_colors.slightlybrown_darkgrey}}>
                    Choose amount to receive or gain
                </Text>
            </View>
            <View style={styles.text}>
                <TouchableOpacity
                onPress={handleCalculate}
                style={styles.backButtonContainer}>
                    <Feather name="chevron-left"
                    size={70} color={defined_colors.slightlybrown_darkgrey} />
                </TouchableOpacity>
                <View style={styles.textViewBox} pointerEvents="none" key="LpText">
                    <Text style={styles.pinText}>{lpChange}</Text>
                </View>
                <View style={styles.textViewBox} pointerEvents="none" key="playerLp">
                    <Text style={{fontSize: 20, color: defined_colors.slightlybrown_darkgrey}}>
                        {"=" + playerLpResultReceived + " or " + playerLpResultGained}
                    </Text>
                </View>
                <LpChooser
                dialPadContent = {dialPadContent}
                pinLength={pinLength}
                lpChange={lpChange}
                setLpChange={setLpChange}
                dialPadSize={dialPadSize}
                dialPadTextSize={dialPadTextSize}/>
            </View>
            <View style={styles.calculationButtonsContainer}>
                <TouchableOpacity style={[styles.calculationButton, {backgroundColor: defined_colors.red, flex: 1}]}>
                    <Feather name="minus-circle"
                    size={45} color={defined_colors.white} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.calculationButton, {backgroundColor: defined_colors.blue, flex: 1}]}>
                    <Feather name="plus-circle"
                    size={45} color={defined_colors.white} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    flippedContainer: {
        flex: 1,
        justifyContent: "center",
        transform: [{rotate: '180deg'}]
    },
    backButtonContainer: {
        position: "absolute",
        left: -width/2 + 10
    },
    text: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 40,
        position: "relative"
    },
    pinText: {
        fontSize: 50,
        fontWeight: "medium",
        color: defined_colors.bright_orange
    },
    textViewBox: {
        width: width,
        alignItems: "center"
    },
    calculationButtonsContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "stretch",
        borderRadius: 20,
        overflow: "hidden",
        marginHorizontal: horizontalMargin_calculationButtons
    },
    calculationButton: {
        width: (width - horizontalMargin_calculationButtons*2)/2,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    }
});
