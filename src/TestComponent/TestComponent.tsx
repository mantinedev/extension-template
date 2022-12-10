import React from 'react';
import { MantineColor, useMantineTheme } from '@mantine/core';

export interface TestComponentProps {
  /** Key of theme.colors */
  color: MantineColor;
  children?: React.ReactNode;
}

export function TestComponent({ color, children }: TestComponentProps) {
  const theme = useMantineTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.black,
        color: theme.colors[color][6],
      }}
    >
      {children}
    </div>
  );
}
