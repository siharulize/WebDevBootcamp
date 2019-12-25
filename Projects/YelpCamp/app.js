var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//Schema SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
 });

var Campground = mongoose.model("Campground", campgroundSchema);

/* Campground.create(
    {
    name: "Mountain Goat's Rest", 
    image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description: "this is a huge granite hill, no bathrooms. no water. beautiful scenery."
}, function(err, campground){
        if (err){
            console.log(err);
        } else {
            console.log(campground);
        }
    }); */

app.get("/", (req, res) => {
    res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", (req,res) =>{
    //Get all campground from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds:allCampgrounds});
        }
    });
});
 
//NEW - show form to create new campground
app.get("/campgrounds/new", (req,res) => {
    res.render("new");
}); 

//CREATE - add mew campground to DB
app.post("/campgrounds", (req, res) => {
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name:name, image: image, description:description};
    //Create a new campground and save to DB 
    Campground.create(newCampground, function(err, newlyCreated){
        if (err){
            console.log(err);
        } else {
         //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    })
});

//SHOW - display certain campground based on an ID
app.get("/campgrounds/:id", (req, res) => {
    //find the campground with provoded ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if (err){
            console.log(err);
        } else{
            //render show template with that campground
            res.render("show", {campground:foundCampground});
        }
    });

});

app.listen(3000, function () {
    console.log('Yelp Camp Server Has started'); 
}); 