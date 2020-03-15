var assert = require('assert');
var request = require('request');
var App = require('..');
it('wypiwyg', function (done) {
	var app = App();
	var server = app.listen(() => {
		request.put(`http://localhost:${port}/a`, {
			headers: { 'Content-Type': 'a/a' },
			body: 'a'
		}, () => {
			request.get(`http://localhost:${port}/a`, (error, response) => {
				var contentType = response.headers['content-type'];
				assert.equal(contentType, 'a/a');
				assert.equal(response.body, 'a');
				done();
			});
		});
	});
	var port = server.address().port;
});
