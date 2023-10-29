import React from 'react';
import { Box, BoxProps, ElementProps } from '@mantine/core';

export interface TestComponentProps extends BoxProps, ElementProps<'div'> {
  label: React.ReactNode;
}

export function TestComponent({ label, ...others }: TestComponentProps) {
  return <Box {...others}>TestComponent</Box>;
}
