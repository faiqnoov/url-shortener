import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const templatePath = path.resolve('public/redirect.html.template');
const outputPath = path.resolve('public/redirect.html');

const html = fs.readFileSync(templatePath, 'utf8');

const injected = html
  .replace('__SUPABASE_URL__', process.env.VITE_SUPABASE_URL)
  .replace('__SUPABASE_ANON_KEY__', process.env.VITE_SUPABASE_KEY);

fs.writeFileSync(outputPath, injected);

console.log('✅ redirect.html generated with environment variables.');