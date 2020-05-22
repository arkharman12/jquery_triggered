/**********
TITLE: Triggered  
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Triggered Assignment
ORIGINALLY CREATED ON: 28 March 2019
LAST MODIFIED ON: 28 March 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
**********/

$(document).ready(function() {
    //document event
    alert("The page has loaded and ready to go!");

    // change the input background
    $("input").keydown(function(){
        $("input").css("background-color", "yellow");
    });

    $("input").keyup(function(){
        $("input").css("background-color", "lightgreen");
    });

    // count keypresses
    var i = 0;
    $("input").keypress(function(){
        $("span#keypresses").text(i += 1);
    });

    // reset button
    $("#reset").click(function(){
        $("span#keypresses").text(i = 0);  
    });

    // mouse enter and leave event
    $("p#mouse1").mouseenter(function () {
        $("p#mouse1").css("background-color", "yellow");
    });
    $("p#mouse1").mouseleave(function () {
        $("p#mouse1").css("background-color", "lightgray");
    });

    // mouse up and down event
    $("p#mouse2").mouseup(function () {
        $(this).after("<p style='color:grey;'>Mouse button released.</p>");
    });
    $("p#mouse2").mousedown(function () {
        $(this).after("<p style='color:grey;'>Mouse button pressed down.</p>");
    });

    // mouse move event
    $(document).mousemove(function (event) {
        $("span#coordinates").text(event.pageX + ", " + event.pageY);
    });

}); 
