import React from 'react';
import cx from 'clsx';
import type { MDXComponents } from 'mdx/types';
import { Image, Code, Title } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';
import classes from './mdx-components.module.css';

function MdxTitle({
  id,
  children,
  order = 2,
  ...others
}: React.ComponentPropsWithoutRef<typeof Title>) {
  return (
    <>
      <div id={id} data-heading={children} data-order={order} className={classes.titleOffset} />
      <Title order={order} className={classes.title} {...others}>
        <a className={cx(classes.titleLink, 'mantine-focus-auto')} href={`#${id}`}>
          {children}
        </a>
      </Title>
    </>
  );
}

export const h = (order: 1 | 2 | 3 | 4 | 5 | 6) => (props: any) => (
  <MdxTitle order={order} {...props} />
);

function getLanguage(children: any) {
  const matches = (children.props.className || '').match(/language-(?<lang>.*)/);
  return matches && matches.groups && matches.groups.lang ? matches.groups.lang : 'tsx';
}

function getCode(children: any) {
  return children.props.children;
}

function MdxPre({ children }: { children?: React.ReactNode }) {
  return (
    <CodeHighlight
      className={classes.code}
      code={getCode(children)}
      language={getLanguage(children)}
    />
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: Image as any,
    ul: (props) => <ul {...props} className={classes.ul} />,
    li: (props) => <li {...props} className={classes.li} />,
    p: (props) => <p {...props} className={classes.paragraph} />,
    code: Code as any,
    h1: h(1),
    h2: h(2),
    h3: h(3),
    h4: h(4),
    h5: h(5),
    h6: h(6),
    pre: MdxPre,
    ...components,
  };
}
