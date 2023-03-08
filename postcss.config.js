module.exports = {
  plugins: {
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3,
      features: {
        'custom-properties': false
      }
    },
    'postcss-flexbugs-fixes': {},
    'postcss-custom-media': {
      importFrom: ['./lib/custom-media.json']
    },
    'postcss-nested': {}
  }
};
