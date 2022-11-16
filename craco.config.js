const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@services": path.resolve(__dirname, "src/services"),
            "@store": path.resolve(__dirname, "src/store"),
            "@customTypes": path.resolve(__dirname, "src/customTypes"),
            "@helpers": path.resolve(__dirname, "src/utils/helpers"),
            "@animation": path.resolve(__dirname, "src/utils/animation"),
            "@constants": path.resolve(__dirname, "src/utils/constants"),
            "@templates": path.resolve(__dirname, "src/utils/templates"),
            "@assets": path.resolve(__dirname, "src/assets"),
        },
    },
};