import React from 'react';
import {View, ScrollView} from 'react-native';

import {THomeScreenProps} from '@/navigation/MainNavigator';
import IndicatorRow from '@/components/IndicatorRow';
import Header from '@/components/Header';

function HomeScreen(_props: THomeScreenProps) {
  return (
    <View className="flex-1 dark:bg-gray-900 bg-white">
      <ScrollView>
        <Header title="Indicadores" />
        {indicators.map((indicator, index) => (
          <IndicatorRow
            index={index}
            key={indicator.key}
            label={indicator.label}
            unit={indicator.unit}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
