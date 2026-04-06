#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// 1. 설정 및 경로 정의
const skillRoot = path.join(__dirname, '..');
const projectRoot = process.cwd();
const resourcesPath = path.join(skillRoot, 'resources');
const componentsSrc = path.join(resourcesPath, 'hanatour-components');

console.log('🚀 하나투어 디자인 시스템 자동 설정 시작...');

// 2. 프로젝트 확인
if (!fs.existsSync(path.join(projectRoot, 'package.json'))) {
  console.error('❌ 에러: 현재 디렉토리가 프론트엔드 프로젝트가 아닙니다. (package.json 없음)');
  process.exit(1);
}

// 3. 컴포넌트 복사 위치 결정
let componentsDestBase = fs.existsSync(path.join(projectRoot, 'src')) 
  ? path.join(projectRoot, 'src', 'components') 
  : path.join(projectRoot, 'components');

if (!fs.existsSync(componentsDestBase)) {
  fs.mkdirSync(componentsDestBase, { recursive: true });
}

const componentsDest = path.join(componentsDestBase, 'hanatour-components');

// 4. 컴포넌트 복사 실행
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  copyDir(componentsSrc, componentsDest);
  console.log(`✅ 컴포넌트 복사 완료: ${componentsDest}`);
} catch (err) {
  console.error('❌ 컴포넌트 복사 중 에러 발생:', err.message);
}

// 5. Tailwind 설정 파일 찾기 및 수정
const tailwindFiles = ['tailwind.config.js', 'tailwind.config.ts', 'tailwind.config.mjs', 'tailwind.config.cjs'];
let tailwindConfigPath = null;

for (const file of tailwindFiles) {
  const fullPath = path.join(projectRoot, file);
  if (fs.existsSync(fullPath)) {
    tailwindConfigPath = fullPath;
    break;
  }
}

if (!tailwindConfigPath) {
  console.log('⚠️ Tailwind 설정 파일을 찾을 수 없습니다. 수동 설정을 권장합니다.');
} else {
  // 간단한 문자열 기반 주입 (복잡한 AST 파싱 대신 범용적으로 동작하도록 함)
  let content = fs.readFileSync(tailwindConfigPath, 'utf8');
  
  // 이미 적용되어 있는지 확인
  if (content.includes('ht-master-purple')) {
    console.log('ℹ️ 이미 하나투어 디자인 시스템 설정이 적용되어 있습니다.');
  } else {
    // 템플릿 파일에서 테마 확장 부분 읽기
    const templatePath = path.join(resourcesPath, 'tailwind.config.js');
    const templateContent = fs.readFileSync(templatePath, 'utf8');
    
    // theme: { extend: { ... } } 부분 추출
    const themeExtendMatch = templateContent.match(/extend:\s*\{([\s\S]*?)\n\s{4}\},/);
    if (themeExtendMatch) {
      const htThemeExtend = themeExtendMatch[1];
      
      // 기존 tailwind.config의 extend 블록에 주입
      if (content.includes('extend: {')) {
        content = content.replace('extend: {', `extend: {${htThemeExtend},`);
        fs.writeFileSync(tailwindConfigPath, content);
        console.log(`✅ Tailwind 테마 확장 완료 (${path.basename(tailwindConfigPath)})`);
      } else {
        console.log('⚠️ tailwind.config에서 "extend: {" 블록을 찾지 못해 테마 자동 주입에 실패했습니다.');
      }
    }
  }
}

console.log('\n✨ 하나투어 디자인 시스템 설정이 완료되었습니다!');
console.log('이제 컴포넌트를 임포트하여 사용하세요:');
console.log(`import { Button } from '@/components/hanatour-components/Button';`);
console.log('\n디자인 가이드라인: resources/hanatour-design-system.md 를 참고하세요.');
