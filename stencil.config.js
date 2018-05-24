const sass = require('@stencil/sass');

exports.config = {
    namespace: "weblens",
    outputTarget: [
        {
            type: 'www',
            serviceWorker: {
                swSrc: 'src/sw.ts'
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
