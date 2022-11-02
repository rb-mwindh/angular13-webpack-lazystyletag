module.exports = (config, options, targetOptions) => {

  // exclude *.theme.scss files from the angular scss rule
  const scssRule = config.module.rules.find(rule => String(rule.test) === String(scssRegex));
  scssRule.test = /\.(?<!theme\.)(?:scss)$/i;

  // append new rule for *.theme.scss files
  const themeRule = {
    test: themeRegex,
    use: [
      { loader: 'style-loader', options: { injectType: 'lazyStyleTag' } },
      'css-loader',
      'sass-loader',
    ],
  };
  config.module.rules.splice(0, 0, themeRule);

  // log modified webpack rules for debugging
  RegExp.prototype.toJSON = RegExp.prototype.toString;
  console.log(JSON.stringify(config.module.rules, null, 2));

  // return the modified webpack config object
  return config;
};

const scssRegex = /\.(?:scss)$/i;
const themeRegex = /\.(?:theme\.scss)$/i;
