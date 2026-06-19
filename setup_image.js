import fs from 'fs';
const b64 = fs.readFileSync('src/assets/profile_base64.txt', 'utf8').trim();
fs.writeFileSync('src/assets/profileImage.js', `export const profileImage = "data:image/jpeg;base64,${b64}";`);
const html = fs.readFileSync('index.html', 'utf8');
const newHtml = html.replace('<link rel="icon" type="image/svg+xml" href="/vite.svg" />', `<link rel="icon" type="image/jpeg" href="data:image/jpeg;base64,${b64}" />`);
fs.writeFileSync('index.html', newHtml);
