import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import { ComponentDoc, withCustomConfig, PropItem } from 'react-docgen-typescript';

const EXCLUDE_PROPS = [
  'className',
  'classNames',
  'styles',
  'unstyled',
  'component',
  'key',
  'ref',
  'style',
  'sx',
  'm',
  'mx',
  'my',
  'mt',
  'ml',
  'mr',
  'mb',
  'p',
  'px',
  'py',
  'pt',
  'pl',
  'pr',
  'pb',
  'bg',
  'bga',
  'bgp',
  'bgr',
  'bgsz',
  'bottom',
  'c',
  'display',
  'ff',
  'fs',
  'fw',
  'fz',
  'h',
  'inset',
  'left',
  'lh',
  'lts',
  'mah',
  'maw',
  'mih',
  'miw',
  'opacity',
  'pos',
  'right',
  'ta',
  'td',
  'top',
  'tt',
  'w',
  'vars',
  'variant',
  'mod',
  'hiddenFrom',
  'visibleFrom',
  'renderRoot',
  'lightHidden',
  'darkHidden',
];

const getDocgenParser = (tsConfigPath: string) =>
  withCustomConfig(tsConfigPath, {
    savePropValueAsString: true,
    shouldExtractLiteralValuesFromEnum: true,
    propFilter: (prop: PropItem) => {
      if (
        EXCLUDE_PROPS.includes(prop.name) ||
        prop.name.startsWith('__') ||
        prop.name.startsWith('data-')
      ) {
        return false;
      }

      if (prop.name === 'variant' && prop.type.name === 'string') {
        return false;
      }

      if (prop.declarations !== undefined && prop.declarations.length > 0) {
        return Boolean(
          prop.declarations.find((declaration) => !declaration.fileName.includes('node_modules'))
        );
      }

      return true;
    },
  });

function replaceBackticks(str: string): string {
  return str.replace(/`([^`]+)`/g, '<code>$1</code>');
}

const replace = {
  'DefaultMantineColor | undefined': 'MantineColor',
  DefaultMantineColor: 'MantineColor',
  ReactText: 'string | number',
  'ReactElement<any, string | ((props: any) => ReactElement<any, any>) | (new (props: any) => Component<any, any, any>)>':
    'ReactElement',
  'string | number | boolean | {} | ReactElement<any, string | ((props: any) => ReactElement<any, any>) | (new (props: any) => Component<any, any, any>)> | ReactNodeArray | ReactPortal | ((value: number) => ReactNode)':
    'ReactNode | (value: number) => ReactNode',
  'Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | undefined':
    'React.ComponentPropsWithoutRef<"div">',
  'PointerEvents | undefined': 'React.CSSProperties["pointerEvents"]',
  'Width<string | number> | undefined': 'React.CSSProperties["width"]',
  ReactNode: 'React.ReactNode',
  '(string & {}) | MantineSize | undefined': 'MantineSize',
  '(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ... | undefined; }) | undefined':
    'React.ComponentPropsWithoutRef<"div">',
  'Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | undefined':
    'React.ComponentPropsWithoutRef<"img">',
  'Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | undefined':
    'React.ComponentPropsWithoutRef<"button">',
};

function prepareDeclaration(declaration: ComponentDoc) {
  const data: any = { ...declaration };
  delete data.tags;
  delete data.methods;

  Object.keys(data.props).forEach((prop) => {
    delete data.props[prop].parent;
    delete data.props[prop].declarations;
    delete data.description;

    if (data.props[prop].type.name === 'enum') {
      data.props[prop].type.name = data.props[prop].type.raw;
    }

    if (data.props[prop].type.name in replace) {
      data.props[prop].type.name = (replace as any)[data.props[prop].type.name];
    }

    if (prop === 'radius') {
      data.props[prop].type.name = 'MantineRadius | number';
    }

    data.props[prop].type.name = data.props[prop].type.name
      .replace(' | undefined', '')
      .replace('undefined |', '')
      .replace('"xs" | "sm" | "md" | "lg" | "xl"', 'MantineSize')
      .trim();
  });

  // This sorts the props object in ascending order
  const ordered = Object.keys(data.props)
    .sort()
    .reduce<Record<string, any>>((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[key] = data.props[key];
      data.props[key].description = replaceBackticks(data.props[key].description);
      return obj;
    }, {});

  data.props = ordered;

  return data;
}

interface GenerateDeclarations {
  componentsPaths: string[];
  tsConfigPath: string;
  outputPath: string;
}

export async function generateDeclarations({
  componentsPaths,
  tsConfigPath,
  outputPath,
}: GenerateDeclarations) {
  componentsPaths.forEach((componentPath) => {
    if (!fs.existsSync(componentPath)) {
      process.stdout.write(chalk.red`Path ${componentPath} does not exist \n`);
      process.exit(1);
    }
  });

  const declarations = getDocgenParser(tsConfigPath)
    .parse(componentsPaths)
    .reduce<Record<string, any>>((acc, declaration) => {
      const componentName: string =
        declaration.displayName
          ?.replace(/@mantine\/([^\s]+)\//, '')
          .replace(/@mantinex\/([^\s]+)\//, '') || 'DisplayNameMissing';
      acc[componentName] = prepareDeclaration(declaration);
      return acc;
    }, {});

  await fs.ensureDir(outputPath);
  await fs.writeJSON(path.join(outputPath, 'docgen.json'), declarations, {
    spaces: 2,
  });
}
