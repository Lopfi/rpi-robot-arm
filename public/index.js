var ch0 = document.getElementById("0");
var ch1 = document.getElementById("1");
var ch2 = document.getElementById("2");
var ch3 = document.getElementById("3");
var ch4 = document.getElementById("4");
var ch5 = document.getElementById("5");
channels = {ch0, ch1, ch2, ch3, ch4, ch5};


// Update the current slider value (each time you drag the slider handle)
channels.forEach(element => {
    element.oninput = function() {
        output.innerHTML = this.value;
        
      }
});