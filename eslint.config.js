import tseslint from "typescript-eslint";
import { recommended, testFileRules } from "@fbgfi/eslint-config";
import { extendedPlugins } from "./lib/index.js";

export default tseslint.config(tseslint.configs.recommended,
  {
    ...recommended,
    plugins: extendedPlugins,
  },
  {
    files: ["**/*.{ts,tsx}"],
    name: "@fbgfi/tslint-config",
    rules: {
      "@fbgfi/require-described-generics": "warn",
      "@fbgfi/no-camel-types": "error",
    },
  },
  testFileRules
);
