module.exports = {
  extends: ["prettier", "eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    "import/no-extraneous-dependencies": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-import-module-exports": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
        singleQuote: false,
        trailingComma: "none",
        printWidth: 150,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        arrowParens: "avoid"
      }
    ]
  },
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "react", "@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {},
  globals: {
    JSX: true,
    module: "readonly"
  }
};
