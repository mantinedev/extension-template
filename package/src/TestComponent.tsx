import React from 'react';
import { Box, BoxProps, ElementProps, MantineColor } from '@mantine/core';
import classes from './TestComponent.module.css';

export interface TestComponentProps extends BoxProps, ElementProps<'div'> {
  /** Label displayed inside the component, `'TestComponent'` by default */
  label: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color */
  color: MantineColor;
}

export function TestComponent({ label, ...others }: TestComponentProps) {
  return (
    <Box className={classes.root} {...others}>
      {label}
    </Box>
  );
}
