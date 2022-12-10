import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TestComponent } from 'mantine-extension-template';

const code = `
import { TestComponent } from 'mantine-extension-template';

function Demo() {
  return (
    <div>
      <div>Test component Demo:</div>
      <TestComponent />
    </div>
  );
}
`;

function Demo() {
  return (
    <div>
      <div>Test component Demo:</div>
      <TestComponent color="cyan">Test component</TestComponent>
    </div>
  );
}

export const testDemo: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
