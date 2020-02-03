var express = require('express');
function App() {
	var text = {};
	var app = express();
	app.use(express.text());
	app.put('*', (req, res) => {
		res.status(req.url in text ? 204 : 201);
		text[req.url] = req.body;
		res.end();
	});
	app.get('*', (req, res) => {
		if (req.url in text)
			res.status(200).set('Content-Type', 'text/plain').send(text[req.url]);
		else
			res.status(404).end();
	});
	return app;
}
module.exports = App;
