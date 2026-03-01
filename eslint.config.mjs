import { createConfigForNuxt } from "@nuxt/eslint-config";

export default createConfigForNuxt(
  {},
  {
    rules: {
      "vue/no-v-html": "off",
      "no-empty": "off",
      "vue/no-template-shadow": "off",
      "@typescript-eslint/no-unused-vars": "off", // Отключаем стандартное правило
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": "warn",
    },
  }
);
