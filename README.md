# Mantine Extension Template

This is a template repository for creating Mantine extensions. It includes all necessary configuration files and scripts to get you started.

## Get started

1. Click "Use this template" button at the top of the page to create a new repository based on this template.
2. Clone the repository to your local machine and install dependencies (`yarn`)
3. Run `nvm use` to switch to the correct node version
4. Come up with a name for your extension and replace all occurrences of `mantine-extension-template` with your extension name
5. Change `repository` field in [package/package.json](https://github.com/mantinedev/extension-template/blob/master/package/package.json) to point to your repository
6. Run `npm run docgen` to generate files required for documentation
7. To verify that everything works correctly, run `npm run build` and `npm test` to build and test your initial setup
8. All good! Start developing your extension.

## Local development

To develop your extension locally, run the following commands:

- Run `npm run storybook` to start the storybook
- Run `npm run dev` to start the documentation
- To regenerate props documentation, run `npm run docgen`

## Publishing package

1. Login with your npm account by running `npm login`, if you have 2FA enabled, [generate automation token](https://docs.npmjs.com/creating-and-viewing-access-tokens) and add it to your `~/.npmrc` file
2. Make sure that your package name is unique and does not exist on npm yet
3. Run `npm run release:patch`, `npm run release:minor` or `npm run release:major` to publish new version of your package

## Publish documentation

By default, the documentation is deployed to GitHub Pages. The script to deploy documentation runs automatically when the package is published. In order for
this script to work correctly, you need to make sure that `repository` field in [package/package.json](https://github.com/mantinedev/extension-template/blob/master/package/package.json) points to your repository.

To publish documentation manually, run `npm run docs:deploy`.
