const fs = require('fs');
const readline = require('readline');

async function extractLastMessage() {
  const fileStream = fs.createReadStream('C:\\Users\\ggdea\\.gemini\\antigravity\\brain\\1d0e4d21-0e5a-40e6-ade7-dfb73cb1de1c\\.system_generated\\logs\\transcript_full.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lastUserInput = '';

  for await (const line of rl) {
    const entry = JSON.parse(line);
    if (entry.type === 'USER_INPUT' && entry.content) {
      lastUserInput = entry.content;
    }
  }

  // Parse if it's JSON
  try {
    const jsonStr = lastUserInput.substring(lastUserInput.indexOf('{'));
    const lh = JSON.parse(jsonStr);
    console.log("=== LIGHTHOUSE AUDIT ===");
    for (const key in lh.audits) {
        const audit = lh.audits[key];
        if (audit.score !== null && audit.score < 0.9) {
           console.log(`- ${audit.title} (Score: ${audit.score})`);
           if (audit.id === 'color-contrast' || audit.id === 'label' || audit.id === 'link-name') {
              console.log('Details:', JSON.stringify(audit.details));
           }
        }
    }
  } catch(e) {
    console.log("Not JSON or error parsing:", e.message);
  }
}

extractLastMessage();
