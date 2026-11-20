// Copies the THEOplayer library files from the npm package to static/THEOplayer, which is served with the app.
import { cpSync, mkdirSync, readdirSync } from 'node:fs';

const source = 'node_modules/theoplayer';
const destination = 'static/THEOplayer';

mkdirSync(destination, { recursive: true });
for (const file of readdirSync(source)) {
    if (/\.(css|js|html|wasm)$/.test(file)) {
        cpSync(`${source}/${file}`, `${destination}/${file}`);
    }
}
