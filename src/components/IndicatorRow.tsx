import {useColorScheme} from 'nativewind';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

type TIndicatorRowProps = {
  index: number;
  key: string;
  label: string;
  unit: string;
};

function IndicatorRow(props: TIndicatorRowProps) {
  const {index, label, unit} = props;

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme.colorScheme === 'dark';

  return (
    <View
      className={`flex-row justify-between items-center py-2 px-4 border-b dark:border-gray-500 border-gray-700 ${
        !index && 'border-t'
      }`}>
      <TouchableOpacity>
        <Text className="font-medium text-lg dark:text-gray-100 text-gray-950">
          {label}
        </Text>
        <Text className="text-sm dark:text-gray-100 text-gray-950">{unit}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        {isDarkMode ? (
          <Image
            className="h-6 w-6"
            source={require('../assets/icons/info_white.png')}
          />
        ) : (
          <Image
            className="h-6 w-6"
            source={require('../assets/icons/info_black.png')}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

export default IndicatorRow;
