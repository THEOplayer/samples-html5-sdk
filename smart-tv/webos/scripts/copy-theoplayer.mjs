// Copies the THEOplayer library files from the npm package to the libs/ folder of each app.
import { cpSync, mkdirSync, readdirSync } from 'node:fs';

const source = 'node_modules/theoplayer';
const destinations = ['app/libs', 'example-with-ui/libs'];

for (const destination of destinations) {
    mkdirSync(destination, { recursive: true });
    for (const file of readdirSync(source)) {
        if (/\.(css|js|html|wasm)$/.test(file)) {
            cpSync(`${source}/${file}`, `${destination}/${file}`);
        }
    }
}
