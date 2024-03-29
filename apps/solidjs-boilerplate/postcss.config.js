/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
const postcssImport = require('postcss-import');
// @ https://tailwindcss.com/docs/using-with-preprocessors#nesting
const tailwindcssNesting = require('tailwindcss/nesting')(
  // eslint-disable-next-line import/no-unresolved
  require('postcss-nesting'),
);
const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env')({
  stage: 1, // Default: stage: 2   @ https://cssdb.org/#staging-process
  importFrom: 'src/styles/base/settings.css',
  autoprefixer: {
    // grid: 'autoplace',
    grid: false, // For IE11 @ https://github.com/tailwindlabs/discuss/issues/454#issuecomment-586379008
  },
  features: {
    'nesting-rules': false,
    'focus-within-pseudo-class': false,
    'custom-properties': {
      disableDeprecationNotice: true,
    },
  },
});
const postcssSortMediaQueries = require('postcss-sort-media-queries');
const postcssCombineSelectors = require('postcss-combine-duplicated-selectors');
const pxtorem = require('postcss-pxtorem')({
  replace: false,
});
// const postcssCalc = require('postcss-calc');
const postcssPseudoIs = require('postcss-pseudo-is');
const postcssHexrgba = require('postcss-hexrgba');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssReporter = require('postcss-reporter')({
  positionless: 'last',
});

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [
    postcssImport,
    tailwindcssNesting,
    tailwindcss,
    postcssPresetEnv,
    postcssSortMediaQueries,
    postcssCombineSelectors,
    pxtorem,
    // postcssCalc,
    postcssHexrgba,
    postcssPseudoIs,
    postcssFlexbugsFixes,
    postcssReporter,
  ],
};
