// creating my image link
// <script src="firma-abajo-derecha.js"></script> 

var link = document.createElement("a");
document.body.appendChild(link);

link.href = "https://twitter.com/luisangelmaciel";
link.target = "_blank";

var photo = document.createElement("img");
link.appendChild(photo);

photo.src =    
    "../../lamp-avatar-icon.svg";
photo.style =
    "border-radius:50%;position:fixed;bottom:20px;right:20px;transition:all 0.5s ease";
photo.alt =
    "by @LuisAngelMaciel"
photo.onmouseover = function() {
    this.style.transform = "scale(1.1,1.1)";
    this.style.boxShadow = "5px 5px 15px #fff";
};

photo.onmouseout = function() {
    this.style.transform = "scale(1,1)";
    this.style.boxShadow = "none";
};