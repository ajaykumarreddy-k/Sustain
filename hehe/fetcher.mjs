import fs from 'fs';
async function run() {
  const urls = [
    'https://raw.githubusercontent.com/ajaykumarreddy-k/Sustain/main/README.md',
    'https://raw.githubusercontent.com/ajaykumarreddy-k/Sustain/main/backend/README.md',
    'https://raw.githubusercontent.com/ajaykumarreddy-k/Sustain/main/abstract&doc.txt'
  ];
  for (const url of urls) {
    try {
      const resp = await fetch(url);
      if (resp.ok) {
        const text = await resp.text();
        fs.writeFileSync(url.split('/').pop() + '.txt', text);
        console.log('Saved', url);
      } else {
        console.log('Failed', url, resp.status);
      }
    } catch (e) {
       console.log('Failed', url, e.message);
    }
  }
}
run();
