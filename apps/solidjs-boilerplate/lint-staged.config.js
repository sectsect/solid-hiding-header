module.exports = {
  '*': ['secretlint'],
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run type-check',
  '**/*{,.*}.{css,scss}': ['stylelint --fix', 'stylelint'],
  '*.json': ['prettier --write'],
};
