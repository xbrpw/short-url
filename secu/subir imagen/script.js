var imcan,imcan2;  
var img=null;
  var img2=null;
function uploadfg() {
   imcan=document.getElementById("can");
  var finput=document.getElementById("fginput");
  img=new SimpleImage(finput);
  img.drawTo(imcan);
}

function uploadbg() {
  imcan2=document.getElementById("can2");
  var finputbg=document.getElementById("bginput");
  img2=new SimpleImage(finputbg);
  img2.drawTo(imcan2);
}

function makeItGray(){
   imcan2=document.getElementById("can2");
  for (var pix of img2.values() ){
    var av=(pix.getRed()+pix.getGreen()+pix.getBlue())/3;
    pix.setRed(av);
    pix.setGreen(av);
    pix.setBlue(av);
  }
  img2.drawTo(imcan2);
}

function composite(){
  if (img==null || ! img.complete()){
    alert("foreground image is not loaded");
    return;
  }
  if (img2==null || ! img2.complete()){
    alert("background image is not loaded");
    return;
  }
   
   var result=new SimpleImage(img.width,img.height);
  for (var pix of img.values()){
    var x=pix.getX();
    var y=pix.getY();
    if(pix.getRed() +pix.getBlue() < pix.getGreen())
      result.setPixel(x,y,img2.getPixel(x,y));
    else
      result.setPixel(x,y,pix);
  }
  clearCan();
  result.drawTo(imcan);
  img=null;
  img2=null;
}

function clearCan(){
  var ctx=imcan.getContext("2d");
  ctx.clearRect(0,0,imcan.width, imcan.height);
  ctx=imcan2.getContext("2d");
   ctx.clearRect(0,0,imcan2.width, imcan2.height);
}