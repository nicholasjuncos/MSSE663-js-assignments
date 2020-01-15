let express = require('express');
let app = express();

function serve(req, res) {
    res.send('Hello World!');
}

app.use('/', serve);

app.listen(8000, function () {
    console.log('Running server...')
});
