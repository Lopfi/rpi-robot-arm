const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var five = require("johnny-five");
var Raspi = require("raspi-io").RaspiIO;
var board = new five.Board({
  io: new Raspi()
});

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }))

const controller = "PCA9685";

var servos = new five.Servos([
    {controller, pin: 0, center: true},
    {controller, pin: 1, center: true},
    {controller, pin: 2, center: true},
    {controller, pin: 3, center: true},
    {controller, pin: 4, center: true},
    {controller, pin: 5, center: true}
]);

app.get("/", (req, res) => res.sendFile(path.join(__dirname, '/content', 'index.html')))

app.post("/setPos", (req, res) => {
    console.log(req.query);
    let pos = req.query.pos;
    let channel = req.query.pos;
    servos[channel].to(pos);
});

app.get("/stop", (req, res) => {
    servos.stop();
    res.send("stop");
});

app.get("*", (req, res) => res.send("404"));

app.listen(3000, () => {
    console.log("App listening on 3000");
});