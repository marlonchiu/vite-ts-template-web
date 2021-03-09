module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    process: false,
    require: false,
    module: false,
    __dirname: false,
    exports: true,
    APP: false
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'prettier/prettier': 'error',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'space-before-function-paren': 0,
    'vue/multiline-html-element-content-newline': 'off',
    'no-unused-vars': [
      2,
      {
        // 允许声明未使用变量 默认值 "all"
        vars: 'local',
        // 参数不检查 默认值 "after-used"
        args: 'none'
      }
    ],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',
    'no-irregular-whitespace': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],

    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'block-spacing': [2, 'always'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],

    // 要求尽可能地使用单引号
    quotes: [2, 'single'],
    // 尽可能不加分号 默认值 never
    semi: ['error', 'never'],

    // 要求缩进采用2个空格
    indent: [
      2,
      2,
      {
        // "SwitchCase"（默认：0）指定 switch-case 语句的缩进级别
        SwitchCase: 1
      }
    ],
    // vue 文件中 script 缩进2
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 1,
        ignores: []
      }
    ],

    // 要求块语句和类的开始或末尾有空行
    // 'padded-blocks': ['error', 'always'],

    // 要求缩进采用2个空格
    'vue/html-indent': ['error', 2],

    // 可以不强制使用自闭合标签
    'vue/html-self-closing': 'off',

    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  }
}
