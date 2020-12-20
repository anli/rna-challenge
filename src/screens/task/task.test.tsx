import {render, within} from '@testing-library/react-native';
import React from 'react';
import TaskScreen from './task';

describe('Task Screen', () => {
  it(`Scenario: See Task Screen
      Given any
      And that I have '3 tasks'
      And that I have 'first task' 'id is 1, name is Task A, 0 completedCount, 1 notCompleted Count'
      And that I have 'second task' 'id is 2, name is Task B, 2 completedCount, 1 notCompleted Count'
      And that I have 'third task' 'id is 3, name is Task C, 0 completedCount, 1 notCompleted Count'
      When I am at 'Task Screen'
      Then I should see 'Tasks'
      And I should see 'Create Button'
      And I should see 'tasks names'
      And I should see '1 unchecked checkbox' for 'first task'
      And I should see '1 unchecked and 2 checked checkbox' for 'second task'
      And I should see '1 unchecked checkbox' for 'third task'`, () => {
    const {getByText, getByTestId} = render(<TaskScreen.Component />);

    expect(getByText('Tasks')).toBeDefined();
    expect(getByTestId('CreateButton')).toBeDefined();
    expect(getByText('Task A')).toBeDefined();
    expect(getByText('Task B')).toBeDefined();
    expect(getByText('Task C')).toBeDefined();

    const firstTask = within(getByTestId('Task.1'));
    expect(firstTask).toBeDefined();
    expect(firstTask.queryAllByTestId('Checkbox.unchecked')).toHaveLength(1);
    expect(firstTask.queryAllByTestId('Checkbox.checked')).toHaveLength(0);

    const secondTask = within(getByTestId('Task.2'));
    expect(secondTask).toBeDefined();
    expect(secondTask.queryAllByTestId('Checkbox.unchecked')).toHaveLength(1);
    expect(secondTask.queryAllByTestId('Checkbox.checked')).toHaveLength(2);

    const thirdTask = within(getByTestId('Task.3'));
    expect(thirdTask).toBeDefined();
    expect(thirdTask.queryAllByTestId('Checkbox.unchecked')).toHaveLength(1);
    expect(thirdTask.queryAllByTestId('Checkbox.checked')).toHaveLength(0);
  });
});
