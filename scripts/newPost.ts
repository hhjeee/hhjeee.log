import { execa } from 'execa';
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

(async () => {
  const category = await ask('카테고리 입력 : ');
  const title = await ask('포스트 제목 입력: ');
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  const date = new Date().toISOString().split('T')[0];

  const frontmatter = `---
title: '${title}'
date: '${date}'
desc: ''
---

여기에 본문을 작성하세요.

`;

  const postDir = path.join('src/posts', category);
  const filePath = path.join(postDir, `${slug}.mdx`);

  fs.mkdirSync(postDir, { recursive: true });
  fs.writeFileSync(filePath, frontmatter);

  console.log(`🌟 포스트 생성 완료: ${filePath}`);

  await execa('code', ['--reuse-window', filePath]);
  rl.close();
})();
