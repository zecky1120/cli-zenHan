#!/usr/bin/env node

import minimist from "minimist";
import ora from "ora";
import File from "./file.js";

const argvs = minimist(process.argv.slice(2));

class ZenHan {
  constructor(argvs) {
    this.argvs = argvs;
  }

  #spinnerAnimation() {
    const spinner = ora("解析中...").start();
    spinner.color = "yellow";
    return spinner;
  }
}
