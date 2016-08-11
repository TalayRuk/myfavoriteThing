
/*this funtion is for showing the age select.*/

var ageWhileLoopYoung = function() {
  var i = 25;
  while ( i < 59 ) {
    document.write("<option>"+i+"</option>");
    i++;
  };
};

var ageWhileLoopOld = function() {
  var o = 26;
  while ( o < 60 ) {
    document.write("<option>"+o+"</option>");
    o++;
  };
};




$(function(){
  $(".submitIt").click(function(event){
    var name = $("#name").val();
    var sexUser = $("input:radio[name=sexUser]:checked").val();
    var sexWant = $("input:radio[name=sexWant]:checked").val();
    var ageWantYoung = parseInt($(".ageWantYoung").val());
    var ageWantOld = parseInt($(".ageWantOld").val());


    //var error = 1;
    $(".hideFirst").show();
    $(".text-danger").text("");
    $(".anderson, .taylor, .ellen, .justin").hide();

    if (!name) {
      $(".text-danger").append("<p>Please enter your name.</p>");
      //error = 2;
    } else {
      $(".name").show();
      $(".name").text(name);

    }
    if (!sexUser) {
      $(".text-danger").append("<p>Please enter your sex.</p>");
      //error = 2;
    }
    if (!sexWant) {
      $(".text-danger").append("<p>Please enter sex preference.</p>");
      //error = 2;
    }

    if ( sexUser === "male" && sexWant === "female") {
      if (ageWantYoung > 27 ) {
        $(".text-danger").append("<p>All candidates are younger.</p>");
      } else if (ageWantOld < 27 ) {
        $(".text-danger").append("<p>All candidates are older.</p>");
      } else {
      $(".taylor").show();
      }
    }
    if ( sexUser === "male" && sexWant === "male") {
      if (ageWantYoung > 49 ) {
        $(".text-danger").append("<p>All candidates are younger.</p>");
      } else if (ageWantOld < 49 ) {
        $(".text-danger").append("<p>All candidates are older.</p>");
      } else {
      $(".anderson").show();
    }
    }
    if ( sexUser === "female" && sexWant === "male") {
      if (ageWantYoung > 32 ) {
        $(".text-danger").append("<p>All candidates are younger.</p>");
      } else if (ageWantOld < 32 ) {
        $(".text-danger").append("<p>All candidates are older.</p>");
      } else {
      $(".justin").show();
      }
    }
    if ( sexUser === "female" && sexWant === "female") {
      if (ageWantYoung > 58 ) {
        $(".text-danger").append("<p>All candidates are younger.</p>");
      } else if (ageWantOld < 58 ) {
        $(".text-danger").append("<p>All candidates are older.</p>");
      } else {
      $(".ellen").show();
      }
    }

    event.preventDefault();
  });
});
