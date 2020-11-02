var five = require("johnny-five");
var Raspi = require("raspi-io").RaspiIO;
var board = new five.Board({
  io: new Raspi()
});

const controller = "PCA9685";

board.on("ready", () => {
  console.log("Connected");

  const servo = new Servo({
    controller,
    range: [0, 180],
    pin: 0,
  });

  servo.sweep();
  
});