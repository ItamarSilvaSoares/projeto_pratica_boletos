module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'google',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'ignorePatterns': ['**/models/index.js'],
  'rules': {
    'new-cap': ['error', {'capIsNew': false}],

  },
};
