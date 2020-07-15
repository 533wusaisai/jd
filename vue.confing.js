module.exports = {
    // publicPath: '/' // 配置根目录 /demo/ demo下的文件
    publicPath: '/' ,       // 配置根目录
    outputDir: 'dist',     // 出口目录
    assetsDir: 'assets',    // 静态资源目录
    lintOnSave: false,      // eslint检查
    productionSourceMap: true, // 生产环境下开启sourceMap 支持断点检查
    devServer:{ // 配置服务器代理
        open: true,  // 自动打开浏览器
        host: "192.168.1.102", // 主机地址
        prot: 8080, // 端口
        https: false, // 是否启动https
        proxy: {
            '/api': {
                target: 'http://vueshop.glbuys.com/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
    configureWebpack:{
        devtool: 'source-map' //配置开发者环境的sourceMap用于断点调试
    }
}