function postToGoogle() {
   var field1 = $("input[type='radio'][name='qs1']:checked").val();
   var field2 = $("[name='feed']").val();

   $.ajax({
     url: "https://docs.google.com/forms/d/e/1FAIpQLSdjOTKRb7YiWi8OGPq6M6CRL0TpuAsUKacKp2XgruMbIp4wzg/formResponse",
     data: {
/* Get the entry IDs from the form's HTML
(...)",null,0,[[924752166,null,0]](...)
(...)",null,0,[[997497831,null,0]](...)
*/
       "entry.924752166": field1,
       "entry.997497831": field2
     },
     type: "POST",
     dataType: "xml",
     statusCode: {
       0: function() {
         //Success message
         alert("Success!");
       },
       200: function() {
         //Success Message
         alert("Success!");
       }
     }
   });
 }

/*
$(document).ready(function() {
   $('#form').submit(function() {
     postToGoogle();
     return false;
   });
});
*/