$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    .mousedown(function() {
        console.log('mousedown');
        // play hadouken sound
        playHadouken();
        //show hadouken and animate it to the right of the screen
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '625px');
            }
        );
    })
    .mouseup(function() {
        console.log('mouseup');
        //ryu goes back to his ready position
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    })
    .keydown(function(e) {
        if (e.keyCode == 88) {
            alert("You pressed 'enter'.");
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
        }   
    })
    .keyup(function(e) {
        if (e.keyCode == 88) {
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        }
    })


function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

})