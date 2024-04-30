/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/Header';
import { colors } from './src/library/theme/colors';
import MainScreen from './src/screens/MainScreen';
import { commonStyles } from './src/library/theme/commonStyles';
import OrientationProvider from './src/context/OrientationContext';

type orientationTypes = {
  currentOrientation: 'portrait' | 'landscape'
}

function App(): React.JSX.Element {



  const [orientation, setOrientation] = useState()

  return (
    <OrientationProvider>

    <View style={commonStyles.flexFull}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'light-content'}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
        />
      <MainScreen />
    </View>
        </OrientationProvider>
  )
}

export default App;
