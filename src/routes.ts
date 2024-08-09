/**
 * routes.ts
 * 
 * Defines the routes for the app
 * location of definitions for screen navigation and names
 */
import { StackScreenProps } from "@react-navigation/stack";
import { IPlayer } from "./components/state/IBattleDocument";

/**
 * Defines what parameters gets sent to a screen route
 * 
 * ::App Route Plan::
 * 
 * HomeScreen: choose LP type 4000 or 8000
 * 
 * BattleScreen: two buttons with animations for LPs
 * 
 * CalculationScreen: edit LP counter.
 */
export type IStackParamList = {
    [route_names.HOME_SCREEN]: undefined,
    [route_names.BATTLE_SCREEN]: {starting_LP: number},
    [route_names.CALCULATION_SCREEN]: {player: IPlayer}
};

//routes
export interface IRoutes {
    HOME_SCREEN: "Home",
    BATTLE_SCREEN: "Battle",
    CALCULATION_SCREEN: "Calculation"
};

const route_names: IRoutes = {
    HOME_SCREEN: "Home",
    BATTLE_SCREEN: "Battle",
    CALCULATION_SCREEN: "Calculation"
};

// Stack Screens
export type IHomeScreenProps = StackScreenProps<IStackParamList, typeof route_names.HOME_SCREEN>;
export type IBattleScreenProps = StackScreenProps<IStackParamList, typeof route_names.BATTLE_SCREEN>;
export type ICalculationScreenProps = StackScreenProps<IStackParamList, typeof route_names.CALCULATION_SCREEN>;

export default route_names;
