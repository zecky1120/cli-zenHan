import fsPromises from "fs/promises";
import fs from "fs";
import path from "path";
import moji from "moji";

export default class File {
  constructor(file) {
    this.file = file;
  }

  async convertMojiInPath() {
    const absolutePath = path.resolve(this.file);
    const stats = fs.statSync(absolutePath);
    if (stats.isFile()) {
      try {
        const targetFile = await fsPromises.readFile(absolutePath, "utf-8");
        const convertedFile = moji(targetFile).convert("ZE", "HE").toString();
        await fsPromises.writeFile(absolutePath, convertedFile);
      } catch (error) {
        console.error(error.message);
      }
      this.#convertMojiInFile(this.file);
    } else if (stats.isDirectory()) {
      const dir = fs.readdirSync(absolutePath);
      for (const item of dir) {
        const itemPath = path.join(absolutePath, item);
        await this.#convertMojiInFile(itemPath);
      }
    }
  }

  async #convertMojiInFile(file) {
    try {
      const targetFile = await fsPromises.readFile(file, "utf-8");
      const convertedFile = moji(targetFile).convert("ZE", "HE").toString();
      await fsPromises.writeFile(file, convertedFile);
    } catch (error) {
      console.error(error.message);
    }
  }
}
