module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "prettier --write",
    "eslint --max-warnings=0 --ignore-pattern",
    () => "tsc-files --noEmit",
    "vitest related --run",
  ],
};
