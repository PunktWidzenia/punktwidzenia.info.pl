export const config = { api: { bodyParser: { sizeLimit: "15mb" } } };

import fs from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { jsFilename, jsCode, imgFilename, imgDataUrl } = req.body || {};
  if (!jsFilename || !jsCode || !imgFilename || !imgDataUrl) {
    return res.status(400).json({ error: "Brak wymaganych pól" });
  }

  const projectRoot = process.cwd(); // Next.js root
  const folderA = path.join(projectRoot, "src", "articles"); // folder A
  const folderB = path.join(projectRoot, "public");

  await fs.mkdir(folderA, { recursive: true });
  await fs.mkdir(folderB, { recursive: true });

  await fs.writeFile(path.join(folderA, jsFilename), jsCode, "utf8");

  // imgDataUrl: "data:image/webp;base64,...."
  const base64 = imgDataUrl.split(",")[1];
  const imgBuffer = Buffer.from(base64, "base64");
  await fs.writeFile(path.join(folderB, imgFilename), imgBuffer);

  return res.status(200).json({ ok: true });
}
