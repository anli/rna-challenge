import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import App from './app';

describe('App', () => {
  it(`Scenario: Can see Tasks Screen on App load
      Given any
      When App load
      Then I should see "Tasks"`, async () => {
    const {getByText} = render(<App />);
    await waitFor(() => expect(getByText('Tasks')).toBeDefined());

    expect(getByText('Tasks')).toBeDefined();
  });
});
