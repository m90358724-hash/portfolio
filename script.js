// Typing effect
let text = "Muhammad";
let i = 0;

const title = document.querySelector("header h1");
title.textContent = "";

function type() {
  if (i < text.length) {
    title.textContent += text.charAt(i);
    i++;
    setTimeout(type, 150);
  }
}

type();

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}