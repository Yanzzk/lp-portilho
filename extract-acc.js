const fs = require('fs');
const path = require('path');
const dir = path.join('C:\\', 'Users', 'ggdea', 'OneDrive', 'Área de Trabalho', 'lp-portilho', 'LightHouse Otimizations - JSON');
const files = fs.readdirSync(dir);
for (const f of files) {
  if (!f.endsWith('.json')) continue;
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  console.log('=== ' + f + ' ===');
  const audits = data.audits;
  for (const key in audits) {
    const audit = audits[key];
    if (audit.score !== null && audit.score < 0.9 && audit.title.includes('accessible names')) {
       console.log(audit.id, JSON.stringify(audit.details, null, 2));
    }
  }
}
