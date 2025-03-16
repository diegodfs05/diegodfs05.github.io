let navBar = document.getElementById("sect-navbar");
let navBarLinks = document.querySelectorAll("#sect-navbar .menu-links a");
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    if (!navBar.classList.contains("short")) {
      navBar.classList.add("short");
    }
  }
  if (scrollPosition <= 100) {
    if (navBar.classList.contains("short")) {
      navBar.classList.remove("short");
    }
  }
  closeMenu();
});

navBarLinks.forEach((ele) => {
  ele.addEventListener("click", () => {
    try {
      navBar.classList.remove("open");
    } catch (e) {
      console.log(e);
    }
  });
});
function toggleMenu() {
  navBar.classList.toggle("open");
}
function closeMenu() {
  navBar.classList.remove("open");
}
