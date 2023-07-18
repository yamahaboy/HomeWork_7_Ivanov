const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("close")) {
      const message = event.target.closest(".message");
      message.remove();
    }
  });
