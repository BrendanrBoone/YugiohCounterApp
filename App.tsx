/**
 * App.tsx
 * Entry point into the application as pointed out by Software Engineer Davidさん
 *
 * Brendan Boone's Yugioh App starts here :)
 * I'm just gonna mesh together a lot of my ideas from the Awesome Receipt App
 * and any useful code from the sample code in the template.
 */

import React from 'react';
import { useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import StackNavigationScreen from './src/components/nav_stacks/StackNavigationScreen';
import AppState from './src/components/state/AppState';

function App(): React.JSX.Element {

  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <AppState>
        <StackNavigationScreen />
      </AppState>
    </NavigationContainer>
  );
}

export default App;
