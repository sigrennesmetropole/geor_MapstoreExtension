const {
    paths,
    bundles,
    themeEntries,
    commonPlugins,
    alias,
    getProdPlugins,
    getOptimizationConfig,
    deepMergeConfig
} = require('./webpack.base');

const baseConfig = require('./MapStore2/build/buildConfig')({
    bundles,
    themeEntries,
    paths,
    plugins: commonPlugins,
    prod: true,
    publicPath: "dist/",
    cssPrefix: '.MapStoreExtension',
    prodPlugins: getProdPlugins(),
    alias
});

const optimizationConfig = getOptimizationConfig(true);

// Merge optimizations with buildConfig output
module.exports = deepMergeConfig(baseConfig, {
    cache: optimizationConfig.cache,
    optimization: optimizationConfig.optimization
});
