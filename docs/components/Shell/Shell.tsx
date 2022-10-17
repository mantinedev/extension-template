import React from 'react';
import { AppShell } from '@mantine/core';
import { Header } from './Header';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <AppShell header={<Header />} padding={0}>
      {children}
    </AppShell>
  );
}
