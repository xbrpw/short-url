var ImCan;
var Img= null;

function upload() {
  ImCan=document.getElementById("can");
  var fileinput=document.getElementById("imput");
  Img=new SimpleImage(fileinput);
  Img.drawTo(ImCan);
}

function IsLoaded (img){
  if ( img!= null && img.complete() ){
     return true;
  }
  else
      {
      alert("the Image is neither yet to be uploaded or didn't finish uploading");
      return false;
      }
}

function ChangeText() {
  if(! IsLoaded(Img)){
    return;
  }
  var dd1=document.getElementById("dim");
  var ImWidth=Img.getWidth();
  var ImHeight=Img.getHeight();
  dd1.innerHTML=ImWidth + " * " + ImHeight; 
}

function GrayStyle (){
  var Img1=new SimpleImage(Img);
  if (! IsLoaded(Img1)){
    return;
  }
  for (var pix of Img1.values()){
    var x=pix.getRed()+pix.getGreen()+pix.getBlue();
    x=x/3;
    pix.setRed(x);
    pix.setGreen(x);
    pix.setBlue(x);
 } 
  Img1.drawTo(ImCan);
}

function setColor (px,r,g,b){
  px.setRed(r);
  px.setGreen(g);
  px.setBlue(b);
}

function ToColor(col) {
  var Img2=new SimpleImage(Img);
  if (! IsLoaded(Img2)){
    return;
  }
  for(var pix of Img2.values()){
    var a= pix.getRed()+pix.getBlue()+pix.getBlue();
    a=a/3;
    if (a<128){
      if (col=="red")
        setColor(pix,2*a,0,0);
      else  if (col=="green")
        setColor(pix,0,140,0);
      else  if (col=="blue")
        setColor(pix,0,0,140);
    } else {
      if (col=="red")
       setColor(pix,255,(a*2)-255,(a*2)-255);
      else  if (col=="green")
       setColor(pix,(a*2)-255,140,(a*2)-255);
      else  if (col=="blue")
       setColor(pix,(a*2)-255,(a*2)-255,140);
    }
  }
  Img2.drawTo(ImCan);
}



function ToRainbow () {
  var Img3=new SimpleImage(Img);
 
  if (! IsLoaded(Img3)){
    return;
  }
  var height=Img.getHeight()/7;
   for(var pix of Img3.values()){
    var a= pix.getRed()+pix.getBlue()+pix.getBlue();
    a=a/3;
     var y=pix.getY();
    if (a<128){
      if(y<height)
        setColor(pix,2*a,0,0);
      else if ( (y>=height)&&(y<(2*height)) )
         setColor(pix,2*a,0.8*a,0);
       else if ((y>=(2*height))&&(y<(3*height)))
         setColor(pix,2*a,2*a,0);
      else if ((y>=(3*height))&&(y<(4*height)))
         setColor(pix,0,2*a,0);
      else if ((y>=(4*height))&&(y<(5*height)))
         setColor(pix,0,0,2*a);
      else if ((y>=(5*height))&&(y<(6*height)))
         setColor(pix,0.8*a,0,2*a);
      else if ((y>=(6*height))&&(y<(7*height)))
         setColor(pix,1.6*a,0,1.6*a);
    } else {
       if(y<height)
        setColor(pix,255,(a*2)-255,(a*2)-255);
      else if ( (y>=height)&&(y<(2*height)) )
         setColor(pix,255,1.2*a-51,(a*2)-255);
       else if ((y>=(2*height))&&(y<(3*height)))
         setColor(pix,255,255,(a*2)-255);
      else if ((y>=(3*height))&&(y<(4*height)))
         setColor(pix,(a*2)-255,255,(a*2)-255);
      else if ((y>=(4*height))&&(y<(5*height)))
         setColor(pix,(a*2)-255,(a*2)-255,255);
      else if ((y>=(5*height))&&(y<(6*height)))
         setColor(pix,1.2*a-51,(a*2)-255,255);
      else if ((y>=(6*height))&&(y<(7*height)))
         setColor(pix,0.4*a+153,(a*2)-255,0.4*a+153);
    }
  }
   Img3.drawTo(ImCan);
}

function RestImg (){
  if (! IsLoaded(Img)){
    return;
  }
  Img.drawTo(ImCan);
}

function blurImg (){
 if (! IsLoaded(Img)){
    return;
  }
  var Img4=new SimpleImage (Img.getWidth(),Img.getHeight());
  
  for(var pix of Img4.values()){
    var a=Math.random();
    var px=pix.getX();
    var py=pix.getY();
    if (a<0.5){
        Img4.setPixel(px,py,Img.getPixel(px,py));
    }
    else {
        var x;
        var y;
        do{
            x=Math.floor(Math.random()*10 - Math.random()*10);
            y=Math.floor(Math.random()*10 - Math.random()*10);
            
        }while((y+py<0)||(px+x<0)||(px+x>=Img.getWidth())||(py+y>=Img.getHeight()));
         Img4.setPixel(px,py,Img.getPixel(px+x,py+y));
    }
  }
  Img4.drawTo(ImCan);
}