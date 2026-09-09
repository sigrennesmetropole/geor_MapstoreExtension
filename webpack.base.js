const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const themeEntries = require("./MapStore2/build/themes.js").themeEntries;
const extractThemesPlugin =
    require("./MapStore2/build/themes.js").extractThemesPlugin;
const ModuleFederationPlugin =
    require("./MapStore2/build/moduleFederation").plugin;

// Common paths configuration
const paths = {
    base: __dirname,
    dist: path.join(__dirname, "dist"),
    framework: path.join(__dirname, "MapStore2", "web", "client"),
    code: [
        path.join(__dirname, "js"),
        path.join(__dirname, "MapStore2", "web", "client")
    ]
};

// Common bundles configuration
const bundles = {
    MapStoreExtension: path.join(__dirname, "js", "app"),
    "MapStoreExtension-embedded": path.join(
        __dirname,
        "MapStore2",
        "web",
        "client",
        "product",
        "embedded"
    ),
    "MapStoreExtension-api": path.join(
        __dirname,
        "MapStore2",
        "web",
        "client",
        "product",
        "api"
    )
};

// Common plugins configuration
const commonPlugins = [extractThemesPlugin, ModuleFederationPlugin];

// Common alias configuration
const alias = {
    "@mapstore/patcher": path.resolve(
        __dirname,
        "node_modules",
        "@mapstore",
        "patcher"
    ),
    "@mapstore": path.resolve(__dirname, "MapStore2", "web", "client"),
    "@js": path.resolve(__dirname, "js")
};

// Production-only plugins
const getProdPlugins = () => [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "indexTemplate.html"),
        chunks: ["MapStoreExtension"],
        inject: "body",
        hash: true
    }),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "embeddedTemplate.html"),
        chunks: ["MapStoreExtension-embedded"],
        inject: "body",
        hash: true,
        filename: "embedded.html"
    }),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "apiTemplate.html"),
        chunks: ["MapStoreExtension-api"],
        inject: "head",
        hash: true,
        filename: "api.html"
    })
];

/**
 * Get optimized configuration for webpack based on mode
 * Returns merge-friendly configuration object that will be merged into buildConfig output
 * @param {boolean} isProd - Whether this is a production build
 * @returns {object} Configuration object with cache
 */
const getOptimizationConfig = (isProd = false) => ({
    // Filesystem cache for faster rebuilds
    cache: {
        type: "filesystem",
        cacheDirectory: path.resolve(
            __dirname,
            `.webpack_cache/${isProd ? "prod" : "dev"}`
        ),
        buildDependencies: {
            config: [__filename],
            packageLock: [path.join(__dirname, "package-lock.json")].filter(
                (p) => {
                    const fs = require("fs");
                    return fs.existsSync(p);
                }
            )
        },
        version: `webpack-cache-v1-${isProd ? "prod" : "dev"}`
    }
});

/**
 * Deep merge utility for webpack configurations
 * @param {object} target - Base configuration
 * @param {object} source - Configuration to merge in
 * @returns {object} Merged configuration
 */
const deepMergeConfig = (target, source) => {
    const merged = { ...target };

    Object.keys(source).forEach((key) => {
        // For simple properties like cache, just override
        merged[key] = source[key];
    });

    return merged;
};

module.exports = {
    paths,
    bundles,
    themeEntries,
    commonPlugins,
    alias,
    getProdPlugins,
    getOptimizationConfig,
    deepMergeConfig
};
