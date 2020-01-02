var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");


//INDEX - show all campgrounds
router.get("/", (req,res) =>{

    //Get all campground from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds:allCampgrounds});
        }
    });
});
 
//NEW - show form to create new campground
router.get("/new", isLoggedIn, (req,res) => {
    res.render("campgrounds/new");
}); 

//CREATE - add mew campground to DB
router.post("/", isLoggedIn, (req, res) => {
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name:name, image: image, description:description, author:author};

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
router.get("/:id", (req, res) => {
    //find the campground with provoded ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if (err){
            console.log(err);
        } else{
            //render show template with that campground
            res.render("campgrounds/show", {campground:foundCampground});
        }
    });

});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");    
}

module.exports = router;
