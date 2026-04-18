import { MantineDemo } from '@mantinex/demo';
import { TestComponent } from 'mantine-extension-template';
import React from 'react';

const code = `
import { TestComponent } from 'mantine-extension-template';

function Demo() {
  return <TestComponent label="Test component usage demo" />;
}
`;

function Demo() {
  return <TestComponent label="Test component usage demo" />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
