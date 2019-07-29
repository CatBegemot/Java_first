function test() {
    document.getElementById("parTest").innerHTML = "2 + 2 = 4";
    return;
}
function test1() {
    document.getElementById("parTest").innerHTML = "2 + 2 =";
    return;
}

function testHomeOn() {
    document.getElementById("pictHome").src = imgPath + "home_2.jpg";
    document.getElementById("pictAbout").src = imgPath + "about.jpg";
    document.getElementById("pictContacts").src = imgPath + "contacts.jpg";
    return;
}

function testHomeOff() {
    document.getElementById("pictHome").src = imgPath + "home_1.jpg";
    document.getElementById("pictAbout").src = imgPath + "about.jpg";
    document.getElementById("pictContacts").src = imgPath + "contacts.jpg";
    return;
}

function testLink() {
    window.location ="index.html";
    return;
}
