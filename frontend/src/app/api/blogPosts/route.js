import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "src", "data", "blogPost.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
