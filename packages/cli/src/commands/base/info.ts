import { logger } from "../../utils/logger";
import pc  from 'picocolors';
import pkg from '../../../package.json';

export function info() {
  // 打印日志
  // 提问
  logger.info("Using consola 3.0.0");
  logger.start("Building project...");
  logger.warn("A new version of consola is available: 3.0.1");
  logger.success("Project built!");
  logger.box("知行合一");
  logger.log('Info CLI');
  // 颜色控制
  logger.log(pc.bgGreen(`Product: xf-cli v${pkg.version}`));
  logger.log(pc.green(`Author: ${pkg.author}`));
  logger.log(pc.underline(`License: ${pkg.license}`));
}