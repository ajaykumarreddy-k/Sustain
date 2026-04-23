import fs from 'fs';
async function run() {
  const urls = [
    'https://raw.githubusercontent.com/ajaykumarreddy-k/Sustain/main/README.md',
    'https://raw.githubusercontent.com/ajaykumarreddy-k/Sustain/main/backend/README.md',
    'https://raw.githubusercontent.com/ajaykumarreddy-k/Sustain/main/abstract&doc.txt',
    'https://raw.githubusercontent.com/ajaykumarreddy-k/Sustain/main/abstract%26doc.txt'
  ];
  let i = 1;
  for (const url of urls) {
    try {
      const resp = await fetch(url);
      if (resp.ok) {
        const text = await resp.text();
        fs.writeFileSync('file' + i + '.txt', text);
        console.log('Saved', url, 'to file' + i + '.txt');
      } else {
        console.log('Failed', url, resp.status);
      }
    } catch (e) {
       console.log('Failed', url, e.message);
    }
    i++;
  }
}
run();
