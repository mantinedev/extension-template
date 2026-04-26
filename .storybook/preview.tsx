import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import type { Preview } from '@storybook/react';
import React, { useEffect } from 'react';
import { useGlobals } from 'storybook/preview-api';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Mantine color scheme',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [
    (renderStory: any, context: any) => {
      const [{ theme }, updateGlobals] = useGlobals();

      useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
          const isMod = event.metaKey || event.ctrlKey;
          const isJ = event.code === 'KeyJ';

          if (!isMod || !isJ) {
            return;
          }

          event.preventDefault();
          updateGlobals({ theme: theme === 'dark' ? 'light' : 'dark' });
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
      }, [theme, updateGlobals]);

      const scheme = (context.globals.theme || 'light') as 'light' | 'dark';

      return <MantineProvider forceColorScheme={scheme}>{renderStory()}</MantineProvider>;
    },
  ],
};

export default preview;
