import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {SettingScreen, TaskScreen} from '@screens';
import {Colors} from '@theme';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={BottomTab.Component}
            options={BottomTab.options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const Tab = createBottomTabNavigator();

const BottomTabComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      tabBarOptions={{showLabel: false, activeTintColor: Colors.Primary}}>
      <Tab.Screen
        name="Tasks"
        component={TaskScreen.Component}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="check" color={color} size={size} />
          ),
          ...TaskScreen.options,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen.Component}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
          ...SettingScreen.options,
        }}
      />
    </Tab.Navigator>
  );
};

const BottomTabOptions = {
  headerShown: false,
};

class BottomTab {
  static Component: () => JSX.Element = BottomTabComponent;
  static options: StackNavigationOptions = BottomTabOptions;
}
