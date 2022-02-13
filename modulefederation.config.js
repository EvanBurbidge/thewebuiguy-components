const deps = require("./package.json").dependencies;
module.exports = {
  name: 'thewebuiguy',
  filename: 'remoteEntry.js',
  exposes: {
    './Input': './src/components/inputs/Input.tsx',
    './Button': './src/components/buttons/Button.tsx',
    './ButtonOutline': './src/components/buttons/ButtonOutline.tsx',
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};