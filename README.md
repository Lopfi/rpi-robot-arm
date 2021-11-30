# rpi-robot-arm

A 6-axis robot arm with six servos. As controller I'm using a PCA9685 from Adafruit for the motors and a Raspberry Pi Zero W as main controller. As library im using johnny-five. 

## Installation

- Download and install node if not already installed
- Clone the repository with
``` sh
git clone https://github.com/Lopfi/rpi-robot-arm
```
- Run ```npm install``` to install the dependencies
- To run the program use ```sh
npm run```
- Or ```npm test_server``` or ```npm test_servos``` to test the functions separately

After starting you can connect to the web-interface using your pi's ip on port 3000, just type in your browser \<ip\>:3000 and replace ip with your pi's ip.

### Start

use
```node .```
to start the software
