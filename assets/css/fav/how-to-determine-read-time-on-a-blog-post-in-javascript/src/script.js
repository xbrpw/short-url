const postReadTime = (post) => {
  // Set an average word per minute
  const averageWordPerMinute = 250;

  // Calculate the post length
  const postLength = post.split(" ").length;
  
  // Read time formular
  const readTime = Math.ceil(postLength / averageWordPerMinute);
  
  // Update the UI
  return document.getElementById("post-read-time").innerText = `👁 ${readTime} min read`;
}


// Get post from server
const fetchPost = () =>{
  fetch("https://jsonplaceholder.typicode.com/posts/4")
    .then((res)=>res.json())
    .then((data)=>{
    document.getElementById("post-title").innerText = data.title;
    document.getElementById("post-body").innerText = data.body;
    postReadTime(data.body.repeat(0)) // modify the repeat to increase the text for demo
  })
}

// Entry
fetchPost()