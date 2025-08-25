#!/usr/bin/env node

/**
 * Tailwind Class Audit Script
 * Enforces spacing contract and identifies off-contract values
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

// Approved spacing scale (Tailwind units)
const APPROVED_SPACING = [
  0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64
];

// Off-contract patterns to flag
const OFF_CONTRACT_PATTERNS = [
  // Arbitrary values
  /-[0-9]+px/,
  /-\[[0-9]+px\]/,
  // Off-contract spacing
  /-(p|m|gap|space)-[0-9]+(?!\d)/,
  // Specific problematic values
  /-(p|m|gap|space)-(7|9|11|13|14|15|17|18|19|21|22|23|25|26|27|28|29|30|31|33|34|35|36|37|38|39|41|42|43|44|45|46|47|49|50|51|52|53|54|55|57|58|59|60|61|62|63|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79|80|81|82|83|84|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99|100)/,
];

// Files to scan
const SCAN_EXTENSIONS = ['.svelte', '.ts', '.js', '.html'];
const IGNORE_DIRS = ['node_modules', '.svelte-kit', 'build', 'dist', '.git'];

function scanDirectory(dir, results = []) {
  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!IGNORE_DIRS.includes(item)) {
        scanDirectory(fullPath, results);
      }
    } else if (SCAN_EXTENSIONS.includes(extname(item))) {
      const content = readFileSync(fullPath, 'utf8');
      const violations = findViolations(content, fullPath);
      if (violations.length > 0) {
        results.push({ file: fullPath, violations });
      }
    }
  }
  
  return results;
}

function findViolations(content, filePath) {
  const violations = [];
  
  // Find all class attributes
  const classMatches = content.matchAll(/class[=:]\s*["'`]([^"'`]+)["'`]/g);
  
  for (const match of classMatches) {
    const classes = match[1].split(/\s+/);
    const lineNumber = getLineNumber(content, match.index);
    
    for (const className of classes) {
      // Check for off-contract patterns
      for (const pattern of OFF_CONTRACT_PATTERNS) {
        if (pattern.test(className)) {
          violations.push({
            className,
            line: lineNumber,
            type: 'off-contract-spacing'
          });
        }
      }
      
      // Check for arbitrary values
      if (className.includes('[') && className.includes('px')) {
        violations.push({
          className,
          line: lineNumber,
          type: 'arbitrary-px-value'
        });
      }
    }
  }
  
  return violations;
}

function getLineNumber(content, index) {
  return content.substring(0, index).split('\n').length;
}

function main() {
  console.log('🔍 Scanning for Tailwind spacing violations...\n');
  
  const results = scanDirectory('./src');
  
  if (results.length === 0) {
    console.log('✅ No spacing violations found!');
    process.exit(0);
  }
  
  console.log('❌ Found spacing violations:\n');
  
  let totalViolations = 0;
  
  for (const result of results) {
    console.log(`📁 ${result.file}`);
    
    for (const violation of result.violations) {
      console.log(`  Line ${violation.line}: "${violation.className}" (${violation.type})`);
      totalViolations++;
    }
    console.log('');
  }
  
  console.log(`\n📊 Total violations: ${totalViolations}`);
  console.log('\n💡 Recommendations:');
  console.log('  - Use spacing contract utilities: .section, .stack-*, .cluster-*');
  console.log('  - Replace arbitrary px values with Tailwind scale');
  console.log('  - Use container utilities: .container-standard, .container-narrow, .container-wide');
  
  process.exit(1);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
