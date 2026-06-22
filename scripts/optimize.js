const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "../raw_images");
const outputDir = path.join(__dirname, "../public/images/produtos");

// Create output dir if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Error reading raw_images directory:", err);
    return;
  }

  const images = files.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));
  
  if (images.length === 0) {
    console.log("Nenhuma imagem encontrada na pasta raw_images.");
    return;
  }

  images.forEach((file, index) => {
    const inputPath = path.join(inputDir, file);
    // Pad index to 3 digits
    const paddedIndex = String(index + 1).padStart(3, "0");
    const newFileName = `produto-${paddedIndex}.webp`;
    const outputPath = path.join(outputDir, newFileName);

    sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true }) // Redimensiona para max 1200px
      .webp({ quality: 80, effort: 6 }) // Alta compressão WebP
      .toFile(outputPath)
      .then((info) => {
        console.log(`✅ [OTIMIZADO] ${file} -> ${newFileName} (${(info.size / 1024).toFixed(1)} KB)`);
      })
      .catch((err) => {
        console.error(`❌ Erro ao otimizar ${file}:`, err);
      });
  });
});
