import { useRouter } from 'next/router';
import { Box, ScrollArea, Space, Text } from '@mantine/core';
import { useScrollSpy } from '@mantine/hooks';
import classes from './TableOfContents.module.css';

interface TableOfContentsProps {
  withTabs: boolean;
}

export function TableOfContents({ withTabs }: TableOfContentsProps) {
  const router = useRouter();
  const spy = useScrollSpy({
    selector: '#mdx [data-heading]',
    getDepth: (element) => Number(element.getAttribute('data-order')),
    getValue: (element) => element.getAttribute('data-heading') || '',
  });

  const filteredHeadings = spy.data.filter((heading) => heading.depth > 1);

  if (filteredHeadings.length === 0) {
    return null;
  }

  const items = filteredHeadings.map((heading, index) => (
    <Text
      key={heading.id}
      component="a"
      className={classes.link}
      mod={{ active: spy.active === index }}
      href={`#${heading.id}`}
      __vars={{ '--toc-link-offset': `${heading.depth - 1}` }}
      onClick={(event) => {
        event.preventDefault();
        router.replace(`${router.pathname}#${heading.id}`);
      }}
    >
      {heading.value}
    </Text>
  ));

  return (
    <Box component="nav" mod={{ 'with-tabs': withTabs }} className={classes.wrapper}>
      <div className={classes.inner}>
        <div>
          <Text className={classes.title}>Table of contents</Text>
          <ScrollArea.Autosize mah="calc(100vh - 172px)" type="never">
            <div className={classes.items}>{items}</div>
            <Space h="xl" />
          </ScrollArea.Autosize>
        </div>
      </div>
    </Box>
  );
}
