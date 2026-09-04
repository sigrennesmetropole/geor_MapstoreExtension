const proxyConfig = require("./proxyConfig");
const {
    paths,
    bundles,
    themeEntries,
    commonPlugins,
    alias,
    getOptimizationConfig,
    deepMergeConfig,
} = require("./webpack.base");

const baseConfig = require("./MapStore2/build/buildConfig")({
    bundles,
    themeEntries,
    paths,
    plugins: commonPlugins,
    prod: false,
    publicPath: "dist/",
    cssPrefix: ".MapStoreExtension",
    prodPlugins: [],
    alias,
    proxy: proxyConfig,
});

const optimizationConfig = getOptimizationConfig(false);

// Merge optimizations with buildConfig output
module.exports = deepMergeConfig(baseConfig, {
    cache: optimizationConfig.cache,
    optimization: optimizationConfig.optimization,
});
