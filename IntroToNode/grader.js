var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]; 
var sum;

function average(grades) {
    sum = 0;
    for (var i = 0; i < grades.length; i++) {
       sum = sum + grades[i];
     //  console.log(sum);
        }

    console.log(Math.round(sum/grades.length));
}

average(scores);
average(scores2);
