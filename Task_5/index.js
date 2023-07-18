const links = [
  "https://learn.javascript.ru",

  "https://learn.javascript.ru/searching-elements-dom",

  "https://learn.javascript.ru/structure",

  "#test",
];

const container = document.createElement("div");

links.forEach((link, index) => {
  const a = document.createElement("a");
  a.href = link;
  a.textContent = `Link ${index + 1}`;
  a.classList.add("link");

  const linkContainer = document.createElement("div");
  linkContainer.appendChild(a);
  container.appendChild(linkContainer);
});

document.body.appendChild(container);
