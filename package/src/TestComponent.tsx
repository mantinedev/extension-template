import React from 'react';
import { Box, BoxProps, ElementProps } from '@mantine/core';
import classes from './TestComponent.module.css';

export interface TestComponentProps extends BoxProps, ElementProps<'div'> {
  label: React.ReactNode;
}

export function TestComponent({ label, ...others }: TestComponentProps) {
  return (
    <Box className={classes.root} {...others}>
      TestComponent
    </Box>
  );
}
