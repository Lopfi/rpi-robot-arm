const { PwmDriver } = require('adafruit-i2c-pwm-driver-async');
// Configure driver
const pwm = new PwmDriver({
    address: 0x40,
    device: '/dev/i2c-1',
    debug: true
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Configure min and max servo pulse lengths
const servoMin = 150; // Min pulse length out of 4096
const servoMax = 300; // Max pulse length out of 4096

async function loop() {
    await sleep(1000);
    pwm.setPWM(0, 0, servoMin);
    await sleep(1000);
    pwm.setPWM(0, 0, servoMax);
    loop();
};

// Initialize driver and loop
pwm.init();
pwm.setPWMFreq(50)
loop();
