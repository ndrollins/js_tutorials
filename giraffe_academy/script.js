/*document.write("<h2 style='color:blue;'>script.js file"); 
document.write("<hr/>");
//alert("the file is working");
let phrase="This is the story of my life. I never thought that things would turn out the way that they have but I am very grateful for this opportunity that I have to be here with my little Tessie. I am hoping to be getting married to her very soon. That is the goal. That is the dream. I haven't gotten to this point yet but I will get there very soon I hope. At least in this next year. "; document.write(phrase);
let myfaveNum=9;
let gpa=3.9;
let isMale=true;
let flaws = null;
let description = undefined;
let longTime = "year"
let num = 10;

num += 10;
document.write(num + "<br>");

document.write("<br>");
document.write( phrase.length );
document.write("<br>");
document.write( phrase.toUpperCase() ); //this is how you can pass different methods to strings
document.write("<br>");
document.write( phrase.charAt(79) );
document.write("<br>");
document.write( phrase.indexOf("v") );
document.write("<br>");
document.write( phrase.lastIndexOf("g") );
document.write("<br>");
//document.write( phrase.substring(56, 156) );
document.write("<br>");
document.write( phrase.substring(phrase.indexOf("m"), phrase.length) );
document.write("<br>");
document.write( phrase.endsWith("year. ") );
document.write("<br>");
document.write( phrase.includes("Tess") );
document.write("<br>");
document.write( phrase.includes(longTime) );
document.write("<br>");
document.write( phrase + longTime );
document.write("<br>");
document.write( phrase.indexOf("soon") );
document.write("<br>");
document.write("<br>");
document.write( 5**3 );
document.write("<br>");
document.write( 4 + 7 + 6 - 3 * 5 );
document.write( myfaveNum + "<br>");
document.write( Math.abs(num * -2));
document.write("<br>");
document.write( Math.pow(num, 2));

document.write("<br>");
document.write("<br>");
let name = window.prompt("What is your name?");
document.write("Welcome to JavaScript " + name);

document.write("<h2 style='color:blue;'>script.js file"); 
document.write("<br>");
document.write("Let's start this again");
document.write("<br>");
let num1 = window.prompt("Enter a number: ");
let num2 = window.prompt("Enter another number: ");

num1 = parseFloat(num1);
num2 = parseInt(num2);
document.write(num1 + num2);



document.write("<h2 style='color:blue;'>script.js file"); 
let fruits = ["Apples", "pears", "peaches"];
fruits[2] = "sour sop";
document.write( fruits[2] );


let bint = "6! 7! 3! 8! 2!";
bint = bint.split("!");
document.write("<br>");
document.write(bint);


function sayHi(name, age){
	document.write("<h1>Hello " + name + "</h1>");
	document.write("<p>You are " + age + "</p>");
}
sayHi("same", "35");
*/
function addition(num1, num2){
	return num1 + num2;
	
}
let sum = addition(76, 84);
document.write(sum);
