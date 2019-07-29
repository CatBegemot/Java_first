var div1 = document.createElement("div1");
document.body.appendChild(div1);

var div2 = document.createElement("div2");
document.body.appendChild(div2);
div2.style.color = "green";
div2.style.fontSize = "24px";
div2.style.fontFamily = "Verdana";

var par1 = document.createElement("p");
document.body.appendChild(par1);
div2.appendChild(par1);
par1.innerHTML = "Hello world!";

var parTest = document.createElement("p");
document.body.appendChild(parTest);
div2.appendChild(parTest);
parTest.id = "parTest";
parTest.innerHTML = "2 + 2 = ";
parTest.onmouseover = function() {test()};
parTest.onmouseout = function() {test1()};

var linkHome = document.createElement("a");
document.body.appendChild(linkHome);
linkHome.href="home.html";
linkHome.style.color = "red";
linkHome.style.fontSize = "20px";
linkHome.style.fontFamily = "Verdana";
linkHome.innerHTML = "Warior";

var pict = document.createElement("img");
document.body.appendChild(pict);
pict.src = imgPath + "smBlackCat.jpg";

