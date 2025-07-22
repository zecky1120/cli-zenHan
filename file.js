import fsPromises from "fs/promises";
import fs from "fs";
import path from "path";
import moji from "moji";

export default class File {
  constructor(file) {
    this.file = file;
  }
}
