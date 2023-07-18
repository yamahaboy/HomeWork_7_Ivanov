let classElement = document.querySelector(".text");
let classEl = classElement.textContent;

console.log(classEl);

let element = document.querySelector("h1");
element.innerHTML = "Title level 1";

console.log(element);

let liElement = document.querySelector("#listItem3");

liElement.insertAdjacentHTML("afterbegin", "<strong>List item 3</strong>");

console.log(liElement);

