fetch("/partials/navbar.html") // Use the URL of your external HTML
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then((htmlContent) => {
    document.querySelector("main").innerHTML = htmlContent + document.querySelector("main").innerHTML;
  })
  .catch((error) => {
    console.error("Error fetching remote HTML:", error);
  });
fetch("/partials/footer.html") // Use the URL of your external HTML
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then((htmlContent) => {
    document.querySelector("main").innerHTML += htmlContent;
  })
  .catch((error) => {
    console.error("Error fetching remote HTML:", error);
  });

// FORCE CACHE CLEAN STYLES AND SCRIPT


// NAVBAR CONTROLLER
setTimeout(() => {
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
}, 1500);

// INIT AOS
/*AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 0, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  mirror: true, // whether elements should animate out while scrolling past them
});
*/

// MÉTODOS DO MÓDULO
function toggleMenu() {
  let navBar = document.getElementById("sect-navbar");
  navBar.classList.toggle("open");
}
function closeMenu() {
  let navBar = document.getElementById("sect-navbar");
  navBar.classList.remove("open");
}

