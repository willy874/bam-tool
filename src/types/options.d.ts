import { GitOptions } from "./git";

export interface ToolOptions {
  root: string;
  git?: Partial<GitOptions>;
}
