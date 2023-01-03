let houses = {
  gryffindor: 0,
  hufflepuff: 0,
  slytherin: 0,
  ravenclaw: 0,
}
 
function countHouse(elmnt) {
  houses[elmnt.id] += 1
  document.getElementById(elmnt.id).innerHTML=houses[elmnt.id]
};