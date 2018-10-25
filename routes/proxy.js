var proxy = require('http-proxy-middleware');
var options = {}
function router(req){
	return req.headers['d-target'] || 'http://rap2api.taobao.org'
}
///app/mock/12614/test
function pathRewrite(path,req){
	return path.replace(req.headers['d-path'], '')
}
function onProxyReq(proxyRes, req, res) {
	  console.log('onProxyReq')
}
    options = {
        target: 'http://rap2api.taobao.org', // target host
        changeOrigin: true,               // needed for virtual hosted sites
       // ws: true,                         // proxy websockets
        pathRewrite: pathRewrite,
				onProxyReq:onProxyReq,
				router:router
    };
var dynamicProxy = proxy(options);
module.exports = dynamicProxy;
