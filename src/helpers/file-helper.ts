import { readFile } from "fs/promises";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "src", "posts");

export const loadContent = async () => {
  let content: string | null = null;

  try {
    content = await readFile(path.join(POSTS_DIR, "hello-mdx.mdx"), "utf-8");
  } catch (e) {}

  return content;
};
