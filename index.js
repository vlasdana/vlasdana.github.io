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

console.info(mottoElement);
console.warn(mottoElement.innerHTML);

mottoElement.innerHTML += " & " + jobTitle;

function hidePage(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}
function showPage(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}
function showHomePage() {
  showPage("home");
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
}

function showSkillsPage() {
  showPage("skills");
  hidePage("home");
  hidePage("projects");
  hidePage("languages");
}

function showProjectsPage() {
  showPage("projects");
  hidePage("skills");
  hidePage("home");
  hidePage("languages");
}
function showLanguagesPage() {
  showPage("languages");
  hidePage("projects");
  hidePage("home");
  hidePage("skills");
}

showHomePage();
