import Header from '@/components/Header';
import {fetchDetails} from '@/lib/api';
import useGet from '@/lib/useGet';
import {TDetailsScreenProps} from '@/navigation/MainNavigator';
import {useColorScheme} from 'nativewind';
import React, {ReactNode} from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator,
  RefreshControl,
  Text,
  Dimensions,
} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';

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

function Details(props: TDetailsScreenProps) {
  const {key, label, mode, unit} = props.route.params;

  const {colorScheme} = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const {
    data: details,
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

  if (error || !details.length) {
    return (
      <Base label={label}>
        <Text className="p-4 text-center dark:text-gray-100 text-gray-950">
          {error}
        </Text>
      </Base>
    );
  }

  const lastDetail = details[0];

  const data = details.length < 10 ? details : details.slice(0, 10);

  return (
    <Base label={label}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }>
        <View className="w-full flex-col">
          <Text className="text-center text-3xl dark:text-gray-100 text-gray-950">
            {formatValue(lastDetail.Valor, unit)}
          </Text>

          <View className="flex-row justify-between">
            <View className="w-1/2 p-4 ">
              <Text className="text-lg text-center  dark:text-gray-100 text-gray-950">
                Nombre
              </Text>
            </View>
            <View className="w-1/2 pt-4">
              <Text className="text-lg text-center dark:text-gray-100 text-gray-950">
                {label}
              </Text>
            </View>
          </View>

          <View className="flex-row justify-between">
            <View className="w-1/2 p-4 ">
              <Text className="text-lg text-center  dark:text-gray-100 text-gray-950">
                Fecha
              </Text>
            </View>
            <View className="w-1/2 pt-4">
              <Text className="text-lg text-center dark:text-gray-100 text-gray-950">
                {lastDetail.Fecha}
              </Text>
            </View>
          </View>

          <View className="flex-row justify-between">
            <View className="w-1/2 p-4 ">
              <Text className="text-lg text-center  dark:text-gray-100 text-gray-950">
                Unidad de Medida
              </Text>
            </View>
            <View className="w-1/2 pt-4">
              <Text className="text-lg text-center dark:text-gray-100 text-gray-950">
                {unit}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-1 p-4">
          <LineChart
            data={data.map(detail => ({
              value: Number(detail.Valor.replace('.', '').replace(',', '.')),
              label: detail.Fecha.split('-')
                .slice(1)
                .reverse()
                .join('/')
                .replace('0', ''),
            }))}
            hideDataPoints
            hideRules
            width={Dimensions.get('window').width * 0.7}
            spacing={(Dimensions.get('window').width * 0.7) / data.length}
            yAxisColor="#0BA5A4"
            xAxisColor="#0BA5A4"
            color="#0BA5A4"
            // eslint-disable-next-line react-native/no-inline-styles
            xAxisLabelTextStyle={{
              fontSize: 8,
              color: isDarkMode ? 'white' : 'black',
            }}
            // eslint-disable-next-line react-native/no-inline-styles
            yAxisTextStyle={{
              fontSize: 10,
              color: isDarkMode ? 'white' : 'black',
            }}
          />
        </View>
      </ScrollView>
    </Base>
  );
}

export default Details;
