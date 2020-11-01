const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { PwmDriver } = require('adafruit-i2c-pwm-driver-async');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

const pwm = new PwmDriver({
    address: 0x40,
    device: '/dev/i2c-1',
    debug: false
});

const servoMin = 90; // Min pulse length out of 4096
const servoMax = 300; // Max pulse length out of 4096

pwm.init();
pwm.setPWMFreq(50);

app.get("/", (req, res) => res.sendFile(path.join(__dirname, '/content', 'index.html')))

app.post("/setPulse", (req, res) => {
    console.log(req.query);
    let pulse = req.query.pulse;
    let channel = req.query.channel;
    if (pulse <= servoMax && pulse >= servoMin) {
        pwm.setPWM(channel, 0, pulse);
        res.send("set");
    }
    else res.send("wrong input");
});

app.get("/off", (req, res) => {
    pwm.stop();
    res.send("off");
});

app.get("*", (req, res) => res.send("404"));

app.listen(3000, () => {
    console.log("App listening on 3000");
});