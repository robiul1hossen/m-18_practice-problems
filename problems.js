// Practice Problem-1

/*var fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.indexOf("Banana"));
fruits[1] = "Orange";
// console.log(fruits);
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);*/

// Practice Problem-2

// var marks = prompt("Enter Your Marks");
var marks = 85;
if (marks < 0 || marks > 100) {
  console.log("Your  marks is not valid");
} else if (marks >= 85 && marks <= 100) {
  console.log("You got A");
} else if (marks < 80 && marks >= 60) {
  console.log("You got B");
} else if (marks < 60 && marks >= 50) {
  console.log("You got C");
} else if (marks < 60 && marks >= 40) {
  console.log("You got D");
} else {
  console.log("You are Fail ");
}

// Practice Problem-3 (i)
/*var a = 13;
var b = 79;
var c = 450;

if (a > b && a > c) {
  console.log("Largest Number is" + " " + a);
} else if (b > c && b > a) {
  console.log("Largest Number is" + " " + b);
} else {
  //   console.log("Largest Number is" + " " + c);
  console.log(`Largest Number is ${c}`);
}*/

// Practice Problem-3 (ii)

var x = 9;
var y = 8;
var z = 8;

if (x === y || x === z || y === z) {
  console.log("Isosceles");
} else {
  console.log(" Not Isosceles");
}
