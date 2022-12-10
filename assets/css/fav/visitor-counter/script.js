function nameDefined(ckie,nme)
{
   var splitValues
   var i
   for (i=0;i<ckie.length;++i)
   {
      splitValues=ckie[i].split("=")
      if (splitValues[0]==nme) return true
   }
   return false
}

function delBlanks(strng)
{
   var result=""
   var i
   var chrn
   for (i=0;i<strng.length;++i) {
      chrn=strng.charAt(i)
      if (chrn!=" ") result += chrn
   }
   return result
}
function getCookieValue(ckie,nme)
{
   var splitValues
   var i
   for(i=0;i<ckie.length;++i) {
      splitValues=ckie[i].split("=")
      if(splitValues[0]==nme) return splitValues[1]
   }
   return ""
}
function insertCounter() {
 readCookie()
 displayCounter()
}
 function displayCounter() {
 document.write('<H3 ALIGN="CENTER">')
 document.write("Has visitado esta página  ")
 if(counter==1) document.write("por primera vez.")
 else document.write(counter+" veces ")
 document.writeln('</H3>')
 }
function readCookie() {
 var cookie=document.cookie
 counter=0
 var chkdCookie=delBlanks(cookie)  //are on the client computer
 var nvpair=chkdCookie.split(";")
 if(nameDefined(nvpair,"pageCount"))
 counter=parseInt(getCookieValue(nvpair,"pageCount"))
 ++counter
 var futdate = new Date()
 var expdate = futdate.getTime()
 expdate += 3600000 * 24 *30  //expires in 1 hour
 futdate.setTime(expdate)

 var newCookie="pageCount="+counter
 newCookie += "; expires=" + futdate.toGMTString()
 window.document.cookie=newCookie
}
insertCounter();