import path from "node:path";
import simpleGit from "simple-git";
import signale from "signale";
import { argv } from "yargs";
import { execa } from "execa";
import chalk from "chalk";
import { updateVersion } from "./update-version";

const git = simpleGit();

const _argv = argv as any;
const type = _argv._[0];
const stage = _argv.stage;

async function release() {
  const status = await git.status();

  if (status.files.length !== 0) {
    signale.error("There are uncommitted files left");
    process.exit(1);
  }

  const { version, name } = updateVersion({ type, stage });
  signale.info(`Releasing package, next version is ${chalk.cyan(version)}`);

  try {
    const baseParams = ["publish", path.join(__dirname, "..")];
    const tagParams = !!stage ? ["--tag", "next"] : [];
    await execa("yarn", [...baseParams, ...tagParams]);
    signale.success(
      `Package ${chalk.cyan(`${name}@${version}`)} was published to npm`
    );
  } catch (error) {
    signale.error(`Failed to publish package ${chalk.red(name)}`);
    process.stdout.write(chalk.red`${error.message}\n`);
    process.exit(1);
  }
}

release();
