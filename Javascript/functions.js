function isEven(num) {
    if (num %2 === 0){
    return true;
    }
    return false;
    }

function isEven2 (num){
    return num % 2 === 0;
}

function factorial(foo) {
if (foo === 0 ) {
    return 1;
}
else
var fact = 1;
for (i=1; i<= foo; i++){
    fact = fact * i;
}
return fact;
}

function kebabToSnake(str){
return str.replace(/-/g, "_");
}


