const sass = require('@stencil/sass');

exports.config = {
    namespace: "weblens",
    outputTarget: [
        {
            type: 'www',
            serviceWorker: {
                swSrc: 'src/sw.js'
            }
        }
    ],
    globalStyle: 'src/global/style.scss',
    plugins: [
        sass()
    ],
    copy: []
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
};
