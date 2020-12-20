import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {Appbar, List} from 'react-native-paper';

const AppbarHeaderTheme = {
  colors: {
    primary: '#f6f6f6',
  },
};

const Component = () => {
  const version = deviceInfoModule.getVersion();
  return (
    <View>
      <Appbar.Header theme={AppbarHeaderTheme}>
        <Appbar.Content title="Settings" />
      </Appbar.Header>

      <List.Item title="Version" description={version} />
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
