module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },

  settings: { react: { version: "detect" } },

  ignorePatterns: ["dist", ".eslintrc.cjs"],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Intégration avec Prettier
  ],

  plugins: ["react-refresh", "unused-imports"],

  rules: {
    // 🔄 React Refresh
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // 🚫 Imports inutilisés
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    // ✨ Style de code supplémentaire
    "no-console": "warn",
    "no-debugger": "warn",
    "react/prop-types": "off", // utile uniquement si tu n'utilises pas TypeScript
  },
};
