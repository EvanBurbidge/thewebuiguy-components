const cracoModuleFederation = require('craco-module-federation');
const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [{
    plugin: cracoModuleFederation,
    options: { useNamedChunkIds: true } //THIS LINE IS OPTIONAL
  }, {
    plugin: CracoAlias,
    options: {
      source: 'tsconfig',
      baseUrl: '.',
      tsConfigPath: './tsconfig.paths.json',
    },
  },],
  webpack: {
    plugins: {
      remove: ["ModuleScopePlugin"],
    },
  },
}