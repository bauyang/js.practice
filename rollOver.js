$('#div').hover(function(){
    $('#div').text("over");
}, function(){
    $('#div').text("out")
});

// EXTRA
// $('#div').on ({
//     mouseenter: function(){
//     $('div').text("over");
//     },
//     mouseleave: function(){
//     $('div').text("out")
//     }
// });