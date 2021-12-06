const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, '../../content', 'index.html')))

app.post("/setPos", (req, res) => {
    console.log('setPos');
    console.log(req.body);
    res.redirect('/');
});

app.get("/stop", (req, res) => {
    console.log('stop');
    res.redirect('/');
});

app.get("/center", (req, res) => {
    console.log('center');
    res.redirect('/');
});

app.get('/eval', function(req, res){
    res.sendFile(__dirname + '../../content/eval.html');
});

app.post('/evalpost', (req, res) => {
    console.log('Eval: ' + req.body.eval);
    eval(req.body.eval);
    res.redirect('/eval');
});

app.get("*", (req, res) => res.send("404"));

app.listen(3000, () => {
    console.log("App listening on 3000");
});