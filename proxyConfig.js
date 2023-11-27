// this file contains configurations for dev proxy

// const DEV_PROTOCOL = "http";
// const DEV_HOST = "localhost:8080";

module.exports = {
    '/rest': {
        target: "https://portail-test.sig.rennesmetropole.fr/mapstore",
        secure: false,
        headers: {
            host: "portail-test.sig.rennesmetropole.fr"
        }
    },
    '/pdf': {
        target: "https://dev-mapstore2.geosolutionsgroup.com/mapstore",
        secure: false,
        headers: {
            host: "dev-mapstore2.geosolutionsgroup.com"
        }
    },
    '/mapstore/pdf': {
        target: "https://dev-mapstore2.geosolutionsgroup.com",
        secure: false,
        headers: {
            host: "dev-mapstore2.geosolutionsgroup.com"
        }
    },
    '/proxy': {
        target: "http://localhost:8082/",
        secure: false,
        headers: {
            host: "dev-mapstore2.geosolutionsgroup.com"
        }
    },
    '/geoserver': {
        target: "https://portail-test.sig.rennesmetropole.fr",
        secure: false,
        headers: {
            host: "portail-test.sig.rennesmetropole.fr"
        },
        changeOrigin: true
    },
    '/console': {
        target: "https://portail-test.sig.rennesmetropole.fr",
        secure: false,
        headers: {
            host: "portail-test.sig.rennesmetropole.fr"
        },
        changeOrigin: true
    },
    '/docs': {
        target: "http://localhost:8081",
        pathRewrite: {'/docs': '/mapstore/docs'}
    }
};
