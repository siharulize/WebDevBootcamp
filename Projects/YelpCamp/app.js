var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    seedDB = require("./seeds");


mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
seedDB();


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
            res.render("campgrounds/index", {campgrounds:allCampgrounds});
        }
    });
});
 
//NEW - show form to create new campground
app.get("/campgrounds/new", (req,res) => {
    res.render("campgrounds/new");
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
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if (err){
            console.log(err);
        } else{
            //render show template with that campground
            res.render("campgrounds/show", {campground:foundCampground});
        }
    });

});

//===================================
//Comments

app.get("/campgrounds/:id/comments/new", function(req, res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if (err){
            console.log(err);
        } else {
            res.render("comments/new", {campground:campground});
        }
    });
});

app.post("/campgrounds/:id/comments", function(req, res){
    //lookup campground using id
    Campground.findById(req.params.id, function(err, campground){
        if (err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {

            Comment.create(req.body.comment, function(err, comment){
                if (err){
                    console.log(err);
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
/*     res.send("woooooow"); */
    //create new comment
    //connect new comment to campground
    //redirect campground to show page
});

app.listen(3000, function () {
    console.log('Yelp Camp Server Has started'); 
}); 