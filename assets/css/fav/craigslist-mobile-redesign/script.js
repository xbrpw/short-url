const listings = document.getElementById("content-listings"),
      listing = listings.getElementsByClassName("listing")[0];

const items = [{
  img: "https://images.unsplash.com/photo-1662304729380-3a7ffb361e63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  title: "I put white out on this. It looks antique now.",
  date: "Aug 24",
  location: "South Hills",
  price: 97
}, {
  img: "https://images.unsplash.com/photo-1662228733241-3fc5b275adfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  title: "Someone pls take this old cheese. Or honey? Idk",
  date: "Aug 29",
  location: "Aurora",
  price: "FREE"
}, {
  img: "https://images.unsplash.com/photo-1662199513934-5be245dcb32c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  title: "Authentic golden tiger dog with 24K ruby encrusted eyes.",
  date: "Sept 1",
  location: "Vancouver",
  price: "20"
}, {
  img: "https://images.unsplash.com/photo-1662286844552-81c31af1416c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  title: "I'm just sayin, one day this bridge will be archaic. Buy it. Buy it at once.",
  date: "July 18",
  location: "Portland",
  price: "68,419.99"
}, {
  img: "https://images.unsplash.com/photo-1662229687897-b8ec09bb6e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  title: "I'm not actually selling these logs but I feel like I have to let you know that listing above me cannot possibly be real.",
  date: "June 5",
  location: "Newberg",
  price: 22
}];

for(let i = 0; i < 5; i++) {
  const clone = listing.cloneNode(true),  
        image = clone.getElementsByClassName("listing-image")[0],
        title = clone.getElementsByClassName("listing-info-title")[0],
        date = clone.getElementsByClassName("listing-info-date")[0],
        location = clone.getElementsByClassName("listing-info-location")[0],
        price = clone.getElementsByClassName("listing-price-value")[0],
        item = items[i];
  
  image.src = item.img;  
  title.innerText = item.title;  
  date.innerText = item.date;  
  location.innerText = item.location;
  price.innerText = item.price;
  
  listings.appendChild(clone);
}