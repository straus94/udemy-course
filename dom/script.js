let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle");
    //heart = document.querySelectorAll(".heart"),
    //oneHeart = document.querySelector(".heart");

box.style.height = "120px";
box.style.width = "120px";
box.style.backgroundColor = "red";
box.style.marginBottom = "8px";

btn[1].style.borderRadius = "100%";
btn[4].style.marginBottom = "8px";

for (let i = 0; i < circle.length; i++) {
    circle[i].style.height = "120px";
    circle[i].style.width = "120px";
    circle[i].style.marginBottom = "4px";
    circle[i].style.borderRadius = "100%";
}
// circle.forEach(function(item, i, mass){
//     item.style.height = "120px";
//     item.style.width = "120px";
//     item.style.marginBottom = "4px";
//     item.style.borderRadius = "100%";
// });
circle[0].style.backgroundColor = "green";

circle[1].style.backgroundColor = "yellow";

circle[2].style.backgroundColor = "red";

let div = document.createElement("div"),
    text = document.createTextNode("Hello");

    div.classList.add("black");
    div.style.backgroundColor = "black";
    div.style.marginTop = "4px";
    div.style.width = "100px";
    div.style.height = "100px"
    document.body.appendChild(div);

    document.body.insertBefore(div, circle[0]);
    //document.body.removeChild(circle[1]);

    //document.body.replaceChild(btn[2], circle[2]);
    circle[0].innerHTML = "text";
    circle[1].textContent = "text content";
console.log(div);

