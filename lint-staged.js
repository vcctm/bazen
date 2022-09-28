/* eslint-disable no-undef */
module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "eslint --max-warnings=0",
    "yarn test --bail --watchAll=false --findRelatedTests --passWithNoTests",
    () => "tsc-files --noEmit",
  ],
  "*.{js,jsx,ts,tsx,json,css,js}": ["prettier --write"],
};
