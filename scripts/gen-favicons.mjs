// Genera favicon.ico (multi-res) y apple-icon.png a partir de src/app/icon.png.
// Uso: node scripts/gen-favicons.mjs
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile } from "node:fs/promises";

const SRC = "src/app/icon.png";

// PNGs en memoria para empaquetar dentro del .ico
const icoSizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  icoSizes.map((size) =>
    sharp(SRC).resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()
  )
);

const icoBuffer = await pngToIco(pngBuffers);
await writeFile("src/app/favicon.ico", icoBuffer);
console.log(`favicon.ico generado (${icoSizes.join("/")} px) — ${icoBuffer.length} bytes`);

// Apple touch icon: 180x180, fondo blanco (iOS no respeta transparencia)
await sharp(SRC)
  .resize(180, 180, { fit: "contain", background: "#ffffff" })
  .flatten({ background: "#ffffff" })
  .png()
  .toFile("src/app/apple-icon.png");
console.log("apple-icon.png generado (180x180, fondo blanco)");
