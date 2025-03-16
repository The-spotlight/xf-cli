import { create } from "./base/create";
import { build } from "./base/build";
import { registerCommand } from "./base/registerCommand";
import { greet } from "./base/greet";
import { info } from "./base/info";
import { serve } from "./base/serve";
import { preview } from "./base/preview";

// 注册创建命令
registerCommand(create)
// 注册构建命令
registerCommand(build)
// 注册打招呼命令
registerCommand(greet)
// 注册信息命令
registerCommand(info)
// 注册服务命令
registerCommand(serve)
// 注册预览命令
registerCommand(preview)