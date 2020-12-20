import {Colors} from '@theme';
import React from 'react';
import {Checkbox} from 'react-native-paper';
import styled from 'styled-components/native';

const Checkboxes = ({
  completedCount,
  notCompletedCount,
}: {
  completedCount: number;
  notCompletedCount: number;
}) => {
  const checkboxes = Array(notCompletedCount)
    .fill('unchecked')
    .concat(Array(completedCount).fill('checked'));

  return (
    <Container>
      {checkboxes.map((status, index) => (
        <Checkbox
          key={index}
          testID={`Checkbox.${status}`}
          status={status}
          color={Colors.Primary}
        />
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
`;

export default Checkboxes;
