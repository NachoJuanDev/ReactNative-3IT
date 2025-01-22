import Header from '@/components/Header';
import ValueRow from '@/components/ValueRow';
import {fetchDetails} from '@/lib/api';
import useGet from '@/lib/useGet';
import {TValuesScreenProps} from '@/navigation/MainNavigator';
import React, {ReactNode} from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator,
  RefreshControl,
  Text,
} from 'react-native';

const formatValue = (value: string, unit: string) => {
  if (unit === 'Pesos') {
    return `$${value}`;
  }

  if (unit === 'Porcentaje') {
    return `${value}%`;
  }

  return value;
};

const Base = ({label, children}: {label: string; children: ReactNode}) => {
  return (
    <View className="flex-1 dark:bg-gray-900 bg-white">
      <Header title={label} />
      {children}
    </View>
  );
};

function Values(props: TValuesScreenProps) {
  const {key, label, mode, unit} = props.route.params;

  const {
    data: values,
    error,
    isLoading,
    onRefresh,
    isRefreshing,
  } = useGet<{key: string; mode: string}>(fetchDetails, {key, mode});

  if (isLoading) {
    return (
      <Base label={label}>
        <ActivityIndicator size="large" />
      </Base>
    );
  }

  if (error) {
    return (
      <Base label={label}>
        <Text className="p-4 text-center dark:text-gray-100 text-gray-950">
          {error}
        </Text>
      </Base>
    );
  }

  return (
    <Base label={label}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }>
        {values.map((value, index) => (
          <ValueRow
            key={index}
            index={0}
            date={value.Fecha}
            value={formatValue(value.Valor, unit)}
          />
        ))}
      </ScrollView>
    </Base>
  );
}

export default Values;
