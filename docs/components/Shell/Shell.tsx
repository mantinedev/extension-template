import React from 'react';
import cx from 'clsx';
import { AppShell, Container, Group, RemoveScroll, useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { ColorSchemeControl, HeaderControls } from '@mantinex/mantine-header';
import { MantineLogo } from '@mantinex/mantine-logo';
import { meta } from '@mantinex/mantine-meta';
import { PACKAGE_DATA } from '../../data';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod + J', toggleColorScheme]]);

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className={cx(RemoveScroll.classNames.zeroRight, classes.header)}>
        <Container size="lg" px="md" className={classes.inner}>
          <a
            href="https://mantine.dev/"
            target="_blank"
            className={cx('mantine-focus-auto', classes.logo)}
            rel="noreferrer"
          >
            <MantineLogo size={30} />
          </a>

          <HeaderControls
            visibleFrom="sm"
            githubLink={PACKAGE_DATA.repositoryUrl}
            withDirectionToggle={false}
            withSearch={false}
            withSupport={false}
            discordLink={meta.discordLink}
          />

          <Group hiddenFrom="sm">
            <ColorSchemeControl />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <div className={classes.main}>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}
