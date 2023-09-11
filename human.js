// Chapter # 6 (Math Expression II)
// Q#1
var x = 4;
x = x + 1;
document.write("<br>" + x);

// Q#2
var x = 100;
--x;
document.write("<br>" + x);

// Q#3
var x = 50;
var y = x++;
document.write("<br>The value of Y is :" + y);

// Q#4
var y = 50;
var z = -y;
document.write("<br>The value of Z is :" + z);

// Q#5
var num = 55;
var newNum = --num;
document.write("<br>The value of num is :" + newNum);

// Q#6
var num1 = 45 + 1;
var num2 = num1;
document.write("<br>" + num2);

// Q#7
var num_1 = 67;
num_1++;
alert(num_1);

// Chapter # 7 (Math Expression III)

// Q#1
var calculatedNum = 2 + 2 * 6;
document.write("<br>" + calculatedNum);

// Q#2
var calculatedNum = (2 + 2) * 6;
document.write("<br>" + calculatedNum);

// Q#3
var calculatedNum = (2 + 2) * (4 + 2);
document.write("<br>" + calculatedNum);

// Q#4
var calculatedNum = (2 + 2) * 4 + 2;
document.write("<br>" + calculatedNum);

// Q#5
var cost = (2 + 2 + 10) * 4;
document.write("<br>" + cost);

// Q#6
var units = 2 + 2 * 4 + 10;
document.write("<br>" + units);

// Q#7
var pressure = (4 / 2) * 4;
document.write("<br>" + pressure);

// Chapter # 8 (Concatenating text strings)
// Q#1
var num = "2" + "2";
document.write("<br>" + num);

// Q#2
var message = "Hello" + "Dolly";
alert(message);

// Q#3
alert("33" + 3);

// Q#4
var a = "pakistan";
var b = "zindabad";
alert(a + b);

// Q#5
var num = "4";
var numm = "5";
alert(num + numm);

// Q#6
var fname = "ali";
var lname = "rehman";
var flname = fname + lname;
alert(flname);

// Chapter # 9 (prompts)
// Q#1
var firstName = prompt("Enter a FirstName.");
document.write("<br>" + firstName);

// Q#2
var country = prompt("Enter your country", "china");
document.write("<br>" + country);

// Q#3
var yourName = prompt("Enter your name");
document.write(
  "<br>In this statemenet ineverted comma is not seen this is error "
);

// Q#4
var name1 = prompt("enter a name", "abid");
alert(name1);

// Q#5
var myfName = prompt("Enter first name :");
var mylname = prompt("Enter last name : ", "rafique");
var completeName = myfName + mylname;
document.write("<br>" + completeName);

// Q#6
var myfName = prompt("Enter first name :", "sadaquat");
var mylname = prompt("Enter last name : ", "rafique");
var completeName = myfName + mylname;
alert("<br>" + completeName);

// Chapter # 10 (IF statement)
// Q#1
var city = prompt("Enter city name");
if (city === "karachi") {
  console.log("The City of lights");
}

// Q#2
if (x === y) {
  alert("its true");
}

// Q#3
if (zipCode === "10010") {
  alert("karachi");
} else {
  alert("Please write correct city");
}

// Chapter #6 (Math Expression)
// Q#1
var a = 10;
document.write("<br>Result: \n The value a is : " + a);
++a;
document.write("<br>The value ++a is: :" + a);
document.write("<br>Now the value of a is: :" + a);
a++;
document.write("<br>The value a++ is: :" + a);
document.write("<br>Now the value of a is: :" + a);

--a;
document.write("<br>The value --a is: :" + a);
document.write("<br>Now the value of a is: :" + a);

a--;
document.write("<br>The value a-- is: :" + a);
document.write("<br>Now the value of a is: :" + a);

// Q#2
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("<br>" + result);

// Q#3
var fname = prompt("Enter your name");
alert("the name of" + fname);

// Q#4
var num = +prompt("Enter a number");
document.write("<br>" + num + "*" + "1" + "=" + num);
document.write("<br>" + num + "*" + "2" + "=" + num * 2);
document.write("<br>" + num + "*" + "3" + "=" + num * 3);
document.write("<br>" + num + "*" + "4" + "=" + num * 4);
document.write("<br>" + num + "*" + "5" + "=" + num * 5);
document.write("<br>" + num + "*" + "6" + "=" + num * 6);
document.write("<br>" + num + "*" + "7" + "=" + num * 7);
document.write("<br>" + num + "*" + "8" + "=" + num * 8);
document.write("<br>" + num + "*" + "9" + "=" + num * 9);
document.write("<br>" + num + "*" + "10" + "=" + num * 10);

