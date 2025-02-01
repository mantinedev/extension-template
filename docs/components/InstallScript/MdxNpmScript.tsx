import { Group, Tabs } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { NpmIcon, YarnIcon } from '@mantinex/dev-icons';
import { CodeHighlight } from '@mantinex/shiki';
import classes from './MdxNpmScript.module.css';

interface MdxNpmScriptProps {
  yarnScript: string;
  npmScript: string;
}

export function MdxNpmScript({ yarnScript, npmScript }: MdxNpmScriptProps) {
  const [tab, setTab] = useLocalStorage({
    key: 'script-tab-value',
    defaultValue: 'yarn',
  });

  return (
    <Tabs value={tab} onChange={(val) => setTab(val!)} variant="pills" classNames={classes}>
      <Tabs.List>
        <Tabs.Tab value="yarn">
          <Group gap={5}>
            <YarnIcon className={classes.icon} size={16} />
            <span>yarn</span>
          </Group>
        </Tabs.Tab>
        <Tabs.Tab value="npm">
          <Group gap={5}>
            <NpmIcon className={classes.icon} size={16} />
            <span>npm</span>
          </Group>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="yarn">
        <CodeHighlight
          className={classes.code}
          code={yarnScript}
          language="bash"
          data-without-radius
        />
      </Tabs.Panel>

      <Tabs.Panel value="npm">
        <CodeHighlight className={classes.code} code={npmScript} language="bash" />
      </Tabs.Panel>
    </Tabs>
  );
}
