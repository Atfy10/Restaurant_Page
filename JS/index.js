//#region Call Elements
const navLinks = document.querySelectorAll(".nav-link");
const home = document.getElementById("Home");
const about = document.getElementById("About");
const menu = document.getElementById("Menu");
const contact = document.getElementById("Contact");
const bookForm = document.getElementById("Book");
const backImage = document.getElementById("backImage");
const greeting = document.getElementById("greeting");
const weather = document.getElementById("weather");
const personNumber = document.getElementById("personNo");
const bookDate = document.getElementById("book-date");
const bookTime = document.getElementById("book-time");
const selectError = document.getElementById("error");
//#endregion

//#region Active NavIem
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the 'active' class from all nav links
    navLinks.forEach((nav) => nav.classList.remove("active"));
    // Add the 'active' class to the clicked nav link
    this.classList.add("active");
  });
});
window.addEventListener("scroll", () => {
  let current = "";
  let homeTop = home.offsetTop;
  let homeHeight = home.clientHeight;
  let aboutTop = about.offsetTop;
  let aboutHeight = about.clientHeight;
  let menuTop = menu.offsetTop;
  let menuHeight = menu.clientHeight;
  let contactTop = contact.offsetTop;
  let contactHeight = contact.clientHeight;
  if (window.scrollY <= homeTop + homeHeight) {
    current = home.getAttribute("id");
  } else if (window.scrollY <= aboutTop + aboutHeight) {
    current = about.getAttribute("id");
  } else if (window.scrollY <= menuTop + menuHeight) {
    current = menu.getAttribute("id");
  } else if (window.scrollY <= contactTop + contactHeight) {
    current = contact.getAttribute("id");
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(`#${current}`)) {
      link.classList.add("active");
    }
  });
});

//#endregion

//#region Time & Greeting Message
weather.innerText = "The weather now is clean";
let todayDate = new Date();
let hour = todayDate.getHours();
if (hour >= 6 && hour < 17) {
  backImage.style.backgroundImage = `url("../../Assets/Back-min3.jpg")`;
  left.checked = true;
  greeting.innerText = "Good Morning!";
} else if (hour >= 17 && hour < 20) {
  backImage.style.backgroundImage = `url("../../Assets/Back-min1.jpg")`;
  mid.checked = true;
  greeting.innerText = "Good Afternoon!";
} else if ((hour >= 20 && hour < 24) || (hour >= 0 && hour < 6)) {
  backImage.style.backgroundImage = `url("../../Assets/Back-min4.jpg")`;
  right.checked = true;
  greeting.innerText = "Good Night!";
}
//#endregion

//#region Book Validation
let limitday = new Date();
limitday.setDate(limitday.getDate() + 7);
bookDate.setAttribute("min", todayDate.toISOString().split("T")[0]);
bookDate.setAttribute("max", limitday.toISOString().split("T")[0]);
bookForm.addEventListener("submit", (e) => {
  selectError.innerText = "";
  if (
    personNumber.value == null ||
    personNumber.value == -1 ||
    personNumber.value == 0
  ) {
    e.preventDefault();
    selectError.innerText = "You must choose a number";
  }
});
//#endregion
