import Header from '@/components/Header';
import ValueRow from '@/components/ValueRow';
import {TValuesScreenProps} from '@/navigation/MainNavigator';
import React from 'react';
import {View} from 'react-native';

function Values(props: TValuesScreenProps) {
  const {key, label} = props.route.params;
  return (
    <View className="flex-1 dark:bg-gray-900 bg-white">
      <Header title={label} />
      <ValueRow date="10/10/2024" value="$123.2" index={0} />
    </View>
  );
}

export default Values;
