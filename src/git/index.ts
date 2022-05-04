import simpleGit from "simple-git";
import { ToolOptions } from "@/types/options";
import path from "path";
import fs from "fs";

export default async function (
  command: Array<string | number>,
  options: Partial<ToolOptions>
): Promise<void> {
  const gitCommand = command.slice(1).map(String);
  const root = options.root || process.cwd();
  const gitConfig = options?.git || {};
  const config = gitConfig?.config || [];
  const git = simpleGit(root, { config });

  if (gitCommand[0] === "add") {
    try {
      git.add(gitCommand.slice(1));
    } catch (error) {
      console.log("Error");
    }
  }

  if (gitCommand[0] === "commit") {
    try {
      git.commit(gitCommand[1]);
    } catch (error) {
      console.log("Error");
    }
  }

  if (gitCommand[0] === "log") {
    console.log(await git.log());
  }

  const logData = await git.log();
  fs.promises.writeFile(
    path.join(root, "logs", "git-logs.json"),
    JSON.stringify(logData.all)
  );
  fs.promises.writeFile(
    path.join(root, "logs", "git-logs-latest.json"),
    JSON.stringify(logData.latest)
  );
}
