// Check Off Specific Todos By clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");

//     //if li is gray
//     if($(this).css("color")=== "rgb(128, 128, 128)" ){
//         $(this).css({
//             color: "black",
//             textDecoration : "none"
//         });
//     }
//     else {
//         $(this).css({
//             color: "gray",
//             textDecoration : "line-through"
//         });
//    }
 
});

// Click on X to delete TODO
$("ul").on("click", "span",function (event) {
    $(this).parent().fadeOut (500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});     

$("input[type='text']").keypress(function (e) { 
    if (e.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
        }
});

$(".fa-edit").click(function (e) { 
    e.preventDefault();
    $("input[type='text']").fadeToggle();
    
});