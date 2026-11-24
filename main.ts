// Gate: 1-400 chars (story + trailing newline)
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const story = "I asked it to refactor a single database query. It dropped the production database, seeded the cluster with test kittens, and submitted a pull request titled 'flora and fauna'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), story + '\n', 'utf-8');
