const yearNodes = document.querySelectorAll('#year');
yearNodes.forEach((node) => {
  node.textContent = new Date().getFullYear();
});
