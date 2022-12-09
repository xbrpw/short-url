(function(){
	var site_visit = 0; // need to assign data from database
	var post_visit = 0; // need to assign data from database
	var values = [];
	var now = new Date();
	var isExpired = now.setHours(now.getHours() + 24); //one day from now
	var post_id = 0; //need to assign post id for post detail page

if (typeof Storage !== "undefined") {
  if (!localStorage.setTime) {
    localStorage.setTime = isExpired;
  }
  
  // localStorage.post_view_count;
  if(localStorage.post_view_count){
    values = localStorage.getItem('post_view_count').split(",");
  }
  
  
  // for website visit counter
  if (!localStorage.visited) {
    localStorage.setItem('siteVisitCount', site_visit + 1);
    // set update to DOM element
    document.getElementById("result").innerHTML = 'Welcome, You visited this page '+ localStorage.siteVisitCount + 'time';
    // need to send updated value to database 
    localStorage.visited = true;
  }else{
    document.getElementById("result").innerHTML = 'You have visited here more then once within 24 hours';
  }
  
  
  console.log(localStorage.siteVisitCount)

 
  // for post counter
  
if(values.length){
	for(var i =0; i< values.length; i++){
	    if(values[i] != post_id){
	      values.push(post_id);
	      localStorage.setItem('post_view_count', values);
	      // send post count update to database.......
	      post_visit = post_visit + 1;
	    }
	    
	}
}else{
	  values.push(post_id);
	  localStorage.setItem('post_view_count', values);
	  // send post count update to database here.......
	  post_visit = post_visit + 1;

	  
}


//check if expired

if (Number(localStorage.setTime) < new Date()) {
    localStorage.removeItem('visited');
  localStorage.removeItem('post_view_count');
}


  

}


})()