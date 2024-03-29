var http      = require('http');
var httpProxy = require('http-proxy');
var redis = require('redis')
var express = require('express')
var app = express()
// REDIS

var client = redis.createClient(6379, '127.0.0.1', {})

client.del("redirects");
var proxy   = httpProxy.createProxyServer();
var server  = http.createServer(function(req, res)
{	client.rpoplpush('serverlist','serverlist',function(err,value) {
		if (err) throw err;
		proxy.web( req, res, {target: "http://127.0.0.1:"+value } );
		console.log("Redirecting to port :"+value)
	})
});
//start proxy server at 5000
console.log("Proxy server on port: 5000");
server.listen(5000)