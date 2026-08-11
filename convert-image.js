const sharp = require('sharp');
const fs = require('fs');

async function convertImage() {
  try {
    console.log("Iniciando conversão...");
    await sharp('C:\\Users\\ggdea\\OneDrive\\Área de Trabalho\\lp-portilho\\otimizador-imagens\\fachada.png')
      .webp({ quality: 60, effort: 6 }) // Alta compressão para webp (Whatsapp OG ideal < 300kb)
      .resize(1200, 630, { fit: 'cover' }) // Forçar tamanho ideal para OG
      .toFile('C:\\Users\\ggdea\\OneDrive\\Área de Trabalho\\lp-portilho\\padaria-app\\public\\images\\fachada.webp');
    console.log("Conversão para WEBP concluída com sucesso!");
  } catch (error) {
    console.error("Erro na conversão:", error);
  }
}

convertImage();
