console.info(2);
console.debug(22 + 3);
console.warn(6 * 3 - 10);
console.error("app started");

var myName = "Dana";
var age = 19;

// console.info("My name is " + myName + ", I'm " + age + "years old.");
age = 30;
// console.info("My name is " + myName + ", I'm " + age + "years old.");
age = 31;
// console.info("My name is " + myName + ", I'm " + age + "years old.");

var jobTitle = "<span>Ofice Assistent</span>";
var mottoElement = document.getElementById("motto");

console.info(mottoElement);
console.warn(mottoElement.innerHTML);

mottoElement.innerHTML += " & " + jobTitle;
