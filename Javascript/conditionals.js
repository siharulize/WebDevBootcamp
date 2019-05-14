var age = prompt("What is your age?");

if (age<0) {
	console.log	("You were not born yet"); }

else if (age < 18) {
	console.log	("Get out");
}

else if (age<21) {
	console.log	("You can come in but do not touch anything");
}
else if (Number(age) ===21) {
	console.log	("yeey, celebrate");
}
else if ((age%2) === 0) {
	console.log	("you are odd");
}
else if (age%Math.sqrt(age) === 0) {
	console.log	("you are odd");
}
else	{
	console.log	("Get iin");
}
