// GET ELEMENT BY ID
var firstNameEle = document.getElementById("firstName");
firstNameEle.innerText = "Nikhith";
console.log(firstNameEle);

// GET ELEMENT BY CLASS
var valuesList = document.getElementsByClassName("value");
valuesList[1].innerHTML = "<u> Konduru </u>";

// GET ELEMENT BY TAG-NAME
var tagsList = document.getElementsByTagName("span");
console.log("Tags Length: "+tagsList.length);
tagsList[2].innerHTML = "<b> nikhith@yopmail.com </b>";

//  Manipulating attributes
var ele1 = document.getElementById("firstName");
ele1.setAttribute("class","pavan");
var ele2 = document.getElementById("firstName");
ele2.setAttribute("test","sample");
var ele3 = document.getElementById("firstName");
ele3.style.color = "blue";

//  Local storage
localStorage.setItem("lastName","jindam");
var lastname = localStorage.getItem("lastName");
console.log("from local storage: "+lastname);
//  Session Storage
sessionStorage.setItem("firstName","pavan");
var firstName = sessionStorage.getItem("firstName");
console.log("from session storage:"+firstName);

// cookie
document.cookie = "lastname=jindam; expires=Wed, 28 Apr 2021 18:00:00 UTC";
var cookies = document.cookie;
console.log("from cookies:"+cookies);