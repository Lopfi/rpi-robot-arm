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