var express = require('express');
function App() {
	var content = {};
	var app = express();
	app.use(express.raw({ type: "*/*" }));
	app.put('*', (req, res) => {
		res.status(req.url in content ? 204 : 201);
		content[req.url] = {
			type: req.get('Content-Type'),
			body: req.body
		};
		res.end();
	});
	app.get('*', (req, res) => {
		if (req.url in content) {
			var _content = content[req.url];
			res.status(200).set('Content-Type', _content.type).send(_content.body);
		} else
			res.status(404).end();
	});
	return app;
}
module.exports = App;
