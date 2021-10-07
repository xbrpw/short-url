function birthDate(){
  var year=document.getElementById("year").value;
  var month=document.getElementById("month").value;
  var day=document.getElementById("day").value;
  var animals=["monkey", "rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat"];
  var stars=["an Aries", "a Taurus", "a Gemini", "a Cancer", "a Leo", "a Virgo", "a Libra", "a Scorpio", "a Sagittarius", "a Capricorn", "an Aquarius", "a Pisces"];
  var numbers=[0,1,2,3,4,5,6,7,8,9,10,11];
  var rotation=[225,195,165,135,105,75,45,15,345,315,285,255];
  var degree;
  var animal;
  var url;
  var element=document.getElementById("horoscope");
  var star=[];
  if (year===""||month===""||day===""){
    alert("The information is incomplete!");
  }
  else{
  for (var i in numbers){
  if(numbers[i]===year%12){
    animal=animals[i];
    degree=rotation[i];
    }
  }
  if( (month ==3 && 20<day < 22)||(month==4 && day<20) ){
  star=stars[0];
    url='https://cdn0.iconfinder.com/data/icons/astronomical-signs/16/Aries_horoscope_astrology_zodiac_sign_symbol-64.png';
  }
  else if ( (month ==4 && 19 < day )||(month==5 && day<20) ){
  star=stars[1];
    url='https://cdn0.iconfinder.com/data/icons/astronomical-signs/16/Taurus_horoscope_astrology_zodiac_sign_symbol-64.png';
  }
  else if ( (month ==5 && 20 < day )||(month==6 && day<21) ){
  star=stars[2];
    url='https://cdn0.iconfinder.com/data/icons/astronomical-signs/16/Gemini_horoscope_astrology_zodiac_sign_symbol-64.png';
  }
  else if ( (month ==6 && 20 < day )||(month==7 && day<23) ){
  star=stars[3];
    url='https://cdn0.iconfinder.com/data/icons/astronomical-signs/16/Cancer_zodiac_horoscope_astrology_sign_symbol-64.png';
  }
  else if ( (month ==7 && 22 < day )||(month==8 && day<23) ){
  star=stars[4];
    url='https://cdn0.iconfinder.com/data/icons/astronomical-signs/16/Leo_zodiac_horoscope_astrology_sign_symbol-64.png';
  }
  else if ( (month ==8 && 22 < day )||(month==9 && day<23) ){
  star=stars[5];
    url='https://cdn0.iconfinder.com/data/icons/astronomical-signs/16/Virgo_zodiac_horoscope_astrology_sign_symbol-64.png';
  }
  else if ( (month ==9 && 22 < day )||(month==10 && day<23) ){
  star=stars[6];
    url='https://cdn0.iconfinder.com/data/icons/astronomical-signs/16/Libra_zodiac_horoscope_astrology_sign_symbol-64.png';
  }
  else if ( (month ==10 && 22 < day )||(month==11 && day<22) ){
  star=stars[7];
    url='https://cdn0.iconfinder.com/data/icons/astronomical-signs/16/astrology_zodiac_horoscope_scorpio_sign_scorpiones_symbol-64.png';
  }
  else if ( (month ==11 && 21 < day )||(month==12 && day<22) ){
  star=stars[8];
    url='https://cdn0.iconfinder.com/data/icons/astronomical-signs/16/Sagittarius_horoscope_zodiac_astrology_sign_symbol-64.png';
  }
  else if ( (month ==12 && 21 < day )||(month==1 && day<20) ){
  star=stars[9];
    url='https://pixabay.com/static/uploads/photo/2012/04/18/01/12/capricorn-36390_960_720.png';
  }
  else if ( (month ==1 && 19 < day )||(month==2 && day<19) ){
  star=stars[10];
    url='https://cdn0.iconfinder.com/data/icons/astronomical-signs/16/Aquarius_zodiac_horoscope_astrology_sign_symbol-64.png';
  }
  else if ( (month ==2 && 18 < day )||(month==3 && day<21) ){
  star=stars[11];
    url='https://cdn0.iconfinder.com/data/icons/astronomical-signs/16/Pisces_zodiac_sign_symbol_horoscope_astrology-64.png';
  }
  
  document.getElementById("display").innerHTML="You are "+star+" born in the year of "+animal;
  document.getElementById("zodiac").src=url;
  element.style.webkitTransform="rotate("+degree+"deg)";
  element.style.transform="rotate("+degree+"deg)";
  element.style.msTransform="rotate("+degree+"deg)";
}
}