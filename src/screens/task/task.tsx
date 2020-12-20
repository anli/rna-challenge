import {StackNavigationOptions} from '@react-navigation/stack';
import {Colors} from '@theme';
import React from 'react';
import {FlatList} from 'react-native';
import {Appbar, FAB, List} from 'react-native-paper';
import styled from 'styled-components/native';
import Checkboxes from './checkboxes';
import useTasks from './use-tasks';

const AppbarHeaderTheme = {
  colors: {
    primary: '#f6f6f6',
  },
};

const Component = () => {
  const {data} = useTasks();

  return (
    <Screen>
      <Appbar.Header theme={AppbarHeaderTheme}>
        <Appbar.Content title="Tasks" />
      </Appbar.Header>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <List.Item
            testID={`Task.${item.id}`}
            title={item.name}
            description={item.description}
            right={() => (
              <Checkboxes
                completedCount={item.completedCount}
                notCompletedCount={item.notCompletedCount}
              />
            )}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <CreateButton testID="CreateButton" icon="plus" />
    </Screen>
  );
};

const options = {
  headerShown: false,
};

export default class TaskScreen {
  static Component: () => JSX.Element = Component;
  static options: StackNavigationOptions = options;
}

const CreateButton = styled(FAB)`
  position: absolute;
  margin: 16px;
  right: 0;
  bottom: 0;
  background-color: ${Colors.Primary};
`;

const Screen = styled.SafeAreaView`
  flex: 1;
`;
