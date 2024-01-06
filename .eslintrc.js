module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
        'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off' ,
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    // 'comma-dangle': ['error', 'always-multiline'],
  },
}
