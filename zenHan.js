#!/usr/bin/env node

import minimist from "minimist";
import ora from "ora";
import File from "./file.js";

const argvs = minimist(process.argv.slice(2));

class ZenHan {
  constructor(argvs) {
    this.argvs = argvs;
  }

  async run() {
    const loading = this.#spinnerAnimation();
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
        console.error("\n対象のファイル及びディレクトリが存在しませんでした。");
      } else {
        console.error("\n" + error.message);
      }
      loading.fail("解析中にエラーが発生しました。");
    }
  }

  #spinnerAnimation() {
    const spinner = ora("解析中...").start();
    spinner.color = "yellow";
    return spinner;
  }
}

const zenHan = new ZenHan(argvs);
zenHan.run();
