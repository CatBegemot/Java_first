var pictHome = document.createElement("img");
document.body.appendChild(pictHome);
pictHome.id = "pictHome";
pictHome.src = imgPath + "home_1.jpg";
var linkHome = document.createElement("A");
pictHome.onmouseover = function() {testHomeOn()};
pictHome.onmouseout = function() {testHomeOff()};
pictHome.onmouseclick = function() {testLink()};

var pictAbout = document.createElement("img");
document.body.appendChild(pictAbout);
pictAbout.src = imgPath +"about.jpg";
var linkAbout = document.createElement("A");
document.body.appendChild(linkAbout);


var pictContacts = document.createElement("img");
document.body.appendChild(pictContacts);
pictContacts.src = imgPath + "contacts.jpg";
var linkContacts = document.createElement("A");
document.body.appendChild(linkContacts);



