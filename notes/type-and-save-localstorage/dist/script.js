var input_text = document.getElementById("input_text");
var save_button = document.getElementById("save_button");
var user_entries = document.getElementById("user_entries");

save_button.disabled = true;

input_text.addEventListener(
  "keyup",
  function(e) {
    if (this.value.trim().length > 0) {
      save_button.disabled = false;

      if (e.keyCode == 13) {
        save_button.click();
        return false;
      }
    } else {
      save_button.disabled = true;
    }
  },
  false
);

save_button.addEventListener(
  "click",
  function(e) {
    save_button.disabled = true;

    var val = input_text.value.trim();

    var newUl = document.createElement("ul");
    user_entries.appendChild(newUl);

    newUl.innerHTML += "<li>" + val + "</li>";

    var list = user_entries.innerHTML;
    localStorage.setItem("list", list);

    input_text.value = " ";
  },
  false
);

if (localStorage.getItem("list")) {
  user_entries.innerHTML = localStorage.getItem("list");
}