import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import './styles/global.css';

import MainNavigator from '@/navigation/MainNavigator';

function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default App;
