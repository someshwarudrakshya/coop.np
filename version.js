// version.js
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { readFileSync } from 'node:fs';

// Get current folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read package.json
const packageJsonPath = `${__dirname}/package.json`;
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

// Update version with timestamp
packageJson.version = Date.now().toString();

// Write back to package.json
writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`Updated version to ${packageJson.version}`);
