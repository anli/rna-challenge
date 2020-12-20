import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import TaskCreate from './task-create';

describe('Task Create Screen', () => {
  it(`Scenario: See Task Create Screen
      Given any
      When I am at 'Task Create Screen'
      Then I should see 'Name Input'
      And I should see 'Interval Input'
      And I should see 'Frequency Input'
      And I should see 'Save Button'`, () => {
    const {getByTestId} = render(<TaskCreate.Component />);

    expect(getByTestId('NameInput')).toBeDefined();
    expect(getByTestId('IntervalInput')).toBeDefined();
    expect(getByTestId('FrequencyInput')).toBeDefined();
    expect(getByTestId('SaveButton')).toBeDefined();
  });

  it(`Scenario: Update fields
      Given any
      When I am at 'Task Create Screen'
      Then I update 'Name Input' with 'Task Name'
      And I update 'Interval Input' with 'Weekly'
      And I update 'Frequency Input' with '2'`, () => {
    const {getByTestId} = render(<TaskCreate.Component />);

    fireEvent(getByTestId('NameInput'), 'onChangeText', 'Task Name');

    fireEvent(getByTestId('IntervalInput'), 'onChange', {
      nativeEvent: {selectedSegmentIndex: 1},
    });

    fireEvent(getByTestId('FrequencyInput'), 'onValueChange', 2);
  });
});
