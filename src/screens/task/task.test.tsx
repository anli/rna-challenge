import {render} from '@testing-library/react-native';
import React from 'react';
import TaskScreen from './task';

describe('Task Screen', () => {
  it(`Scenario: See Task Screen
    Given any
    When I am at Task Screen
    Then I should see 'Tasks'`, () => {
    const {getByText} = render(<TaskScreen.Component />);
    expect(getByText('Tasks')).toBeDefined();
  });
});
