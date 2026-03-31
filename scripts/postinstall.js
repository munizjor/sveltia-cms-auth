import { execFileSync } from 'child_process';
import { resolve } from 'path';

if (process.env.WORKERS_CI !== '1') {
  process.exit(0);
}

console.log('Workers CI detected; building site assets for Wrangler.');

execFileSync(process.execPath, [resolve('node_modules/vite/bin/vite.js'), 'build', '--mode', 'site'], {
  stdio: 'inherit',
});
