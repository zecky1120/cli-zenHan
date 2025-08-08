[↓ English Subtitles](#cli-zenhanenglish-subtitles)

# CLI-ZenHan

CLI上で全角英数字を半角英数字に一括置換してくれる機能です。

## 対象ファイルの種類

本ツールは、以下のテキストファイルに対して全角→半角の変換を行います。

- `.txt`
- `.md`
- `.html`
- `.csv`（文字コードがUTF-8であれば）
- `.js`, `.json`

※ `.docx`, `.xlsx`, `.pdf` などのバイナリファイルには対応していません。

## インストール

### ローカルインストール

`npm install cli-zenhan`
もしくは
`npm i cli-zenhan`

### グローバルインストール

`npm install -g cli-zenhan`

## 利用方法

複数のファイルやフォルダを指定することができます。フォルダを指定するとフォルダ内の中身の全てのファイルを置換してくれます。

### ローカルインストールの場合

`npx zenhan ファイルのパス フォルダ`

### グローバルインストールの場合

`zenhan ファイルのパス フォルダ`

---

# CLI-ZenHan(English Subtitles)

A CLI tool that batch converts full-width alphanumeric characters to half-width alphanumeric characters.

## Supported File Types

This tool performs full-width to half-width conversion on the following text-based file types:

- `.txt`
- `.md`
- `.html`
- `.csv`(as long as the encoding is UTF-8)
- `.js`, `.json`

Note: Binary file types such as .docx, .xlsx, and .pdf are not supported.

## Installation

### Local Installation

`npm install cli-zenhan`
or
`npm i cli-zenhan`

### Global Installation

`npm install -g cli-zenhan`

## Usage

You can specify multiple files and folders. If you specify a folder, the tool will recursively convert all supported files within that folder.

### When installed locally

`npx zenhan <file paths or folders>`

### When installed globally

`zenhan <file paths or folders>`
