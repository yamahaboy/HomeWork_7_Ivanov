let h1Element = document.querySelector("h1");
let h1Text = h1Element.textContent;

console.log(h1Text);

///////////////////////////////////////

let classElement = document.querySelector(".text");
let classEl = classElement.textContent;

console.log(classEl);

///////////////////////////////////////

let liElement = document.querySelector("#listItem3");
let li = liElement.textContent;

console.log(li);
///////////////////////////////////////

let liCollection = document.querySelectorAll(".list-item");

for (let i = 0; i < liCollection.length; i++) {
    console.log(liCollection[i].textContent);
  }