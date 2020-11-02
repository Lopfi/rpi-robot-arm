var five = require("johnny-five");
var Raspi = require("raspi-io").RaspiIO;
var board = new five.Board({
  io: new Raspi()
});

const controller = "PCA9685";

board.on("ready", () => {
  console.log("Connected");

  var servos = new five.Servos([
    {controller, pin: 0, center: true},
    {controller, pin: 1, center: true},
    {controller, pin: 2, center: true},
    {controller, pin: 3, center: true},
    {controller, pin: 4, center: true},
    {controller, pin: 5, center: true}
]);

servos.forEach(servo => {
  servo.sweep(); 
});
});
