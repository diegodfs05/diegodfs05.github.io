// DYNAMICALLY FETCHING PARTIALS
fetch("/partials/navbar.html")
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
fetch("/partials/footer.html")
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
  offset: 0,
  delay: 200,
  duration: 1000,
  mirror: true,
});
*/

// MODULE METHODS
function toggleMenu() {
  let navBar = document.getElementById("sect-navbar");
  navBar.classList.toggle("open");
}
function closeMenu() {
  let navBar = document.getElementById("sect-navbar");
  navBar.classList.remove("open");
}

