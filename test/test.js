var assert = require('assert');
var request = require('request');
var App = require('..');
it('wypiwyg', function (done) {
	var app = App();
	app.listen(8000, () => {
		request.put('http://localhost:8000/a', {
			headers: { 'Content-Type': 'a/a' },
			body: 'a'
		}, () => {
			request.get('http://localhost:8000/a', (error, response) => {
				var contentType = response.headers['content-type'];
				assert.equal(contentType, 'a/a');
				assert.equal(response.body, 'a');
				done();
			});
		});
	});
});
