import React, {ReactNode} from 'react';
import {View} from 'react-native';

type TRowProps = {
  index: number;
  children: ReactNode;
};

function Row(props: TRowProps) {
  const {index, children} = props;

  return (
    <View
      className={`flex-row justify-between items-center py-2 px-4 border-b dark:border-gray-500 border-gray-700 ${
        !index && 'border-t'
      }`}>
      {children}
    </View>
  );
}

export default Row;
