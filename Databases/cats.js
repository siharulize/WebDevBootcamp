var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true, useUnifiedTopology: true }); 
//mongoose.set('useUnifiedTopology', true);

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB

Cat.create({
    name: "Snow",
    age: 15,
    temperament: "cute"
}, function(err, cat){
    if (err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

/* var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Grouchy"
}); */

/* george.save(function(err, cat){
    if(err){
        console.log("smth went wrong");
    } else {
        console.log("we saved cat to the db:");
        console.log(cat);
    }
}); */

// retrieve all cats from the DB and console.log each one 

Cat.find({}, function(err, cats){
    if(err){
        console.log("oh no");
    }else {
        console.log(cats);
    }
});