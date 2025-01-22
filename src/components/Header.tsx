import {useNavigation} from '@react-navigation/native';
import {useColorScheme} from 'nativewind';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

type THeaderProps = {
  title: string;
};

function Header(props: THeaderProps) {
  const {title} = props;

  const navigation = useNavigation();
  const {colorScheme} = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View className="m-6 flex-row items-center gap-4">
      {navigation.canGoBack() && (
        <TouchableOpacity onPress={navigation.goBack}>
          {isDarkMode ? (
            <Image
              className="h-8 w-8"
              source={require('../assets/icons/left_white.png')}
            />
          ) : (
            <Image
              className="h-8 w-8"
              source={require('../assets/icons/left_black.png')}
            />
          )}
        </TouchableOpacity>
      )}

      <Text className=" font-semibold text-2xl dark:text-white text-gray-950">
        {title}
      </Text>
    </View>
  );
}

export default Header;
