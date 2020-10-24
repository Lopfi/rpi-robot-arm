const { PwmDriver, sleep } = require('adafruit-i2c-pwm-driver-async');

// Configure driver
const pwm = new PwmDriver({
    address: 0x40,
    device: '/dev/i2c-1',
    debug: true,
    isMockDriver: true // Remove this if running on a Raspberry Pi
});

// Configure min and max servo pulse lengths
const servoMin = 150; // Min pulse length out of 4096
const servoMax = 600; // Max pulse length out of 4096

pwm.init()
pwm.setPWMFreq(50)
sleep(1)

pwm.setPWM(0, 0, servoMin)
sleep(1)
pwm.setPWM(0, 0, servoMax)


/*
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
  .catch(console.error);*/