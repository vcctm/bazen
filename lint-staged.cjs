module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "prettier --write",
    "eslint --max-warnings=0",
    () => "tsc-files --noEmit",
    "vitest related --run",
  ],
};
