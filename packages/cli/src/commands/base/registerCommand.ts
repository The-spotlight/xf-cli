import { program, Command } from "commander";

type Fn = (p: Command) => Command;
// 负责插件的注册
export function registerCommand(fn: Fn) {
  program.addCommand(fn(program));
}
