# mantine-extension-template

Template repository for Mantine extensions. It includes package build, publishing, testing,
linting scripts and Next.js based documentation template. To get started with this template
click _"Use this template"_ button or follow [this link](https://github.com/mantinedev/mantine-extension-template/generate) (note that you need to be logged in your GitHUb account to use it). You can also [download zip](https://github.com/mantinedev/mantine-extension-template/archive/refs/heads/master.zip) and setup repository yourself.

## Prerequisites

- Node.js 16.x – will not work with 17+
- [yarn v1](https://classic.yarnpkg.com/lang/en/)
- [yalc](https://github.com/wclr/yalc) – `npm install -g yalc`

## Get started

- Generate new repository using the template
- Clone generated repository
- Update [settings.js](https://github.com/mantinedev/mantine-extension-template/blob/master/settings.js) with your package information
- Update `name` and `description` fields in [package.json](https://github.com/mantinedev/mantine-extension-template/blob/master/package.json#L2-L4)
- Remove `"mantine-extension-template": "file:.yalc/mantine-extension-template"` line from [`docs/package.json`](https://github.com/mantinedev/mantine-extension-template/blob/master/docs/package.json)
- Install dependencies: `yarn`
- Link your package with [yalc](https://github.com/wclr/yalc) – `yalc publish`
- Start storybook with `npm run storybook`
- Start documentation with `npm start`

## Publishing package

To publish package to npm registry run one of the following commands:

- `npm run release:patch` – release 1.0.x version
- `npm run release:minor` – release 1.x.0 version
- `npm run release:major` – release x.0.0 version

## Testing scripts

- `npm run typecheck` – checks validity of types
- `npm run lint` – lints package code
- `npm run jest` – package unit tests
- `npm run prettier:test` – checks package code formatting
