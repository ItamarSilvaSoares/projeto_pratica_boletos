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
  'ignorePatterns': ['**/models/index.js', 'node_modules'],
  'rules': {
    'new-cap': ['error', {'capIsNew': false}],

  },
};
