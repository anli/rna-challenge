import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';

const Component = () => {
  return (
    <View>
      <Text>Setting</Text>
    </View>
  );
};

const options = {
  headerShown: false,
};

export default class SettingScreen {
  static Component: () => JSX.Element = Component;
  static options: StackNavigationOptions = options;
}
