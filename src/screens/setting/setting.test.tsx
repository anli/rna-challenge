import {render} from '@testing-library/react-native';
import React from 'react';
import SettingScreen from './setting';

describe('Setting Screen', () => {
  it(`Scenario: See Setting Screen
    Given any
    When I am at Setting Screen
    Then I should see 'Setting'`, () => {
    const {getByText} = render(<SettingScreen.Component />);
    expect(getByText('Setting')).toBeDefined();
  });
});
