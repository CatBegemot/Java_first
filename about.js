imgPath = "../My_web/img/"

var pictHome = document.createElement("img");
document.body.appendChild(pictHome);
pictHome.src = imgPath + "home.jpg";
var linkHome = document.createElement("A");
document.body.appendChild(linkHome);
linkHome.href="home.html";

var pictAbout = document.createElement("img");
document.body.appendChild(pictAbout);
pictAbout.src = imgPath +"about_1.jpg";
var linkAbout = document.createElement("A");
document.body.appendChild(linkAbout);
linkAbout.href="about.html";

var pictContacts = document.createElement("img");
document.body.appendChild(pictContacts);
pictContacts.src = imgPath + "contacts.jpg";
var linkContacts = document.createElement("A");
document.body.appendChild(linkContacts);
linkContacts.href="contacts.html";

var pict1 = document.createElement("img");
document.body.appendChild(pict1);
pict1.style.position = "absolute";
pict1.style.top = "100px"; 
pict1.style.left = "10px";
pict1.src = imgPath + "pic_1.jpg";

var pict2 = document.createElement("img");
document.body.appendChild(pict2);
pict2.style.position = "absolute";
pict2.style.top = "100px"; 
pict2.style.left = "160px";
pict2.src = imgPath + "pic_2.jpg";

var pict3 = document.createElement("img");
document.body.appendChild(pict3);
pict3.style.position = "absolute";
pict3.style.top = "250px"; 
pict3.style.left = "10px";
pict3.src = imgPath + "pic_3.jpg";

var pict4 = document.createElement("img");
document.body.appendChild(pict4);
pict4.style.position = "absolute";
pict4.style.top = "250px"; 
pict4.style.left = "160px";
pict4.src = imgPath + "pic_4.jpg";