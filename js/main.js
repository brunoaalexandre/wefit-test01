// Menu vertical to horizontal
var btnGroupHorizontal =
  document.getElementsByClassName("btn-group-vertical")[0];
btnGroupHorizontal.style.display = "flex";
btnGroupHorizontal.style.flexDirection = "row";
btnGroupHorizontal.style.maxWidth = "50%";
btnGroupHorizontal.style.gap = "5px";

// Menu buttons
var menuContainer = document.getElementsByClassName("row")[0];
var buttons = menuContainer.querySelectorAll("button");
buttons[0].style.borderRadius = "4px";
buttons[0].style.width = "auto";
buttons[1].style.borderRadius = "4px";
buttons[1].style.width = "auto";
buttons[2].style.borderRadius = "4px";
buttons[2].style.width = "auto";
buttons[3].style.borderRadius = "4px";
buttons[3].style.width = "auto";
buttons[4].style.borderRadius = "4px";
buttons[4].style.width = "auto";
buttons[5].style.borderRadius = "4px";
buttons[5].style.width = "auto";

// Header
var header = document.getElementsByClassName("jumbotron")[0];
header.style.background = "#6b757e";
header.style.color = "#fff";
header.style.textAlign = "right";

var btnHeader = document.getElementsByTagName("a")[0];
btnHeader.style.background = "#27a945";
btnHeader.style.borderColor = "#27a945";

// Cards
var cardContainer = document.getElementsByClassName("row")[2];
var cardContainerChildrens = cardContainer.getElementsByClassName("col-lg-3");
cardContainer.insertBefore(
  cardContainerChildrens[0],
  cardContainerChildrens[1]
);
cardContainer.insertBefore(
  cardContainerChildrens[1],
  cardContainerChildrens[3]
);
cardContainer.insertBefore(
  cardContainerChildrens[2],
  cardContainerChildrens[2]
);
cardContainer.insertBefore(
  cardContainerChildrens[3],
  cardContainerChildrens[0]
);
var animalsCard = cardContainer.getElementsByClassName("col-lg-3")[1];
animalsCard.getElementsByTagName("a")[0].style.background = "#27a945";
animalsCard.getElementsByTagName("a")[0].style.borderColor = "#27a945";

// List
var listContainer = document.getElementsByClassName("row")[3];
var listContainerUl = document
  .getElementsByClassName("col-lg-4")[0]
  .getElementsByClassName("list-group")[0];

listContainerUl
  .getElementsByClassName("list-group-item")[0]
  .classList.remove("active");

var li4 = document.createElement("li");
li4.appendChild(document.createTextNode("Quarto Item"));
li4.classList.add("list-group-item");
li4.classList.add("active");
listContainerUl.appendChild(li4);

var li5 = document.createElement("li");
li5.appendChild(document.createTextNode("Quinto Item"));
li5.classList.add("list-group-item");
listContainerUl.appendChild(li5);
