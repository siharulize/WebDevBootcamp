var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");


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
router.get("/new", middleware.isLoggedIn, (req,res) => {
    res.render("campgrounds/new");
}); 

//CREATE - add mew campground to DB
router.post("/", middleware.isLoggedIn, (req, res) => {
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var price = req.body.price;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name:name, price:price, image: image, description:description, author:author};

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


// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err || !foundCampground){
            console.log(err);
            req.flash('error', 'Sorry, that campground does not exist!');
            return res.redirect('/campgrounds');
        }
                //render show template with that campground
        res.render("campgrounds/show", {campground: foundCampground});
    });
});

/* //EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground:foundCampground});
    });
}); */


 
// EDIT - shows edit form for a campground
router.get("/:id/edit", middleware.isLoggedIn, middleware.checkUserCampground, function(req, res){
  //render edit template with that campground
  res.render("campgrounds/edit", {campground: req.campground});
});


//UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    //find and update correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.camp, function(err, updatedCamoground){
         if(err){
             res.redirect("/campgrounds");
         } else {
             res.redirect("/campgrounds/" + req.params.id);
         }
    } );
    //redirect somewhere
});

//DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
}) ; 

/* router.delete("/:id", middlcheckCampgroundOwnership, (req, res) => {
    Campground.findByIdAndRemove(req.params.id, (err, campgroundRemoved) => {
        if (err) {
            console.log(err);
        }
        Comment.deleteMany( {_id: { $in: campgroundRemoved.comments } }, (err) => {
            if (err) {
                console.log(err);
            }
            res.redirect("/campgrounds");
        });
    });
}); */


module.exports = router;
