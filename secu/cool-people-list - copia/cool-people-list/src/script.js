var btnAdd = document.getElementById("btnAdd");
var coolPeople = []; 
  
/*Error handling*/
btnAdd.addEventListener("click", errorHandling);
function errorHandling() {
  var a = document.getElementById("nameInput").value;
  var b = document.getElementById("ageInput").value;
  if(a===null || a==="" || b===null || b==="") {
    console.log('Error')
    return false;
  } else {
    submitInformation();
    tableBuildFunc();
  }
};

/*Sent input to object constructor, visual feedback, cleaning input */
var submitInformation = function() {	
  var nameInput = document.getElementById("nameInput").value;
  var ageInput = document.getElementById("ageInput").value;

  objConstructorFunc(nameInput, ageInput);
  feedbackP.style.visibility = 'visible';
  feedbackP.innerHTML = 'Added';							   //p is unvisible, if clicked visible
  setInterval(function(){ 							    		 //after 2s unvisible again
    feedbackP.innerHTML = ''; 	
  }, 3000);

  document.getElementById("nameInput").focus(); //focus first imput after button add pressed

  var cleaning = function() {
    document.getElementById("nameInput").value = '';
    document.getElementById("ageInput").value = '';
    }	  
  cleaning();							
} //end-of-submitInformation

/*Object constructor*/
var objConstructorFunc = function (nameInput, ageInput) {
  var myObj = {};    
  myObj.Name = nameInput;
  myObj.Age = ageInput;
  coolPeople.push(myObj);
}

/*Creating Table*/
var btnAdd = document.getElementById("btnAdd");
var arrayTable = document.getElementsByClassName("arrayTable");
var tableBuildFunc = function() {  
  var html = ''; 
  for (var i in coolPeople) {
    html += '<tr><td>' + coolPeople[i].Name +'</td><td>' + coolPeople[i].Age + '<td>' + '<button data-index="' + i +'" onclick="deleteButtonClick(event)" type="submit">x</button>' + '</td></td></tr>';
  }
  document.getElementById("tbodyID").innerHTML = html;
  arrayTable[0].style.visibility = "visible";     	//if add button hit, table is visible
};  

/*Deletes specific row and renegerates table*/
function deleteButtonClick(event) {
  var current = event.target;
  var btnIndex = current.dataset.index;
  coolPeople.splice(btnIndex,1);
  tableBuildFunc();
  
}

/*Safe to local storage*/
var btnSafe = document.getElementById("btnSafe")
var safeLocalStorage = function () {
  localStorage.setItem('LScoolPeople', JSON.stringify(coolPeople));
}
btnSafe.addEventListener("click", safeLocalStorage);

var btnDeleteSession = document.getElementById("btnDeleteSession")
var deleteLocalStorage = function () {
  localStorage.clear();
  window.location.reload();
}
btnDeleteSession.addEventListener("click", deleteLocalStorage);

/*Check if localStorage has coolPeople, then load, build table */
document.addEventListener('DOMContentLoaded', function(){

   if(localStorage.getItem('LScoolPeople')){
    var localData = JSON.parse(localStorage.getItem('LScoolPeople'));
    coolPeople = [... localData]; //Spread Operator
    tableBuildFunc();
    // coolPeople = localData; would work too?
  }
});

/*Key binding ENTER*/
window.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    if(errorHandling()){
      submitInformation();
      } else {
      return;
    }
  }
});

/*Delete last last element in array*/
var btnDeleteLast = document.getElementById("btnDeleteLast");
var deleteLastItemFunc = function() {
  coolPeople.pop();
  tableBuildFunc();
  feedbackP.innerHTML = 'Deleted'
  feedbackP.style.visibility = "visible"; 		//p is unvisible, if clicked visible
  setInterval(function() { 							    	//after 2s unvisible again
  feedbackP.style.visibility = "hidden";
  }, 3000);
};
btnDeleteLast.addEventListener("click", deleteLastItemFunc); 


/*Modal*/
 var modal = document.getElementById('myModal');
 var span = document.getElementsByClassName("close")[0];

 document.getElementById("modalTrigger").onclick = function() {openModal()};
 function openModal() {
   modal.style.display = "block";
 }

 span.onclick = function() {
   modal.style.display = "none";
 }

 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }
  



