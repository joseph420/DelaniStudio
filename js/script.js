$(".clickable").click(function(){
  $(".design-hidden").toggle();
  $(".design-showing").toggle();
});

$(".clickable2").click(function(){
  $(".development-hidden").toggle();
  $(".development-showing").toggle();
});
$(".clickable3").click(function(){
  $(".management-hidden").toggle();
  $(".management-showing").toggle();
});



var key = '1c2089a31a00d28af6cb0e553ed84697-us20';

$("button").click(function(event) {
  event.preventDefult();
  var user = document.getElementById('username').value;
  alert("Dear"+ user + ",we've got your message.Thank you for reaching out to us.");
  });
  

      