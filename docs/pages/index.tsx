import React from 'react';
import { Button, Group } from '@mantine/core';
import { TestComponent } from 'mantine-extension-template';
import 'mantine-extension-template/styles.css';

export default function IndexPage() {
  return (
    <Group mt={50} justify="center">
      <TestComponent label="test" />
      <Button size="xl">Welcome to Mantine!</Button>
    </Group>
  );
}
