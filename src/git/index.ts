import simpleGit from "simple-git";
import { ToolOptions } from "@/types/options";

export default function git(
  command: Array<string | number>,
  options: Partial<ToolOptions>
): void {
  const gitCommand = command.slice(1).map(String);
  const root = options.root;
  const gitConfig = options?.git || {};
  const config = gitConfig?.config || [];
  const git = simpleGit(root, { config });
  if (gitCommand[0] === "add") {
    git.add(gitCommand.slice(1));
  }
}
