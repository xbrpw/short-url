// Get the modalx
var modalx = document.getElementById("mymodalx");

// Get the button that opens the modalx
var btn = document.getElementById("myBtnx");

// Get the <span> element that closelxs the modalx
var span = document.getElementsByClassName("closelx")[0];

// When the user clicks the button, open the modalx 
btn.onclick = function() {
    modalx.style.display = "block";
}

// When the user clicks on <span> (x), closelx the modalx
span.onclick = function() {
    modalx.style.display = "none";
}

// When the user clicks anywhere outside of the modalx, closelx it
window.onclick = function(event) {
    if (event.target == modalx) {
        modalx.style.display = "none";
    }
}