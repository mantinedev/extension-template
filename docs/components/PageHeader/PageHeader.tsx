import React from 'react';
import { Container, Title, Text } from '@mantine/core';
import { NpmIcon, GithubIcon } from '@mantine/ds';
import { IconLicense, IconCode } from '@tabler/icons';
import SETTINGS from '../../../settings';
import packageJson from '../../../package.json';
import { LinkItem } from './LinkItem/LinkItem';
import useStyles from './PageHeader.styles';

export function PageHeader() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Title mb="sm" className={classes.title}>
          {packageJson.name}
        </Title>
        <Text color="dimmed" mb="xl" className={classes.description}>
          {packageJson.description}
        </Text>

        <LinkItem label="Source" icon={<GithubIcon size={14} />} link={SETTINGS.repositoryUrl}>
          View source code
        </LinkItem>

        <LinkItem
          label="Package"
          icon={<NpmIcon size={14} />}
          link={`https://www.npmjs.com/package/${packageJson.name}`}
        >
          {packageJson.name}
        </LinkItem>

        <LinkItem
          label="Contribute"
          icon={<IconCode size={14} stroke={1.5} />}
          link={`${SETTINGS.repositoryUrl}/blob/master/CONTRIBUTING.md`}
        >
          Contributing guidelines
        </LinkItem>

        <LinkItem
          label="License"
          icon={<IconLicense size={14} stroke={1.5} />}
          link={`${SETTINGS.repositoryUrl}/blob/master/LICENSE`}
        >
          MIT
        </LinkItem>
      </Container>
    </div>
  );
}
