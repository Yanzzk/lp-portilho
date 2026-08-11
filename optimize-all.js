const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const publicImagesDir = 'C:\\Users\\ggdea\\OneDrive\\Área de Trabalho\\lp-portilho\\padaria-app\\public\\images';
  
  // 1. Convert Logo
  console.log("Convertendo Logo...");
  const logoSrc = 'C:\\Users\\ggdea\\OneDrive\\Área de Trabalho\\lp-portilho\\otimizador-imagens\\logo-lp-portilho.png';
  if (fs.existsSync(logoSrc)) {
    await sharp(logoSrc)
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(publicImagesDir, 'logo.webp'));
    console.log("Logo convertida para logo.webp");
  }

  // 2. Convert all other PNGs in public/images
  console.log("Convertendo outros PNGs na pasta images...");
  const files = fs.readdirSync(publicImagesDir);
  for (const file of files) {
    if (file.endsWith('.png')) {
      const srcPath = path.join(publicImagesDir, file);
      const destPath = path.join(publicImagesDir, file.replace('.png', '.webp'));
      await sharp(srcPath)
        .webp({ quality: 75, effort: 6 })
        .toFile(destPath);
      console.log(`Convertido: ${file} -> ${path.basename(destPath)}`);
      // Delete original PNG
      fs.unlinkSync(srcPath);
      console.log(`Deletado original: ${file}`);
    }
  }
}

optimizeImages().catch(console.error);
