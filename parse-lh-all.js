const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\ggdea\\OneDrive\\Área de Trabalho\\lp-portilho\\LightHouse Otimizations - JSON';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  console.log('=== ' + f + ' ===');
  const audits = data.audits;
  for (const key in audits) {
    const audit = audits[key];
    if (audit.score !== null && audit.score < 0.9) {
      console.log(-  (Score: ));
      if (audit.displayValue) console.log(  Value: );
      
      // Print specific details if available
      if (audit.details && audit.details.items && audit.details.items.length > 0) {
          if (audit.id === 'color-contrast' || audit.id === 'label') {
             console.log('  Details:');
             audit.details.items.forEach(i => console.log('   ' + JSON.stringify(i).substring(0, 150)));
          }
      }
    }
  }
}
