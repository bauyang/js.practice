
$( "#input" ).keyup(function(key) {
    
    if (key.keyCode == 13){
        $('div').append($('#input').val() +"<br>");
        $("#input").val('');
    }
        
  });