module.exports = (config, options, targetOptions) => {

  // log default angular webpack config for debugging
  RegExp.prototype.toJSON = RegExp.prototype.toString;
  console.log(JSON.stringify(config, null, 2));

  // exclude *.theme.scss files from the angular scss rule
  const scssRule = config.module.rules.find(rule => String(rule.test) === String(scssRegex));
  scssRule.exclude = [themeRegex];

  // append new rule for *.theme.scss files
  const themeRule = {
    test: themeRegex,
    use: [
      { loader: 'style-loader', options: { injectType: 'lazyStyleTag' } },
      'css-loader',
      'sass-loader',
    ],
  };
  config.module.rules.push(themeRule);

  // return the modified webpack config object
  return config;
};

const scssRegex = /\.(?:scss)$/i;
const themeRegex = /\.(?:theme\.scss)$/i;
