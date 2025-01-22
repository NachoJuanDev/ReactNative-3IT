import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import HomeScreen from '@/screens/Home';
import ValuesScreen from '@/screens/Values';
import { TIndicatorConfig } from '@/lib/indicators';

export type MainStackParamList = {
  Home: undefined;
  Values: TIndicatorConfig;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Values" component={ValuesScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;

export type THomeScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Home',
  'HomeStack'
>;

export type TValuesScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Values',
  'HomeStack'
>;
