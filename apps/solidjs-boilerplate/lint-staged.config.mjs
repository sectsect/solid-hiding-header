export default {
  '*': ['secretlint'],
  'src/**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  'src/**/*.ts?(x)': () => 'npm run type-check',
  'src/**/*{,.*}.{css,scss}': ['stylelint --fix', 'stylelint'],
  'src/**/*.json': ['prettier --write'],
};
