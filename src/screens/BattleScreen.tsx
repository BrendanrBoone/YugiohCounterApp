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
    Modal,
    Text
} from "react-native";
import route_names, { IBattleScreenProps } from "../routes";
import functionLibrary from "../components/state/ScrnDepFuncLib";
import defined_colors from "../components/ui/colors";
import { PlayerButton } from "../components/ui/PlayerButton";
import useAppContext from "../components/hooks/useAppContext";
import { IPlayer } from "../components/state/IBattleDocument";
import { DemoButton } from "../components/ui/DemoButton";
import { VideoPlayer } from "../components/ui/VideoPlayer";

export default function BattleScreen(props: IBattleScreenProps) {

    //provides player information
    const ctx = useAppContext();

    //visibility of win screen
    const [winDow_visibility, setWinDow_visibility] = useState(false);

    //usability of player buttons
    const [buttonDisabled, setButtonDisabled] = useState(false);

    //it is setup so a random video from this list is played after a game
    const ending_videos: [NodeRequire, NodeRequire][] = [
        [
            require("../assets/videos_mp4/exodia_obliterate.mp4"),
            require("../assets/videos_mp4/exodia_obliterate_upsidedown.mp4")
        ]
    ];
    const random_ending: [NodeRequire, NodeRequire] = ending_videos[Math.floor(Math.random() * ending_videos.length)];

    //constantly checks if a player has won
    useEffect(() => {
        if (!winDow_visibility && (ctx.player1.countLP === 0 || ctx.player2.countLP === 0)) {
            setButtonDisabled(!buttonDisabled);
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
                    flipped={true}
                    disabled={buttonDisabled}>
                    {ctx.player2.countLP}
                </PlayerButton>
            </View>
            <View style={styles.p1Half}>
                <PlayerButton
                    key="p1"
                    onPress={handleP1}
                    color={defined_colors.red}
                    color_pressed={defined_colors.dark_red}
                    disabled={buttonDisabled}>
                    {ctx.player1.countLP}
                </PlayerButton>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={winDow_visibility}
                onRequestClose={handleGameEnd}>
                <View style={ctx.player1.countLP == 0 ? styles.win_dow : styles.win_dow_flipped}>
                    <VideoPlayer
                        onEnd={handleGameEnd}
                        source_location={ctx.player1.countLP == 0 ? random_ending[0] : random_ending[1]}
                        flipped={ctx.player1.countLP == 0 ? false : true} />
                    <View style={{flexDirection: "row", justifyContent: "center"}}>
                        <Text style={{fontSize: 50}}>
                            YOU WIN
                        </Text>
                    </View>
                    <DemoButton
                    onPress={handleGameEnd}
                    color={defined_colors.dark_grey}
                    color_pressed={defined_colors.black}>
                        CLOSE
                    </DemoButton>
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
        maxHeight: 500,
        marginVertical: '35%',
        backgroundColor: "purple",
        opacity: 0.8,
        justifyContent: "center"
    },
    win_dow_flipped: {
        flex: 1,
        maxHeight: 500,
        marginVertical: '35%',
        backgroundColor: "purple",
        opacity: 0.9,
        justifyContent: "center",
        transform: [{ rotate: "180deg" }]
    }
});
