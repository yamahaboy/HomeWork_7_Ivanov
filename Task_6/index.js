function clickAttribute() {
  alert("Обработчик события через атрибут");
}

const button1 = document.getElementById("button1");
button1.addEventListener("click", clickAttribute);

const button2 = document.getElementById("button2");
button2.onclick = function () {
  alert("Обработчик события через свойство элемента");
};

const button3 = document.getElementById("button3");
button3.addEventListener("click", function () {
  alert("Обработчик события через метод addEventListener");
});
