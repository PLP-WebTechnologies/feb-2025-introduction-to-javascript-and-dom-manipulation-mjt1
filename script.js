document.getElementById("changeTextBtn").addEventListener("click", () => {
  const description = document.getElementById("app-description");
  description.textContent = "Your trusted partner for campus life success!";
  description.style.color = "#16a34a";
  description.style.fontWeight = "bold";
});

document.getElementById("toggleElementBtn").addEventListener("click", () => {
  const extra = document.getElementById("extra-info");
  extra.style.display = extra.style.display === "none" ? "block" : "none";
});
