$("#first").on("click", function () {
    $("div.first").fadeOut(1000, function () {
        console.log("Fade Completed!");
    });
});

$("#second").on("click", function () {
    $("div.second").fadeIn(1000, function () {
        console.log("Fade Completed!");
    });
});
