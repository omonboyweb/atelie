const listIcon = document.querySelector(".listIcon");
const siteBar = document.querySelector(".siteBar");
const listIcon02 = document.querySelector(".listIcon02");
listIcon.addEventListener("click", () => {
  siteBar.style.display = "block";
  listIcon.style.display = "none";
  listIcon02.style.display = "block";
});

listIcon02.addEventListener("click", () => {
  siteBar.style.display = "none";
  listIcon.style.display = "block";
  listIcon02.style.display = "none";
});
