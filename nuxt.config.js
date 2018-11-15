
module.exports = {
    mode: 'spa',
    srcDir: 'src/',
    build: {
        vendor: ['babel-polyfill', 'vue-material']
    },
    plugins: [
        '~/plugins/index',
        '~/components/index'
    ],
    css: [
        { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
        { src: '~/assets/theme.scss', lang: 'scss' }
    ],
    loading: {
        color: '#4FC08D',
        failedColor: '#bf5050',
        duration: 1500
    },
    head: {
        title: 'Tripio.js',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
            { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons' }
        ]
    }
}