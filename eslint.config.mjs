import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint"; // Hlavní nástroj pro TS
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended, // Přidá TS pravidla
  prettierRecommended, // Přidá Prettier (musí být poslední)
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      // Zde můžete přidat vlastní pravidla
    },
  }
);
