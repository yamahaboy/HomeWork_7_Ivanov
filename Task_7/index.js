let count = 0;

const onClickPlus = () => {
  count += 1;
  updateCounter();
  if (count === 5) {
    stopCount();
  }
};

const onClickMinus = () => {
  count -= 1;
  updateCounter();
  if (count === -5) {
    stopCount();
  }
};

const stopCount = () => {
  document
    .getElementById("minusBtn")
    .removeEventListener("click", onClickMinus);
  document.getElementById("plusBtn").removeEventListener("click", onClickPlus);
};

const updateCounter = () => {
  const counterElement = document.getElementById("counter");
  counterElement.textContent = count;
};

document.getElementById("minusBtn").addEventListener("click", onClickMinus);
document.getElementById("plusBtn").addEventListener("click", onClickPlus);
