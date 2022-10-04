//
// Javascript

const toggleTheme = document.getElementById("toggle-theme");
const toggleColor = document.querySelectorAll(".toggle-color-theme");
const sidebarToggleTheme = document.querySelector(".sidebar-toggle-theme");

const html = document.documentElement;
//
// Toggle Theme

toggleTheme.addEventListener("click", e => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    toggleTheme.textContent = "🌙";
  } else {
    toggleTheme.textContent = "🌞";
  }
});

//
// Toggle colors

toggleColor.forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    const target = e.target;
    const theme = button.getAttribute("data-color");

    toggleColor.forEach(el => el.classList.remove("scale-150"));
    target.classList.add("scale-150");

    const cl = sidebarToggleTheme.classList;
    const cl2 = [...cl];
    const cl3 = cl2.filter(item => item.includes("bg-"));

    if (sidebarToggleTheme.classList.contains(cl3)) {
      sidebarToggleTheme.classList.replace(cl3, theme);
    }
  });
});