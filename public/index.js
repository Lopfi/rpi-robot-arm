/*var ch0 = document.getElementById("0");
var ch1 = document.getElementById("1");
var ch2 = document.getElementById("2");
var ch3 = document.getElementById("3");
var ch4 = document.getElementById("4");
var ch5 = document.getElementById("5");
channels = [ch0, ch1, ch2, ch3, ch4, ch5];
*/
$('.slider').on('change', function () {
  var pos_s = $(this).val();
  var channel_s = $(this).attr('id');
  console.log(pos + "     " + channel);
  $.ajax({
    url: '/setPos',
    dataType: 'number',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded',
    data: {channel: channel_s, pos: pos_s},
    success: function( data, textStatus, jQxhr ) {
      console.log(data);
    },
    error: function( jqXhr, textStatus, errorThrown ) {
      console.log( errorThrown );
    }
  });
});