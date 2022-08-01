console.info(2);
console.debug(22 + 3);
console.warn(6 * 3 - 10);
console.warn("started");

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

var activePage = "skills";

function showPage(nextPage) {
  hide(activePage);
  show(nextPage);
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}]`).classList.add("active");
  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();

function displaySkills() {
  var ul = document.querySelector("#skills ul");
  var skills = [
    { name: "html", endorcements: 15 },
    { name: "css", endorcements: 10 },
    { name: "js", endorcements: 5 },
  ];
  var endorcements = [];
  console.info(ul);
  for (var i = 0; i < skills.length; i++) {
    ul.innerHTML += `<li>${skills[i].name} - ${skills[i].endorcements}</li>`;
  }
}

displaySkills();
