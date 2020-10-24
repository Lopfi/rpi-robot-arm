const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { PwmDriver, sleep } = require('adafruit-i2c-pwm-driver-async');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const pwm = new PwmDriver({
    address: 0x40,
    device: '/dev/i2c-1',
    debug: false
});

const servoMin = 90; // Min pulse length out of 4096
const servoMax = 300; // Max pulse length out of 4096

pwm.init()
    .then(pwm.setPWMFreq(50))
    .then(sleep(1))

app.get("/", (req, res) => res.sendFile(path.join(__dirname, '/content', 'index.html')))

app.post("/setPulse", (req, res) => {
    let pulse = req.query.pulse;
    let ch = req.query.channel;
    if (pulse <= servoMax && pulse >= servoMin) {
        pwm.setPWM(channel, 0, pulse);
    }
    res.send("set")
});

app.get("/off", (req, res) => {
    pwm.stop();
    res.send("off")
});

app.get("*", (req, res) => res.send("404"));

app.listen(3000, () => {
    console.log("App listening on 3000");
});


/*app.get("/items", (req, res) => {
    let limit = req.query.limit;
    let offset = req.query.offset;
    res.send(JSON.stringify(response));
});*/