// Q#5
var math = +prompt("Enter math course");
var english = +prompt("Enter english course");
var social = +prompt("Enter social course");
var totalMarks = 300;
var obtainedMarks = math + english + social;
var per = (obtainedMarks / totalMarks) * 100;
document.write("<br>The obtained marks is :" + obtainedMarks);
document.write("<br> The percentage is :" + per + "%");

// Chapter 9-11 (User Input & Conditional Statement)
// Q#1
var city = prompt("Enter your City :");
if (city === "karachi") {
  alert("Welcome to city of lights");
}

// Q#2
var gender = prompt("Enter your Gender");
if (gender === "male") {
  alert("Hello sir");
}
if (gender === "female") {
  alert("hello Ma'am");
}

// Q#3
var signalColor = prompt("Road signal");
if (signalColor === "red") {
  alert("Must Stop");
}
if (signalColor === "yellow") {
  alert("Ready to move");
}
if (signalColor === "green") {
  alert("move now");
}

// Q#4
var fuel = +prompt("Remaining fuel alert");
if (fuel === 2) {
  alert("it's enough reach");
}
if (fuel === 1) {
  alert("it's need to fill");
}
if (fuel === 0.25) {
  alert("it's must to refill the fuel in your car");
}

// Q#5a
var a = 4;
if (++a === 5) {
  alert("Given condition for variable a is true");
}
// Q#5b
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
// Q#5c
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
// Q#5d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("the cost eqquals");
}
// Q#5e
if (true) {
  alert("true");
}
if (false) {
  alert("false");
}

// Q#5f
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// Q#6


var marks1 = Number(prompt("enter marks 1"));
var marks2 = Number(prompt("enter marks 2"));
var marks3 = Number(prompt("enter marks 3"));
var marksObtained = marks1 + marks2 + marks3;
var totalMarks = 300;
var percentage = (marksObtained / totalMarks) * 100;
if (percentage >= 80) {
  document.write(`<h1>MARKSHEET</h1>
    </br>
    <p>Total mark: ${totalMarks}</p>
    <p>Marks Obtained: ${marksObtained}</p>
    <p>Percentage: ${percentage}</p>
    <p>Grade: A-one</p>
    <p>Remarks: Excellent </p>`);
} else if (percentage >= 70 && percentage < 80) {
  document.write(`<h1>MARKSHEET</h1>
    </br>
    <p>Total mark: ${totalMarks}</p>
    <p>Marks Obtained: ${marksObtained}</p>
    <p>Percentage: ${percentage}</p>
    <p>Grade: A</p>
    <p>Remarks: Good</p>`);
} else if (percentage >= 60 && percentage < 70) {
  document.write(`<h1>MARKSHEET</h1>
    </br>
    <p>Total mark: ${totalMarks}</p>
    <p>Marks Obtained: ${marksObtained}</p>
    <p>Percentage: ${percentage}</p>
    <p>Grade: B</p>
    <p>Remarks: You need to improve</p>`);
} else {
  document.write(`<h1>MARKSHEET</h1>
    </br>
    <p>Total mark: ${totalMarks}</p>
    <p>Marks Obtained: ${marksObtained}</p>
    <p>Percentage: ${percentage}%</p>
    <p>Grade: fail</p>
    <p>Remarks: Sorry</p>`);
}

// Q#7

var secretNum = 5;
var guessNum = Number(prompt("Guess a number", 1 - 10));
if (guessNum === secretNum) {
  alert("Bingo! Correct Answer");
} else if (guessNum + 1 === secretNum) {
  alert("Close enough to the correct answer");
}

// Q#8

var divisible = Number(prompt("Enter a number to check it is divisible by 3"));
if (divisible % 3 === 0) {
  alert("yes it is divisible by 3");
}
console.log(divisible % 3 === 0, divisible);

// Q#9

var val = Number(prompt("Enter value"));
if (val % 2 === 0) {
  alert("The number is " + val + " is even.");
} else {
  alert("The number is " + val + " is odd.");
}
// Q#10

var temp = Number(prompt("Enter the temperature"));
if (temp > 40) {
  alert("it is too hot outside");
} else if (temp > 30 && temp < 40) {
  alert("the weather today is normal");
} else if (temp > 20 && temp < 30) {
  alert("todays weather is cool");
} else {
  alert("OMG! todays weather is so cool");
}
// Q#11

var firstNum = +prompt("Enter first number");
var secondNum = +prompt("Enter second number");
var operator = prompt("Enter operator", "+,-,*,/,%");
if (operator === "+") {
  alert(firstNum + secondNum);
} else if (operator === "*") {
  alert(firstNum * secondNum);
} else if (operator === "-") {
  alert(firstNum - secondNum);
} else if (operator === "/") {
  alert(firstNum / secondNum);
} else if (operator === "%") {
  alert(firstNum % secondNum);
}
