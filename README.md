# wypiwyg

A RESTful web service that does nothing but keeps your things and returns to you untouched, that is, what you PUT is what you GET.

Note that `Content-Type` is also untouched.

## Use as module

```javascript
var wypiwyg = require('wypiwyg');
var app = wypiwyg();
// app is an express instance. Do whatever you want.
app.listen(8000);
```

## Use as cli

```
wypiwyg --port <port>
```

`port` defaults to `8000`.
