/**
 * App.tsx
 * Entry point into the application as pointed out by Software Engineer Davidさん
 *
 * Brendan Boone's Yugioh App starts here :)
 * I'm just gonna mesh together a lot of my ideas from the Awesome Receipt App
 * and any useful code from the sample code in the template.
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import StackNavigationScreen from './src/components/nav_stacks/StackNavigationScreen';
import AppState from './src/components/state/AppState';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <StackNavigationScreen />
    </NavigationContainer>
  );
}

export default App;
