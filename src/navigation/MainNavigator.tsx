import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { TIndicatorConfig } from '@/lib/indicators';
import HomeScreen from '@/screens/Home';
import ValuesScreen from '@/screens/Values';
import DetailsScreen from '@/screens/Details';

export type MainStackParamList = {
  Home: undefined;
  Values: TIndicatorConfig;
  Details: TIndicatorConfig;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Values" component={ValuesScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
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

export type TDetailsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Details',
  'HomeStack'
>;
