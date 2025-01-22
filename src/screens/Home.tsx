import React from 'react';
import {View, ScrollView} from 'react-native';

import {THomeScreenProps} from '@/navigation/MainNavigator';
import IndicatorRow from '@/components/IndicatorRow';
import indicators, {TIndicatorConfig} from '@/lib/indicators';
import Header from '@/components/Header';

function HomeScreen(props: THomeScreenProps) {
  const {navigate} = props.navigation;

  const goToValues = (params: TIndicatorConfig) => () =>
    navigate('Values', params);

  const goToDetails = (params: TIndicatorConfig) => () =>
    navigate('Details', params);

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
            goToValues={goToValues(indicator)}
            goToDetails={goToDetails(indicator)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
