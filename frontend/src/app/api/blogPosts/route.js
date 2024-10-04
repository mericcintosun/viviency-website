import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    // Dosya yolunu oluştururken "public" klasörüne dikkat edin
    const filePath = path.join(process.cwd(), "src", "data", "blogPost.json");

    // JSON dosyasını oku
    const jsonData = await fs.readFile(filePath, "utf-8");

    // JSON formatına çevir
    const data = JSON.parse(jsonData);

    // Response döndür
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Dosya okunurken bir hata oluştu:", error);

    // Hata durumunda 500 statüsü ile hata döndür
    return new Response(JSON.stringify({ message: "Veriler alınamadı" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
