const tomorrow = () => {
  // Get today's date
  let today = new Date();
  // Change the date by adding 1 to it (today + 1 = tomorrow)
  today.setDate(today.getDate() + 1);
  // return yyyy-mm-dd format
  return today.toISOString().split('T')[0];
};

// display the result in tomorrow's widget span tag
document.querySelector(".tomorrow-date").innerHTML = tomorrow()


const dateOfXDay = (xDay = 1) => {
  // Get today's date
  let today = new Date();
  // Change the date by adding 1 to it (today + 1 = tomorrow)
  today.setDate(today.getDate() + xDay);
  // return yyyy-mm-dd format
  return today.toISOString().split('T')[0];
};

// display the result in the subscription widget span tag
document.querySelector(".subscription-end-date").innerHTML = dateOfXDay(-365)
