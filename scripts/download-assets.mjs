import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const assets = {
  images: [
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/08/LogoGPInuevo-e1724898748309-224x74.png",
      path: "images/logo-gpi.png",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/plugins/gtranslate/flags/svg/en.svg",
      path: "images/flag-en.svg",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/plugins/gtranslate/flags/svg/es-ar.svg",
      path: "images/flag-es.svg",
    },
    // Client logos
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/08/Captura_de_pantalla_2024-08-28_195855-removebg-preview.png.webp",
      path: "images/clients/emave.webp",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2025/12/senderoresources_logo.jpeg",
      path: "images/clients/sendero-resources.jpeg",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2025/12/brt.png",
      path: "images/clients/brt.png",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2025/12/isologo-1.png",
      path: "images/clients/intersat.png",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2025/12/polosuraviation-1.png",
      path: "images/clients/polo-sur.png",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2025/12/SumarSalud.png",
      path: "images/clients/sumar-salud.png",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2025/12/logo.png",
      path: "images/clients/jlm-industria.png",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2025/12/losazules.jpg",
      path: "images/clients/los-azules.jpg",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2025/12/logo-new-cmsj.webp",
      path: "images/clients/cmsj.webp",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/09/419536116_122094691718187147_352710323596991893_n.jpg",
      path: "images/clients/san-juan-gobierno.jpg",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/12/descarga.png",
      path: "images/clients/grupo-petersen.png",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/12/01_fort_tm_logo_master-rgb.webp",
      path: "images/clients/fortuna.webp",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/09/ppi.png",
      path: "images/clients/ppi.png",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/08/Mgs-Consulting.png.webp",
      path: "images/clients/mgs-consulting.webp",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2025/12/ngx.png",
      path: "images/clients/ngx.png",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/08/ceras-logo-removebg-preview.png.webp",
      path: "images/clients/ceras.webp",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/08/3mg-logo.png",
      path: "images/clients/3mg.png",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/08/logo-1.png",
      path: "images/clients/logo-1.png",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/08/taranto-logo.png",
      path: "images/clients/taranto.png",
    },
  ],
  videos: [
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/08/11197719-uhd_3840_2160_30fps.mp4",
      path: "videos/hero-mountain.mp4",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/08/7647633-hd_1920_1080_30fps.mp4",
      path: "videos/consultores-office.mp4",
    },
    {
      url: "https://gpiconsultores.com.ar/wp-content/uploads/2024/07/1197802-hd_1920_1080_25fps.mp4",
      path: "videos/construccion-site.mp4",
    },
  ],
};

async function downloadFile(url, outputPath) {
  const fullPath = join(publicDir, outputPath);
  const dir = dirname(fullPath);

  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }

  if (existsSync(fullPath)) {
    console.log(`  SKIP ${outputPath} (already exists)`);
    return;
  }

  try {
    console.log(`  Downloading ${outputPath}...`);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(fullPath, buffer);
    console.log(`  OK   ${outputPath} (${(buffer.length / 1024).toFixed(1)}KB)`);
  } catch (err) {
    console.error(`  FAIL ${outputPath}: ${err.message}`);
  }
}

async function downloadBatch(items, concurrency = 4) {
  const queue = [...items];
  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length > 0) {
      const item = queue.shift();
      if (item) await downloadFile(item.url, item.path);
    }
  });
  await Promise.all(workers);
}

async function main() {
  console.log("Downloading images...");
  await downloadBatch(assets.images);

  console.log("\nDownloading videos...");
  await downloadBatch(assets.videos, 2);

  console.log("\nDone!");
}

main().catch(console.error);
