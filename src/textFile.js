import fsPromises from "fs/promises";
import fs from "fs";
import path from "path";
import moji from "moji";

export default class TextFile {
  constructor(file) {
    this.file = file;
  }

  async convert() {
    const absolutePath = path.resolve(this.file);
    try {
      const stats = fs.statSync(absolutePath);
      if (stats.isFile()) {
        await this.#convertMojiInFile(absolutePath);
      } else if (stats.isDirectory()) {
        const dir = fs.readdirSync(absolutePath);
        for (const item of dir) {
          const itemPath = path.join(absolutePath, item);
          await new File(itemPath).convertMojiInPath();
        }
      }
    } catch (error) {
      console.error(`パス:"${absolutePath}"の処理中にエラーが発生しました。`);
      throw error;
    }
  }

  async #convertMojiInFile(file) {
    try {
      const targetFile = await fsPromises.readFile(file, "utf-8");
      const convertedFile = moji(targetFile).convert("ZE", "HE").toString();
      await fsPromises.writeFile(file, convertedFile);
    } catch (error) {
      console.error(`ファイル:${file}の変換中にエラーが発生しました。`);
      throw error;
    }
  }
}
