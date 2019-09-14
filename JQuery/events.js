$("h1").click(function(){
    alert("h1 clicked");
    });


$("button").click(function () {
    alert("buttin clicked");
});

$("button").click(function () {
   $(this).css("background", "pink"); 
   var text = $(this).text();
   console.log("You clicked " + text);
}); 

$("input").keypress(function(){
   console.log("You pressed a key"); 
});

$("input").keypress(function(event){
    if(event.which === 13){
        console.log("You pressed enter");
    }
});

$("h2").on("click", function(){
    $(this).css("color", "purple");
});

$("button").on("mouseenter", function(){
   $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
   $(this).css("font-weight", "normal");
});