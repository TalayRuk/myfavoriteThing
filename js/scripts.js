

$(document).ready(function(){
  $(".blanks form").click(function() {
    var userInputs = ["firstn", 'lastn', 'fav1', 'fav2', 'fav3'];

    userInputs.forEach(function(userInput) {
      var fillout = $("#"+ userInput).val();
      $("." + userInput).text(fillout).val();
    });

  });
});
