import express = require('express');
let app = express();

function serve(req:any, res: any): void {
    res.send('Hello World!');
}

app.use('/', serve);

app.listen(8000, function () {
    console.log('Running server...')
});
