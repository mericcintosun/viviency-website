import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "blogPost.json");

    const jsonData = await fs.readFile(filePath, "utf-8");

    const data = JSON.parse(jsonData);

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Dosya okunurken bir hata oluştu:", error);

    return new Response(JSON.stringify({ message: "Veriler alınamadı" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
