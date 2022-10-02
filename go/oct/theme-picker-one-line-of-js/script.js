/* -- ⬇️⬇️⬇️ One-liner version ⬇️⬇️⬇️ -- */

// document.querySelectorAll("input[name='theme']").forEach(input => input.onchange = e => document.querySelector(":root").style.setProperty("--theme-color", `var(--${e.target.value})`));

/* -- ⬇️⬇️⬇️ Actually readable version ⬇️⬇️⬇️ -- */

// const root = document.querySelector(":root"),
//       inputs = document.querySelectorAll("input[name='theme']");

// for(const input of inputs) {
//   input.onchange = e => {
//     root.style.setProperty("--theme-color", `var(--${value})`);
//   }
// }

/* -- ⬇️⬇️⬇️ Actually readable version that uses localStorage ⬇️⬇️⬇️ -- */

const root = document.querySelector(":root"),
      inputs = document.querySelectorAll("input[name='theme']");

const theme = localStorage.getItem("theme-color");

const updateRoot = value => root.style.setProperty("--theme-color", `var(--${value})`);

for(const input of inputs) {
  if(theme && input.value === theme) {
    input.checked = true;
    
    updateRoot(theme);
  }
  
  input.onchange = e => {
    updateRoot(e.target.value);
    
    localStorage.setItem("theme-color", e.target.value);
  }
}