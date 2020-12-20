import SegmentedControl from '@react-native-community/segmented-control';
import Slider from '@react-native-community/slider';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Colors} from '@theme';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Appbar, Button, Caption, TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

const AppbarHeaderTheme = {
  colors: {
    primary: '#f6f6f6',
  },
};

const intervals = ['Daily', 'Weekly'];

const Component = () => {
  const {control} = useForm();

  return (
    <Screen>
      <Appbar.Header theme={AppbarHeaderTheme}>
        <Appbar.Content title="Create" />
      </Appbar.Header>

      <Content>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <NameInput
              testID="NameInput"
              mode="outlined"
              label="Name"
              onBlur={onBlur}
              onChangeText={(newValue) => onChange(newValue)}
              value={value}
            />
          )}
          name="name"
          rules={{required: true}}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({onChange, value}) => (
            <IntervalInput
              testID="IntervalInput"
              values={intervals}
              selectedIndex={value}
              onChange={(event) =>
                onChange(event.nativeEvent.selectedSegmentIndex)
              }
              activeFontStyle={{color: Colors.Primary}}
            />
          )}
          name="interval"
          rules={{required: true}}
          defaultValue={intervals.indexOf('Daily')}
        />

        <Controller
          control={control}
          render={({onChange, value}) => (
            <>
              <Caption>Repeats {value} times</Caption>
              <FrequencyInput
                testID="FrequencyInput"
                onValueChange={onChange}
                value={value}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor={Colors.Primary}
                thumbTintColor={Colors.Primary}
                maximumTrackTintColor={Colors.Disabled}
                step={1}
              />
            </>
          )}
          name="frequency"
          rules={{required: true}}
          defaultValue={1}
        />
      </Content>
      <Footer>
        <SaveButton testID="SaveButton" mode="contained">
          Save
        </SaveButton>
      </Footer>
    </Screen>
  );
};

const options = {
  headerShown: false,
};

export default class TaskCreateScreen {
  static Component: () => JSX.Element = Component;
  static options: StackNavigationOptions = options;
}

const Screen = styled.SafeAreaView`
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
  padding: 24px 24px 24px 24px;
`;

const NameInput = styled(TextInput)`
  margin-bottom: 24px;
`;

const IntervalInput = styled(SegmentedControl)`
  margin-bottom: 24px;
`;

const FrequencyInput = styled(Slider)`
  margin-bottom: 24px;
  margin-top: 8px;
  margin-left: -8px;
`;

const SaveButton = styled(Button)``;

const Footer = styled.View`
  padding: 24px 24px 24px 24px;
`;
