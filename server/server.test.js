const request = require('express');
var app =require('./server').app;

it("should return hello world response",(done)=>{
	request(app)
		.get('/')
		.expect('hello world');
		.end(done);
});
