let linkElement = document.querySelector("a");

linkElement.setAttribute("target", "_blank");
linkElement.setAttribute("rel", "noopener");
linkElement.removeAttribute("role");
linkElement.setAttribute("href", "/#");

console.log(linkElement);
