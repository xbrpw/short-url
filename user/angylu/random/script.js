const imageArray = [
	"../img/016e53e5f451f991bf8d5e3d60b6ec89.jpg",
	"../img/016e53e5f451f991bf8d5e3d60b6ec89.webp",
	"../img/07fe246b5fff21f2d918a2ec6bb04325.webp",
	"../img/2410fc18b8e2fd09e977dc3fe3663b8e.jpg",
	"../img/2410fc18b8e2fd09e977dc3fe3663b8e.webp",
	"../img/25d68590a1044df6b5ea92a5fad3db8e.webp",
	"../img/3215e7eb797e61ecfc1d6b4bbb925db0.jpg",
	"../img/3215e7eb797e61ecfc1d6b4bbb925db0.webp",
	"../img/32be1a848eb95618ebcac38ee2ada674.jpg",
	"../img/32be1a848eb95618ebcac38ee2ada674.webp",
	"../img/3aabbbc5985f5a4dc943a7df00bca715.jpg",
	"../img/3aabbbc5985f5a4dc943a7df00bca715.webp",
	"../img/3d62c9ed5f72d51d7026cc28a970cda0.jpg",
	"../img/3d62c9ed5f72d51d7026cc28a970cda0.webp",
	"../img/451e5a5fcf325242af1c07927bb502b0.webp",
	"../img/768c20f6c5c64a70567b3b3210738736.jpg",
	"../img/768c20f6c5c64a70567b3b3210738736.webp",
	"../img/a3f405cb1593b5c1a65b7abb87bac61c.jpg",
	"../img/a3f405cb1593b5c1a65b7abb87bac61c.webp",
	"../img/bg00-one-piece.webp",
	"../img/bg01-one-piece.webp",
	"../img/bg02-one-piece.webp",
	"../img/bg03-one-piece.webp",
	"../img/cc61ed01f7db07742af2cd7e10149ee3 (1).jpg",
	"../img/cc61ed01f7db07742af2cd7e10149ee3 (1).webp",
	"../img/cc61ed01f7db07742af2cd7e10149ee3.jpg",
	"../img/cc61ed01f7db07742af2cd7e10149ee3.webp",
	"../img/d6809e0271af2b9be8e00075f23003d2.webp",
	"../img/fff7fe32958e55853f88a6d40a7f3a5d.jpg",
	"../img/fff7fe32958e55853f88a6d40a7f3a5d.webp",
	"../img/logo-one-piece-complete.svg",
	"../img/logo-one-piece.svg",
	"../img/one-piece-00.webp",
	"../img/wanted00.jpg",
	"../img/wanted00.svg",
	"../img/wanted01.svg",
	"../img/wanted02.svg",
	"../img/wanted03.jpg",
	"../img/wanted04.jpg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}