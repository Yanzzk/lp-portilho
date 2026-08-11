const fs = require('fs');

const file = 'C:\\Users\\ggdea\\OneDrive\\Área de Trabalho\\lp-portilho\\LightHouse Otimizations - JSON\\www.paesedeliciasmt.com.br-20260811T003046.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

console.log("=== LIGHTHOUSE PERFORMANCE AUDIT ===");
const audits = data.audits;
for (const key in audits) {
  const audit = audits[key];
  if (audit.score !== null && audit.score < 0.9 && audit.score >= 0) {
    console.log(`- ${audit.title} (Score: ${audit.score})`);
    if (audit.displayValue) console.log(`  Value: ${audit.displayValue}`);
  }
}
