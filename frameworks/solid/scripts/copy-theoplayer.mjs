// OptiView Player loads its workers from libraryLocation, so the library files are served from public/vendor/theoplayer.
import { cpSync, mkdirSync, readdirSync } from 'node:fs';

const source = 'node_modules/theoplayer';
const destination = 'public/vendor/theoplayer';

mkdirSync(destination, { recursive: true });
for (const file of readdirSync(source)) {
    if (/\.(css|js|html|wasm)$/.test(file)) {
        cpSync(`${source}/${file}`, `${destination}/${file}`);
    }
}
