var movieDB =  [
    { title: "up",
      rating: 5,
      seen: true
    },
    { title: "toy story",
      rating: 3,
      seen: false
    },
    { title: "pets",
      rating: 4.5,
      seen: true
    },
    { title: "frozen",
      rating: 5,
      seen: false
    }
];

function display(color) {
    var seen;
    if (color.seen === true){
        seen = "You have seen ";
    }
    else
    {
    seen = "You have not seen ";
    }
    console.log(seen + '"' +  color.title + '"' + " - " + color.rating + " stars");
} ;

movieDB.forEach(display);