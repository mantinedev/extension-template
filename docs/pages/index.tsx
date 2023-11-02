import React from 'react';
import { Container } from '@mantine/core';
import { Shell } from '../components/Shell';
import { PageHeader } from '../components/PageHeader';
import { PACKAGE_DATA } from '../data';
import Docs from '../docs.mdx';

export default function HomePage() {
  return (
    <Shell>
      <PageHeader data={PACKAGE_DATA} />

      <Container size="md">
        <Docs />
      </Container>
    </Shell>
  );
}
