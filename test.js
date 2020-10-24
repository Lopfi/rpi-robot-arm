const { PwmDriver, sleep } = require('adafruit-i2c-pwm-driver-async');
const readline = require('readline');
// Configure driver
const pwm = new PwmDriver({
    address: 0x40,
    device: '/dev/i2c-1',
    debug: true
});

// Configure min and max servo pulse lengths
const servoMin = 150; // Min pulse length out of 4096
const servoMax = 300; // Max pulse length out of 4096

const loop = () => {
  return sleep(1)
    .then(pwm.setPWM(0, 0, servoMin))
    .then(sleep(1))
    .then(pwm.setPWM(0, 0, servoMax))
    .then(loop);
};

// Initialize driver and loop
pwm.init()
  .then(pwm.setPWMFreq(50))
  .then(sleep(1))
  .then(loop)
  .catch(console.error);