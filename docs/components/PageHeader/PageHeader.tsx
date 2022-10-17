import React from 'react';
import { Container, Title } from '@mantine/core';
import { NpmIcon, GithubIcon } from '@mantine/ds';
import { SETTINGS } from '../../settings';
import { LinkItem } from './LinkItem/LinkItem';
import useStyles from './PageHeader.styles';

export function PageHeader() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Title mb="xl">Mantine extension template</Title>

        <LinkItem label="Source" icon={<GithubIcon size={14} />} link={SETTINGS.repositoryUrl}>
          View source code
        </LinkItem>
        <LinkItem label="Package" icon={<NpmIcon size={14} />} link={SETTINGS.npmUrl}>
          View on npm
        </LinkItem>
      </Container>
    </div>
  );
}
