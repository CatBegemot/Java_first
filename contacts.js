imgPath = "../My_web/img/"

var pictHome = document.createElement("img");
document.body.appendChild(pictHome);
pictHome.src = imgPath + "home.jpg";
var linkHome = document.createElement("A");
document.body.appendChild(linkHome);
linkHome.href="home.html";

var pictAbout = document.createElement("img");
document.body.appendChild(pictAbout);
pictAbout.src = imgPath +"about.jpg";
var linkAbout = document.createElement("A");
document.body.appendChild(linkAbout);
linkAbout.href="about.html";

var pictContacts = document.createElement("img");
document.body.appendChild(pictContacts);
pictContacts.src = imgPath + "contacts_1.jpg";
var linkContacts = document.createElement("A");
document.body.appendChild(linkContacts);
linkContacts.href="contacts.html";