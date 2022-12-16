document.querySelector(".slider input").addEventListener("input", function(){
  document.querySelector(".original-image").style.width = this.value + "%";
});