var div1 = document.createElement("div1");
document.body.appendChild(div1);

var div2 = document.createElement("div2");
document.body.appendChild(div2);
div2.style.color = "green";
div2.style.fontSize = "24px";
div2.style.fontFamily = "Verdana";
div2.left = 20;  

var par1 = document.createElement("p");
document.body.appendChild(par1);
div2.appendChild(par1);
par1.innerHTML = "Hello world!";

var link1 = document.createElement("a");
document.body.appendChild(link1);

var pict = document.createElement("img");
document.body.appendChild(pict);
pict.src = "../picts/smBlackCat.jpg" ;
