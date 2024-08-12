/**
 * CalculationScreen.tsx
 * 
 * Home Screen component.
 */
import { useState } from "react";
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
import Icon from "react-native-vector-icons/Ionicons"
import { LpChooser } from "../components/ui/LpChooser";
import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get("window");

const dialPadContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "X"];

const dialPadSize = width * 0.2;
const dialPadTextSize = dialPadSize * 0.4;

const pinLength = 6;

export default function CalculationScreen(props: ICalculationScreenProps) {

    const ctx = useAppContext();

    const [lP, setLP] = useState(props.route.params.player.countLP);
    const flipped = props.route.params.flipped;

    const updatePlayerLP = (player: IPlayer, newLP: number) => {
        const updatePlayer: IPlayer = {
            ...player,
            countLP: newLP
        };
        (player == ctx.player1) ? 
            ctx.updatePlayer1(updatePlayer) : ctx.updatePlayer2(updatePlayer);
    };

    const handleCalculate = () => {
        const newLP = lP + 1;
        updatePlayerLP(props.route.params.player, newLP);
        functionLibrary.printLogScreen(route_names.CALCULATION_SCREEN);
        props.navigation.navigate(route_names.BATTLE_SCREEN);
    };

    return (
        <SafeAreaView style={flipped ? styles.flippedContainer : styles.container}>
            <View style={styles.text}>
                <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={styles.backButtonContainer}>
                    <Feather name="chevron-left"
                    size={100} color={defined_colors.white} />
                </TouchableOpacity>
                <Text style={styles.pinText}>SOMETHING HERE</Text>
                <LpChooser
                dialPadContent = {dialPadContent}
                pinLength={pinLength}
                dialPadSize={dialPadSize}
                dialPadTextSize={dialPadTextSize}/>
            </View>
            <View style={{flexDirection: "row", flex: 1}}>
                <TouchableOpacity style={{backgroundColor: defined_colors.red}}>
                    <Feather name="minus-circle"
                    size={45} color={defined_colors.white} />
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: defined_colors.blue}}>
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
        backgroundColor: "#FAF0E6"
    },
    text: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        position: "relative",
        backgroundColor: "black"
    },
    pinText: {
        fontSize: 30,
        fontWeight: "medium",
        color: "#5E454B",
    },
    flippedContainer: {
        flex: 1,
        backgroundColor: "#FAF0E6",
        transform: [{rotate: '180deg'}]
    },
    backButtonContainer: {
        position: "absolute",
        top: -30,
        left: -width/2 +100,
        width: 100,
        backgroundColor: defined_colors.sienna,
        borderWidth: 1,
        borderColor: "red"
    }
});
