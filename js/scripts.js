$(document).ready(function(){
  $(".button1").click(function(){
    var fname = $("input#fname").val();
    var lname = $("input#lname").val();
    var fav1 = $("input#fav1").val();
    var fav2 = $("input#fav2").val();
    var fav3 = $("input#fav3").val();

    var things = [fname, lname, fav1, fav2, fav3];
    var complexArray = [things[1],things[2],things[0], things[3],things[4]];
    complexArray.push(things);

    $(".putArrayHere").append("<li>"+things[0]+"</li>");
    $(".putArrayHere").append("<li>"+things[1]+"</li>");
    $(".putArrayHere").append("<li>"+things[2]+"</li>");
    $(".putArrayHere").append("<li>"+things[3]+"</li>");
    $(".putArrayHere").append("<li>"+things[4]+"</li>");
  });

  $(".button2").click(function(){
    var userInputs = ['fname', 'lname', 'fav1', 'fav2', 'fav3'];


    userInputs.forEach(function(string){
      var userInputVar = $("#"+string).val();
      $(".putArrayHere").append('<li class="newClass">'+userInputVar+'</li>');

      // if .text instead of append .. it'll write <li class+"newClass">"input#fav3"<li>
      // instead of creating a list like when using append!
    });



  });
});

  var myNewFunction = function (Paremeter) {
  var theVar = parameter;
}
