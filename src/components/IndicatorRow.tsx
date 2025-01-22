import React from 'react';
import {useColorScheme} from 'nativewind';
import {Text, TouchableOpacity, Image} from 'react-native';

import Row from '@/components/Row';

type TIndicatorRowProps = {
  index: number;
  key: string;
  label: string;
  unit: string;
  goToValues: () => void;
  goToDetails: () => void;
};

function IndicatorRow(props: TIndicatorRowProps) {
  const {index, label, unit, goToValues, goToDetails} = props;

  const {colorScheme} = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <Row index={index}>
      <TouchableOpacity onPress={goToValues}>
        <Text className="font-medium text-lg dark:text-gray-100 text-gray-950">
          {label}
        </Text>
        <Text className="text-sm dark:text-gray-100 text-gray-950">{unit}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToDetails}>
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
    </Row>
  );
}

export default IndicatorRow;
