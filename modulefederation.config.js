const deps = require("./package.json").dependencies;

module.exports = {
  name: "thewebuiguy",
  exposes: {
    "./Button": "./src/components/Button",
    // "./ButtonOutline": "./src/components/ButtonOutline",
  },
  remotes: {
  },
  filename: "remoteEntry.js",
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