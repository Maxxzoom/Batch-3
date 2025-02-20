const togglebtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

togglebtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
