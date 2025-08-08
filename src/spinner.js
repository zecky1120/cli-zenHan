import ora from "ora";

export default function spinner() {
  return ora({
    text: "解析中...",
    color: "white",
    isEnabled: true,
  }).start();
}
