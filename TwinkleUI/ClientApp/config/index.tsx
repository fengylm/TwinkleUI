const api_v1=""
module.exports = {
    name: 'AntD Admin',
    prefix: 'antdAdmin',
    footerText: 'Ant Design Admin  © 2017 zuiidea',
    logo: '/logo.png',
    iconFontCSS: '/iconfont.css',
    iconFontJS: '/iconfont.js',
    CORS: [],
    openPages: ['/login'],
    apis: {
        userLogin: `${api_v1}/user/login`,
    },
}
