$(document).ready(function(){

console.log("document loaded")

  $('form').on('submit', function(e){
    var item = $('#item').val();
    $('#list').append(`<li>${item}</li>`);
    e.preventDefault()
    console.log("hello you?????")
  });
});

// define functions here
