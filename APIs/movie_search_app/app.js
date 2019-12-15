const express = require("express");
const app = express();
const rp = require("request-promise");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
});

app.get("/results", function(req, res){
 //   res.send("Hello, it works!");
    var name = req.query.search;
    var url = "http://www.omdbapi.com/?s="+ name + "&apikey=thewdb";
    rp(url)
    .then((htmlString) => {
        // Process html...
        const parsedData = JSON.parse(htmlString);
        res.render("results", {parsedData: parsedData});
    })
    .catch((err) => {
        // Crawling failed...
        console.log("Something went wrong!");
        console.log(err);
    });
});

app.listen(3000, function () {
    console.log('Movie app has started'); 
}); 