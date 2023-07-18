const imageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";

let element = document.querySelector("h1");
element.insertAdjacentHTML("afterend", "<img/>");

let img = document.querySelector("img");
img.src = imageUrl;

let imgClone = img.cloneNode();
document.body.appendChild(imgClone)
