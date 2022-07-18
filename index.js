console.info(2);
console.debug(22 + 3);
console.warn(6 * 3 - 10);
console.error("started");

var myName = "Dana";
var age = 19;

// console.info("My name is " + myName + ", I'm " + age + "years old.");
age = 30;
// console.info("My name is " + myName + ", I'm " + age + "years old.");
age = 31;
// console.info("My name is " + myName + ", I'm " + age + "years old.");

var jobTitle = "<span>Ofice Assistent</span>";
var mottoElement = document.getElementById("motto");

mottoElement.innerHTML += " & " + jobTitle;

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  hide("home");
  hide("skills");
  hide("projects");
  hide("languages");
}

function showHomePage() {
  hideAllPages();
  show("home");
}

function showSkillsPage() {
  hideAllPages();
  show("skills");
}

function showProjectsPage() {
  hideAllPages();
  show("projects");
}
function showLanguagesPage() {
  hideAllPages();
  show("languages");
}

showHomePage();
