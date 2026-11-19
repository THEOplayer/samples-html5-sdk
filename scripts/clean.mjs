// Removes every node_modules folder and package-lock.json file in the repository,
// so the next npm install in each sample starts from scratch.
import { readdirSync, rmSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

function clean(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const path = join(dir, entry.name);
        if (entry.isDirectory() && entry.name === 'node_modules') {
            remove(path);
        } else if (entry.isDirectory() && entry.name !== '.git') {
            clean(path);
        } else if (entry.isFile() && entry.name === 'package-lock.json') {
            remove(path);
        }
    }
}

function remove(path) {
    rmSync(path, { recursive: true, force: true });
    console.log(`Removed ${relative(root, path)}`);
}

clean(root);
