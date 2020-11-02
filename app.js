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

turntable = new five.Servo ({controller, pin: 0, center: true});
joint0 = new five.Servo ({controller, pin: 1, center: true});
joint1 = new five.Servo ({controller, pin: 2, center: true});
joint2 = new five.Servo ({controller, pin: 3, center: true});
rotEnd = new five.Servo ({controller, pin: 4, center: true});
endEffector = new five.Servo ({controller, pin: 5, center: true});

const servos = [turntable, joint0, joint1, joint2, rotEnd, endEffector];

const all = new five.Servos(servos);

app.get("/", (req, res) => res.sendFile(path.join(__dirname, '/content', 'index.html')))

app.post("/setPos", (req, res) => {
    console.log(req.body);
    let pos = req.query.pos;
    let channel = req.query.pos;
    console.log(servos[channel]);
    console.log(all[channel]);
    servos[channel].to(pos);
    res.send("Position set");
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