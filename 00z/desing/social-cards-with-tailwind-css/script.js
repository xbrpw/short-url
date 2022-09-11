//
// Javascript

const HTML = document.documentElement;

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  
  //
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");
  
  //
  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      HTML.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      HTML.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
    
    //
    // if NOT set via local storage previously
  } else {
    if (HTML.classList.contains("dark")) {
      HTML.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      HTML.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});