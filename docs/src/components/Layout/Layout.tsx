import React from 'react';
import { MantineProvider } from '@mantine/core';
import { TestComponent } from '@/extension';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
      <TestComponent />
    </MantineProvider>
  );
}
