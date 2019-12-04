var socket = io();

$('form').on('submit',function() {
    var text1 = $('#initials').val();
    var text2 = $('#message').val();
    socket.emit('message',text1 + " says: " + text2);
    $('#message').val('');
    return false;
});

socket.on('message', function(msg){
    $('<li>').text(msg).appendTo('#history');
});