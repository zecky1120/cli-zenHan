#!/usr/bin/env node

import minimist from "minimist";
import spinner from "../src/spinner.js";
import File from "../src/file.js";

const argvs = minimist(process.argv.slice(2));
const loading = spinner();

class ZenHan {
  constructor(argvs) {
    this.argvs = argvs;
  }

  async run() {
    if (!this.argvs._.length) {
      loading.fail("対象となるファイルかフォルダを指定してください。");
      return;
    }
    try {
      for (const argv of this.argvs._) {
        await new File(argv).convertMojiInPath();
      }
      loading.succeed("解析が成功しました。");
    } catch (error) {
      if (error.code === "ENOENT") {
        console.error("対象のファイル及びディレクトリが存在しませんでした。");
      }
      loading.fail("解析中にエラーが発生しました。");
    }
  }
}

const zenHan = new ZenHan(argvs);
await zenHan.run();
