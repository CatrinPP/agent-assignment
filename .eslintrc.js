module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': ['airbnb'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': ['react'],
  'rules': {
    "prefer-destructuring": ["error", {
      "array": false,
      "object": true
    }, {
      "enforceForRenamedProperties": false
    }],
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-did-update-set-state': 'off',
    'no-mixed-operators': 'off',
    'no-plusplus': 'off',
    'max-len': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'eol-last': 'off',
    'linebreak-style': 'off',
    'react/jsx-tag-spacing': 'off',
    'object-curly-spacing': 'off',
    'no-trailing-spaces': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [".js", "jsx"]
      }
    ]
  }
};
