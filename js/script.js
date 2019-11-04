$(".clickable").click(function(){
  $(".design-hidden").slideToggle();
  $(."design-showing").slideToggle();
});

$(".clickable2").click(function(){
  $(".development-hidden").slideToggle();
  $(".development-showing").slideToggle()
});

$("clickable3").click(function(){
  $(".management-hidden")slideTogggle();
  $(".management-showing")slideToggle();
});

var key = '1c2089a31a00d28af6cb0e553ed84697-us20';

$("button").click(function(event) {
  event.preventDefult();
  var user = document.getElementById('username').value;
  alert("Dear"+ user + ",we've got your message.Thank you for reaching out to us.");
  });
  
  $("button").on('click', function(){
    $('form').each(funtion(){
      this.reset();
    });
  });

      