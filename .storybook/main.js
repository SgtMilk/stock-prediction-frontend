// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

module.exports = {
  "stories": [
    "../globalComponents/**/*.stories.@(js|jsx|ts|tsx)",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}