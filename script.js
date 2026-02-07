const textarea = document.querySelector("textarea");
const card = document.querySelector(".card-inner");

// Load saved message
window.onload = () => {
  const savedMsg = localStorage.getItem("valentineMessage");
  if (savedMsg) {
    textarea.value = savedMsg;
  }
};

// Save message as you type
textarea.addEventListener("input", () => {
  localStorage.setItem("valentineMessage", textarea.value);
});

// Toggle open on click (for touch devices)
let opened = false;
document.querySelector(".card").addEventListener("click", () => {
  opened = !opened;
  card.style.transform = opened ? "rotateY(-180deg)" : "rotateY(0deg)";
});
