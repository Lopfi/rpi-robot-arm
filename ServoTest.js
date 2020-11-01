const {Board, Servo} = require("johnny-five");
const board = new Board();
const controller = "PCA9685";

board.on("ready", () => {
  console.log("Connected");

  const servo = new Servo({
    controller,
    range: [0, 180],
    pin: 1,
  });

  servo.sweep();
  
});