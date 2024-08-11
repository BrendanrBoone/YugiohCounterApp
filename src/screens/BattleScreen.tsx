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

export default function BattleScreen(props: IBattleScreenProps) {

    const startingPlayerLP: number = props.route.params.starting_LP;

    const [p1LP, setP1LP] = useState(startingPlayerLP);
    const [p2LP, setP2LP] = useState(startingPlayerLP);

    const battleButtonFunction = (): void => {
        functionLibrary.printLogScreen(route_names.BATTLE_SCREEN);
        props.navigation.navigate(route_names.HOME_SCREEN);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.p2Half}>
                <PlayerButton 
                key="p2"
                onPress={() => console.log("p2 works")}
                color={defined_colors.blue}
                color_pressed={defined_colors.dark_blue}
                flipped={true}>
                    {p2LP}
                </PlayerButton>
            </View>
            <View style={styles.p1Half}>
                <PlayerButton 
                key="p1"
                onPress={() => console.log("p1 works")}
                color={defined_colors.red}
                color_pressed={defined_colors.dark_red}>
                    {p1LP}
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
