import React from 'react';
import {View, Text} from 'react-native';
import Row from '@/components/Row';

type TValueRowProps = {
  index: number;
  date: string;
  value: string;
};

function ValueRow(props: TValueRowProps) {
  const {index, date, value} = props;

  return (
    <Row index={index}>
      <View className="flex-1 p-2">
        <Text className="dark:text-gray-100 text-gray-950">{date}</Text>
      </View>
      <View className="flex-1 p-2">
        <Text className="dark:text-gray-100 text-gray-950">{value}</Text>
      </View>
    </Row>
  );
}

export default ValueRow;
