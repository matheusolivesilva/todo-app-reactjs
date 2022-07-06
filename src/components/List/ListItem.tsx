import { Column, Text, Row, Icon } from 'components';
import React from 'react';

export type ListItemProps = {
  index: number;
  id: string;
  task: string;
  isDone: number;
  isActive: boolean;
  onClick: (index: number) => void;
};

export const ListItem: React.FC<ListItemProps> = ({ index, task, isDone, isActive, onClick }) => {
  return (
    <Column
      width="100%"
      bg="rgba(0, 0, 0, 0.2)"
      p="20px"
      borderRadius="4px"
      mb="10px"
      cursor="pointer"
      borderLeftWidth="5px"
      borderLeftStyle="solid"
      borderLeftColor={isActive ? '#fff' : 'transparent'}
      onClick={(): void => onClick(index)}
    >
      <Row>
        <Text flex={1}>{task}</Text>
        {isDone === 1 && <Icon variant="done-white" />}
      </Row>
    </Column>
  );
};
