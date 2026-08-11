const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:\\Users\\ggdea\\OneDrive\\Área de Trabalho\\lp-portilho\\LightHouse Otimizations - JSON\\www.paesedeliciasmt.com.br-20260811T003046.json', 'utf8'));
const audits = data.audits;
for (const key in audits) {
  const audit = audits[key];
  if (audit.id === 'color-contrast' || audit.id === 'label' || audit.id === 'link-name') {
      if (audit.score !== null && audit.score < 0.9) {
          console.log(audit.id, JSON.stringify(audit.details));
      }
  }
}
