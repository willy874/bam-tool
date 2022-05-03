import yargs from "yargs/yargs";
import git from "./src/git";
import { ToolOptions } from "@/types/options";

export default function (config: ToolOptions): void {
  const argv = yargs(process.argv.slice(2)).parse();
  const command = argv._;
  if (!config.root) {
    config.root = process.cwd();
  }
  if (command[0] === "git") {
    git(command, config);
  }
}
