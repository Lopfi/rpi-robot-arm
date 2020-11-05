const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const five = require("johnny-five");
const Raspi = require("raspi-io").RaspiIO;
var board = new five.Board({
  io: new Raspi()
});

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

const controller = "PCA9685";

const servos = new five.Servos([
    {controller, pin: 0, center: true},
    {controller, pin: 1, center: true},
    {controller, pin: 2, center: true},
    {controller, pin: 3, center: true},
    {controller, pin: 4, center: true},
    {controller, pin: 5, center: true}
]);

app.get("/", (req, res) => res.sendFile(path.join(__dirname, '/content', 'index.html')))

app.post("/setPos", (req, res) => {
    console.log(req.body);
    let pos = req.body.pos;
    let channel = req.body.channel;
    let all = req.body.all;
    if(all) servos.to(pos);
    else servos[channel].to(pos);
    res.redirect('/');
});

app.get("/stop", (req, res) => {
    servos.stop();
    res.redirect('/');
});

app.get("/center", (req, res) => {
    servos.center();
    res.redirect('/');
});

app.get('/eval', function(req, res){
    res.sendFile(__dirname + '/content/eval.html');
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