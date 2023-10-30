import React from 'react';
import { Title } from '@mantine/core';
import type { PackageData } from '../../data';
import classes from './PageHeader.module.css';

interface PageHeaderProps {
  data: PackageData;
}

export function PageHeader({ data }: PageHeaderProps) {
  return (
    <header className={classes.root}>
      <Title>{data.packageName}</Title>
    </header>
  );
}
